import fs from 'fs';
import path from 'path';

const outDir = path.join(import.meta.dirname, '..', 'out');

function fixFile(filePath) {
  if (!filePath.endsWith('.html')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/charSet/g, 'charset');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Fixed:', filePath);
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else fixFile(full);
  }
}

walkDir(outDir);
console.log('All fixed');
