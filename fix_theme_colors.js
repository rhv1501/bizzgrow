const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  // Backgrounds
  { regex: /\bbg-white\b/g, replacement: 'bg-surface' },
  { regex: /\bbg-gray-50\b/g, replacement: 'bg-background' },
  { regex: /\bbg-gray-100\b/g, replacement: 'bg-background' },
  { regex: /\bbg-gray-200\b/g, replacement: 'bg-surface' },
  { regex: /\bbg-gray-900\b/g, replacement: 'bg-background' },
  { regex: /\bbg-slate-50\b/g, replacement: 'bg-background' },
  { regex: /\bbg-slate-100\b/g, replacement: 'bg-background' },
  { regex: /\bbg-zinc-50\b/g, replacement: 'bg-background' },
  { regex: /\bbg-zinc-100\b/g, replacement: 'bg-background' },
  { regex: /\bbg-\[\#f[a-f0-9]{5}\]\b/gi, replacement: 'bg-background' },

  // Texts
  { regex: /\btext-black\b/g, replacement: 'text-foreground' },
  { regex: /\btext-gray-900\b/g, replacement: 'text-foreground' },
  { regex: /\btext-gray-800\b/g, replacement: 'text-foreground' },
  { regex: /\btext-gray-700\b/g, replacement: 'text-foreground' },
  { regex: /\btext-slate-900\b/g, replacement: 'text-foreground' },
  { regex: /\btext-zinc-900\b/g, replacement: 'text-foreground' },
  { regex: /\btext-gray-600\b/g, replacement: 'text-muted' },
  { regex: /\btext-gray-500\b/g, replacement: 'text-muted' },
  { regex: /\btext-slate-600\b/g, replacement: 'text-muted' },
  { regex: /\btext-slate-500\b/g, replacement: 'text-muted' },
  
  // Borders
  { regex: /\bborder-black\b/g, replacement: 'border-border' },
  { regex: /\bborder-gray-200\b/g, replacement: 'border-border' },
  { regex: /\bborder-gray-300\b/g, replacement: 'border-border' },
  { regex: /\bborder-gray-800\b/g, replacement: 'border-border' },
  { regex: /\bborder-gray-900\b/g, replacement: 'border-border' }
];

let filesUpdated = 0;

walkDir('/mnt/data/bizzgrow/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({regex, replacement}) => {
      content = content.replace(regex, replacement);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      filesUpdated++;
    }
  }
});
console.log(`Done. Updated ${filesUpdated} files.`);
