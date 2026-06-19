const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  { regex: /bg-\[\#FF3366\]/g, replacement: 'bg-brand-primary' },
  { regex: /bg-\[\#7000FF\]/g, replacement: 'bg-brand-secondary' },
  { regex: /bg-\[\#FFD500\]/g, replacement: 'bg-brand-secondary' },
  { regex: /bg-\[\#00E5FF\]/g, replacement: 'bg-brand-primary' },
  { regex: /text-\[\#FF3366\]/g, replacement: 'text-brand-primary' },
  { regex: /text-\[\#7000FF\]/g, replacement: 'text-brand-secondary' },
  { regex: /text-\[\#FFD500\]/g, replacement: 'text-brand-secondary' },
  { regex: /text-\[\#00E5FF\]/g, replacement: 'text-brand-primary' },
  { regex: /border-4 border-gray-900/g, replacement: 'border border-border' },
  { regex: /border-2 border-gray-900/g, replacement: 'border border-border' },
  { regex: /border-gray-900/g, replacement: 'border-border' },
  { regex: /border-black/g, replacement: 'border-border' },
  { regex: /bg-black/g, replacement: 'bg-foreground' },
  { regex: /text-black/g, replacement: 'text-foreground' },
  { regex: /shadow-\[[0-9]+px_[0-9]+px_[0-9]+px_[0-9]+px_[^\]]+\]/g, replacement: 'shadow-md' },
  { regex: /shadow-\[.*?rgba\(0,0,0,1\).*?\]/g, replacement: 'shadow-md' },
  { regex: /shadow-\[.*?#0A0A0A.*?\]/g, replacement: 'shadow-md' },
  { regex: /hover:shadow-\[.*?\]/g, replacement: 'hover:shadow-lg' },
  { regex: /md:shadow-\[.*?\]/g, replacement: 'md:shadow-lg' }
];

walkDir('/mnt/data/bizzgrow/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({regex, replacement}) => {
      content = content.replace(regex, replacement);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
console.log("Done.");
