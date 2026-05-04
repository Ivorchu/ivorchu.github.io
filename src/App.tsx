import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Research from './components/sections/Research';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Courses from './components/sections/Courses';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Experience />
        <Courses />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Ivor Chu · Built with React, TypeScript &amp; Tailwind CSS</p>
      </footer>
    </>
  );
}
