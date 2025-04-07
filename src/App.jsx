import React, { useRef, useEffect, useState } from 'react';
import Background from './Background';
import RotatingTextBlock from './RotatingTextBlock';


// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: undefined }));
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Disable scrolling initially
    if (!isClicked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isClicked]);

  const handleFirstClick = () => {
    setIsClicked(true);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // useEffect(() => {
  //   // Set up an interval to update the time every second
  //   const intervalId = setInterval(() => {
  //     setTime(new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "medium" }));
  //   }, 500);
    
  //   // Clean up the interval when component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div onClick={handleFirstClick} className="relative">
      <Background />
      {!isClicked && (
        <div className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center z-4">
          {/* <Background /> */}
          <h1 className="text-3xl font-bold relative z-20">Click to Enter</h1>
          {/* <button className={`'text-white-400'}`}>Click to Enter</button> */}
          {/* <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Click to Enter
          </button> */}
        </div>
      )}
      {isClicked && (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Michael Karb</div>
            {time}
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {menuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`transition ${activeSection === 'home' ? 'text-blue-400' : 'hover:text-blue-300'}`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`transition ${activeSection === 'about' ? 'text-blue-400' : 'hover:text-blue-300'}`}>About</button>
              <button onClick={() => scrollToSection('projects')} className={`transition ${activeSection === 'projects' ? 'text-blue-400' : 'hover:text-blue-300'}`}>Projects</button>
              <button onClick={() => scrollToSection('skills')} className={`transition ${activeSection === 'skills' ? 'text-blue-400' : 'hover:text-blue-300'}`}>Skills</button>
              <button onClick={() => scrollToSection('contact')} className={`transition ${activeSection === 'contact' ? 'text-blue-400' : 'hover:text-blue-300'}`}>Contact</button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800 py-2">
              <div className="flex flex-col space-y-3 px-4 pb-3">
                <button onClick={() => scrollToSection('home')} className={`text-left ${activeSection === 'home' ? 'text-blue-400' : ''}`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`text-left ${activeSection === 'about' ? 'text-blue-400' : ''}`}>About</button>
                <button onClick={() => scrollToSection('projects')} className={`text-left ${activeSection === 'projects' ? 'text-blue-400' : ''}`}>Projects</button>
                <button onClick={() => scrollToSection('skills')} className={`text-left ${activeSection === 'skills' ? 'text-blue-400' : ''}`}>Skills</button>
                <button onClick={() => scrollToSection('contact')} className={`text-left ${activeSection === 'contact' ? 'text-blue-400' : ''}`}>Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Three.js Background */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* <Background /> */}
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Michael Karb</h1>
          {/* <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 animate-fadeIn">Software Developer</h2> */}
          {/* <TypewriterHeader /> */}
          {/* Replace the static h2 with the rotating block */}
          <div className="flex justify-center mb-6">
            {/* <RotatingTextBlock 
              titles={[
                'Software Developer', 
                'Web Designer', 
                'Problem Solver', 
                'Code Enthusiast',
                'Overwatch Grandmaster Support',
                'Erotic Anime Watcher',
                'Giant Penis',
                'Enthusiasm',
                'Fuck you Justin',
              ]} 
            /> */}
          </div>
    
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-2 ">Made this website so AI doesn't take my job.</p>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-2">(AI made this website)</p>
          <p className="text-xs md:text-xs max-w-sm mx-auto mb-8">(Just kidding)</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition">
            Touch me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-full bg-gray-700 flex-shrink-0">
              {/* Profile image placeholder */}
              <div className="w-full h-full rounded-full flex items-center justify-center text-center">
                <span>Mirror Selfie</span>
              </div>
            </div>
            <div>
              <p className="text-lg mb-4">
                {/* Hello! I'm a passionate software developer with experience in web development, 
                cloud architecture, and machine learning. I enjoy solving complex problems and building 
                intuitive applications that make a difference. */}
                idk man
              </p>
              <p className="text-lg mb-4">
                {/* With over X years of experience in the industry, I've worked on various projects 
                ranging from small business websites to enterprise-level applications. My goal is 
                to create software that is not only functional but also user-friendly and maintainable. */}
                unless you have a job for me
              </p>
              <div className="flex gap-4 mt-6">
                <button className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition">
                  {/* Download Resume */}
                  Resume
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
                >
                  See My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center relative z-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>mdk804@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Location:</p>
                  <p>Cary, NC, USA</p>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    GitHub
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
      )}
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl hover:translate-y-1">
      <div className="h-48 bg-gray-600 relative">
        {/* Project image placeholder */}
        <div className="w-full h-full flex items-center justify-center text-center p-4">
          <span>{project.title} Screenshot</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-800 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.demo} 
            className="text-blue-400 hover:text-blue-300 transition"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a 
            href={project.repo} 
            className="text-blue-400 hover:text-blue-300 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// Skill Badge Component
function SkillBadge({ skill }) {
  return (
    <div className="bg-gray-700 rounded-lg p-4 text-center shadow transition hover:bg-gray-600">
      <div className="text-blue-400 text-lg mb-2">{skill.icon}</div>
      <div>{skill.name}</div>
    </div>
  );
}


// Sample Data
const projects = [
  {
    title: "Project One",
    description: "A full-stack web application with user authentication and real-time data processing.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "#",
    repo: "#"
  },
  {
    title: "Project Two",
    description: "An AI-powered recommendation engine that analyzes user preferences.",
    technologies: ["Python", "TensorFlow", "Flask", "AWS"],
    demo: "#",
    repo: "#"
  },
  {
    title: "Project Three",
    description: "Mobile application for tracking fitness activities and nutrition.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    demo: "#",
    repo: "#"
  },
  {
    title: "Project Four",
    description: "E-commerce platform with integrated payment processing and inventory management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
    demo: "#",
    repo: "#"
  },
  {
    title: "Project Five",
    description: "Browser extension that enhances productivity and blocks distractions.",
    technologies: ["JavaScript", "Chrome API", "CSS", "LocalStorage"],
    demo: "#",
    repo: "#"
  },
  {
    title: "Project Six",
    description: "Interactive data visualization dashboard for business analytics.",
    technologies: ["D3.js", "Vue.js", "Express", "GraphQL"],
    demo: "#",
    repo: "#"
  }
];

const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "TS" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔄" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" }
];


export default App;

const TypewriterHeader = () => {
  const fullText = "Click To Enter";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  
  return (
    <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
};