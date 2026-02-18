import { projects } from './src/data/projects.ts';
import https from 'https';
import http from 'http';

const CONCURRENCY = 5;

// Helper to check a single URL
function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ url, status: res.statusCode, ok: true });
      } else if (res.statusCode === 403 || res.statusCode === 999) {
        // LinkedIn and some others block HEAD or bots, assume OK if not 404
        resolve({ url, status: res.statusCode, ok: true, note: 'Likely blocked' });
      } else {
        resolve({ url, status: res.statusCode, ok: false });
      }
    });

    req.on('error', (e) => {
      resolve({ url, error: e.message, ok: false });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ url, error: 'Timeout', ok: false });
    });

    req.end();
  });
}

async function main() {
  const allLinks = [];

  projects.forEach(p => {
    // Links
    if (p.links) {
      p.links.split('\n').forEach(l => {
        const url = l.trim();
        if (url) allLinks.push({ source: p.name, field: 'links', url });
      });
    }
    // Press
    if (p.press) {
      p.press.split('\n').forEach(l => {
        const url = l.trim();
        if (url.startsWith('http')) allLinks.push({ source: p.name, field: 'press', url });
      });
    }
    // Video
    if (p.video && p.video.startsWith('http')) {
      allLinks.push({ source: p.name, field: 'video', url: p.video });
    }
    // Credits (if URL)
    if (p.credits && p.credits.startsWith('http')) {
      allLinks.push({ source: p.name, field: 'credits', url: p.credits });
    }
  });

  console.log(`Found ${allLinks.length} links to check...`);

  const results = [];
  for (let i = 0; i < allLinks.length; i += CONCURRENCY) {
    const chunk = allLinks.slice(i, i + CONCURRENCY);
    const chunkResults = await Promise.all(chunk.map(async (item) => {
      const res = await checkUrl(item.url);
      return { ...item, ...res };
    }));
    results.push(...chunkResults);
    process.stdout.write('.');
  }
  console.log('\nDone.');

  const broken = results.filter(r => !r.ok);
  
  if (broken.length > 0) {
    console.log('\n--- BROKEN LINKS ---');
    broken.forEach(b => {
      console.log(`[${b.status || b.error}] ${b.source} (${b.field}): ${b.url}`);
    });
  } else {
    console.log('\nAll links OK!');
  }
}

main();
