import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const directory = resolve('dist');
const base = '/mrs_boutique/';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/' || pathname === base.slice(0, -1)) { response.writeHead(302, { Location: base }); return response.end(); }
    if (!pathname.startsWith(base)) { response.writeHead(404); return response.end('Not found'); }
    let path = resolve(directory, pathname.slice(base.length));
    if (path !== directory && !path.startsWith(directory + '/')) { response.writeHead(403); return response.end('Forbidden'); }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    const file = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    response.end(file);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(resolve(directory, '404.html')).catch(() => 'Not found'));
  }
});
server.listen(4173, '0.0.0.0', () => process.stdout.write('Preview: http://localhost:4173/mrs_boutique/\n'));
