const fs = require('fs');
const path = require('path');

// globals.css
let globalsPath = '/mnt/data/bizzgrow/src/app/globals.css';
let globalsContent = fs.readFileSync(globalsPath, 'utf8');
globalsContent = globalsContent.replace(/--color-brand-mint: #22D3EE; \/\* Vivid Cyan \(Cyan 400\) - Bright pop color \*\//, '--color-brand-mint: #FF8787; /* Pastel Red */');
fs.writeFileSync(globalsPath, globalsContent, 'utf8');

// Hero.tsx
let heroPath = '/mnt/data/bizzgrow/src/app/components/Hero.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(/<span className="text-white drop-shadow-md">awesome<\/span>/g, '<span className="text-foreground drop-shadow-md">awesome</span>');
fs.writeFileSync(heroPath, heroContent, 'utf8');

// Marquee.tsx
let marqueePath = '/mnt/data/bizzgrow/src/app/components/Marquee.tsx';
let marqueeContent = fs.readFileSync(marqueePath, 'utf8');
marqueeContent = marqueeContent.replace(/text-white/g, 'text-foreground');
fs.writeFileSync(marqueePath, marqueeContent, 'utf8');

// Features.tsx
let featuresPath = '/mnt/data/bizzgrow/src/app/components/Features.tsx';
let featuresContent = fs.readFileSync(featuresPath, 'utf8');
featuresContent = featuresContent.replace(/text-brand-primary underline/g, 'text-brand-accent underline');
fs.writeFileSync(featuresPath, featuresContent, 'utf8');

// Portfolio.tsx
let portfolioPath = '/mnt/data/bizzgrow/src/app/components/Portfolio.tsx';
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');
portfolioContent = portfolioContent.replace(/text-brand-secondary underline/g, 'text-brand-accent underline');
fs.writeFileSync(portfolioPath, portfolioContent, 'utf8');

// About page
let aboutPath = '/mnt/data/bizzgrow/src/app/about/page.tsx';
let aboutContent = fs.readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/<h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest drop-shadow-md">Results Over Fluff<\/h3>/g, '<h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 uppercase tracking-widest">Results Over Fluff</h3>');
aboutContent = aboutContent.replace(/<h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest drop-shadow-md">Extreme Ownership<\/h3>/g, '<h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 uppercase tracking-widest">Extreme Ownership</h3>');
fs.writeFileSync(aboutPath, aboutContent, 'utf8');

console.log("Specific contrast and color fixes done.");
