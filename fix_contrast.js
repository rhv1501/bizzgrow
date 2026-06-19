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
    
    // Replace text-white with text-foreground if bg-brand-primary or bg-brand-secondary is in the same class attribute string
    // A regex to match className="..."
    content = content.replace(/className=(["`'])(.*?)\1/g, (match, quote, classes) => {
        if ((classes.includes('bg-brand-primary') || classes.includes('bg-brand-secondary') || classes.includes('bg-brand-accent') || classes.includes('bg-[#FFD500]')) && classes.includes('text-white')) {
            return `className=${quote}${classes.replace(/text-white/g, 'text-foreground')}${quote}`;
        }
        return match;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated contrast: ${filePath}`);
    }
  }
});
console.log("Contrast fix done.");
