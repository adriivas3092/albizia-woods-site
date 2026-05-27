const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  const isHero = file.includes('Hero') || file.includes('HomePage.jsx');

  // Simple regex to find img tags and add attributes
  // Matches <img ... >
  content = content.replace(/<img([^>]*)>/g, (match, attrs) => {
    let newAttrs = attrs;

    if (isHero) {
      if (!newAttrs.includes('fetchpriority="high"')) {
        newAttrs += ' fetchpriority="high"';
        modified = true;
      }
      // ensure no loading="lazy" on hero
      if (newAttrs.includes('loading="lazy"')) {
        newAttrs = newAttrs.replace(/loading="lazy"/g, '');
        modified = true;
      }
    } else {
      if (!newAttrs.includes('loading="lazy"')) {
        newAttrs += ' loading="lazy"';
        modified = true;
      }
      if (!newAttrs.includes('decoding="async"')) {
        newAttrs += ' decoding="async"';
        modified = true;
      }
    }

    return `<img${newAttrs}>`;
  });

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Optimized images in ${path.basename(file)}`);
  }
});
