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
    
    // Replace bg-brand-secondary with bg-brand-accent and bg-brand-primary with bg-brand-mint when rotate is present
    content = content.replace(/className=(["`'])(.*?)\1/g, (match, quote, classes) => {
        if (classes.includes('rotate')) {
            // Only update if it's currently a soft pastel
            let newClasses = classes;
            if (newClasses.includes('bg-brand-secondary')) {
                newClasses = newClasses.replace(/bg-brand-secondary/g, 'bg-brand-accent');
            } else if (newClasses.includes('bg-brand-primary')) {
                newClasses = newClasses.replace(/bg-brand-primary/g, 'bg-brand-mint');
            } else if (newClasses.includes('bg-white') && classes.includes('text-gray-900')) {
                // Some are just white, let's make them pop too with peach
                newClasses = newClasses.replace(/bg-white/g, 'bg-brand-peach');
            }
            
            // Also ensure text is dark on these bright accents
            if (newClasses.includes('text-white')) {
                newClasses = newClasses.replace(/text-white/g, 'text-foreground');
            }
            
            return `className=${quote}${newClasses}${quote}`;
        }
        return match;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated rotated box: ${filePath}`);
    }
  }
});
console.log("Rotated box fix done.");
