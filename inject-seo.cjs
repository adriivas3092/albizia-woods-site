const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

const getSeoProps = (pageName) => {
  switch(pageName) {
    case 'HomePage.jsx': return '<SEO />';
    case 'AboutPage.jsx': return '<SEO title="Our Story | Albizia Woods" description="Discover the roots of Albizia Woods, our architectural philosophy, and our commitment to Costa Rican craftsmanship." url="https://www.albiziawoods.com/about" />';
    case 'ProjectsPage.jsx': return '<SEO title="Architectural Projects | Albizia Woods" description="Explore our portfolio of premium bespoke woodworking for residential, hospitality, and commercial spaces." url="https://www.albiziawoods.com/projects" />';
    case 'CollectionsPage.jsx': return '<SEO title="Furniture Collections | Albizia Woods" description="Discover our timeless furniture collections, blending minimal luxury with organic textures." url="https://www.albiziawoods.com/collections" />';
    case 'BespokePage.jsx': return '<SEO title="Bespoke Studio | Albizia Woods" description="Commission custom furniture and architectural millwork tailored to your specific vision." url="https://www.albiziawoods.com/bespoke" />';
    case 'MaterialsPage.jsx': return '<SEO title="Our Materials | Albizia Woods" description="Learn about the premium Costa Rican woods, natural stones, and sustainable materials we use in our craft." url="https://www.albiziawoods.com/materials" />';
    case 'ContactPage.jsx': return '<SEO title="Contact Us | Albizia Woods" description="Get in touch with our design team for bespoke commissions, collaborations, and project inquiries." url="https://www.albiziawoods.com/contact" />';
    case 'PrivacyPage.jsx': return '<SEO title="Privacy Policy | Albizia Woods" description="Read our privacy policy regarding data collection and usage." url="https://www.albiziawoods.com/privacy-policy" />';
    case 'TermsPage.jsx': return '<SEO title="Terms of Service | Albizia Woods" description="Read the terms of service for using the Albizia Woods website and services." url="https://www.albiziawoods.com/terms-of-service" />';
    default: return '<SEO />';
  }
};

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('import SEO from')) {
    // Add import
    content = content.replace(/(import.*?;?\n)/, `$1import SEO from '../components/SEO';\n`);
    
    // Add component inside <main>
    const seoComponent = getSeoProps(page);
    content = content.replace(/<main[^>]*>/, `<main>\n      ${seoComponent}`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${page}`);
  }
});
