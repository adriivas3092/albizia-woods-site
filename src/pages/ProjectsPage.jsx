import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsEditorial from '../components/projects/ProjectsEditorial';
import ProjectsContext from '../components/projects/ProjectsContext';
import ProjectsDetails from '../components/projects/ProjectsDetails';
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
      <ProjectsEditorial />
      <ProjectsContext />
      <ProjectsDetails />
      <ProjectsInquiryCTA />
      <Footer />
    </div>
  );
}
