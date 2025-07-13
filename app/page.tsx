import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Certifications } from '@/components/certifications';
import { Projects } from '@/components/projects';
import { Technologies } from '@/components/technologies';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}
