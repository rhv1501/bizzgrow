const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('/mnt/data/bizzgrow/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace gray-900 with foreground (our new super dark purple)
    content = content.replace(/text-gray-900/g, 'text-foreground');
    content = content.replace(/bg-gray-900/g, 'bg-foreground');
    content = content.replace(/border-gray-900/g, 'border-foreground');
    
    // Replace black with foreground as well just in case
    content = content.replace(/text-black/g, 'text-foreground');
    content = content.replace(/bg-black/g, 'bg-foreground');
    content = content.replace(/border-black/g, 'border-foreground');

    // Replace lighter grays with our muted purple
    content = content.replace(/text-gray-600/g, 'text-muted');
    content = content.replace(/text-gray-500/g, 'text-muted');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated to super dark purple: ${filePath}`);
    }
  }
});
console.log("Super dark purple fix done.");
