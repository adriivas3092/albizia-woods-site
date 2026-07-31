import ProjectsHero from '../components/projects/ProjectsHero';
import SEO from '../components/SEO';
import ProjectsCategories from '../components/projects/ProjectsCategories';
import ProjectsInquiryCTA from '../components/projects/ProjectsInquiryCTA';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function ProjectsPage() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <ProjectsHero />
      <ProjectsCategories />
      <ProjectsInquiryCTA />
      <Footer />
    </div>
  );
}
