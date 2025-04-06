import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { Menu, X, Github, Linkedin, ExternalLink, Mail, FileText, ArrowRight, Moon, Sun, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    AOS.init({ 
      offset: 100,
      duration: 700,
      easing: 'ease-in-out',
      once: true 
    });

    const typed = new Typed('.typed-element', {
      strings: ['Software Engineer', 'Full-Stack Developer', 'UI/UX Enthusiast'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isDarkTheme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const techLogos = [
    {
      name: 'React',
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      subtopics: ['Hooks', 'Tailwind CSS', 'Context/Redux', 'React Native'],
      details: 'Proficient in building complex user interfaces with React.'
    },
    {
      name: 'Firebase',
      url: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      subtopics: ['Auth', 'Firestore', 'Storage', 'Hosting'],
      details: 'Extensive experience with Firebase platform.'
    },
    {
      name: 'Java',
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      subtopics: ['JDK', 'OOPS', 'JDBC', 'Generics'],
      details: 'Strong Java fundamentals for enterprise applications.'
    },
    {
      name: 'C++',
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      subtopics: ['Basic Operations', 'OOPS', 'DSA', 'Pointers & References'],
      details: 'Proficient in C++ with focus on performance.'
    },
    {
      name: 'Python',
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      subtopics: ['Django', 'Flask', 'NumPy', 'Pandas'],
      details: 'Versatile Python developer for web and data.'
    },
    {
      name: 'SQL & NoSQL',
      url: 'https://www.svgrepo.com/show/484232/database.svg',
      subtopics: ['MySQL', 'MongoDB', 'Indexing', 'Optimization'],
      details: 'Deep knowledge of database design and optimization.'
    },
    {
      name: 'Web Development',
      url: 'https://www.svgrepo.com/show/249559/browser-web-development.svg',
      subtopics: ['HTML', 'CSS', 'JavaScript', 'MERN Stack'],
      details: 'Solid grasp of core web development principles.'
    },
    {
      name: 'Expertise in Prompt Engineering',
      url: 'https://www.svgrepo.com/show/235200/artificial-intelligence-brain.svg',
      subtopics: ['Claude', 'Chatgpt'],
      details: 'Proficient in crafting precise and effective prompts for optimal AI responses.'
    },
    {
      name: 'Agile & Software Development Methodologies',
      url: 'https://www.svgrepo.com/show/426043/coding.svg',
      subtopics: ['SDLC', 'Agile', 'Scrum', 'Version Control & Collaboration'],
      details: 'Proficient in Agile, SDLC, and modern software development methodologies.'
    }
  ];

  const projectDemos = [
    {
      title: 'MyHarmony',
      video: 'https://media-hosting.imagekit.io//c14dc76f71234f11/Myharmony.mp4?Expires=1836115950&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U8rbLCFrFN59WXx2U~1sJoVN3s1qV1MCJ002PrS-BDGW9XxPJN0k~m-NabdGIYj-lVXmZGTBex1SN7EceDYaQFRqXQxXIiOqJzNyR-ZCXQSN4X~Mhe4uIeAzImztdmNuRU6nzI8NN-P7wWThW9O03iSKUXjOiCObPlmvhRgNVio9Uq8e-lqEPnz8wWkyVlDsQjdQkQhDH1ygBFnmIK-FnR7HUPGnfSrSeNfGTd758sJNGj1IZoaNvO4GAYdMeHGtgt-6hWfKCvQyXUV3E~OsRAjGKeWPUgwSZ7uSzWVPFdRsKrVsqQAM-sFb7H~Kw7ZdsTJB1QZ6WuJu2dX0Pd2K6w__',
      link: 'https://myharmony.netlify.app'
    },
    {
      title: 'GeekPeak',
      video: 'https://media-hosting.imagekit.io//60c2dd7b18da4f7b/Geekpeak.mp4?Expires=1836115950&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xFSITDj18HCz-3UkGpznwAcBQtEbFANoHJCxzg~b3af1Tb6ierR7ox9VBsdlg15o0qFS-sjIwPm8T7PMjBaXEITgno71wO0wb-ErBbN1fX5MqfeSVhLlBh3e9pi7TNTviqOSKnNHONCfPC3c051RX6stG-JNq4yUnLfaFC~xnBrCMOXEX92C5oYhg-dGxDIjxlGzTirRYPGov0Aqa0r9UtDgU~0ItyHDx-muzL4o0XDpbnGp539MNw1ME2OWnnbxCu2zQYCPi-5Z8D~ie8que~l4L9CVLZ8az3WOypuikA58jDlQLUR1DJVHOjAxYjquEc-E5yAhHtvdjsFH4pxNCA__',
      link: 'https://geekpeak.netlify.app'
    },
    {
      title: 'Online Gamestore',
      video: 'https://media-hosting.imagekit.io//4b2982d4c39e405e/Gamestore.mp4?Expires=1836115832&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fsKPdjlO5jcYg8XDBTBkWWVFdrXtdXNCgZkIj55hUZxzTrgyliFxlFIV2hPWOKTRRwPcA2NwGfazHMb~JYTMlARl18pkzmTtN27fICTpUTh-T37fefDH45I0Qiod5YFdJGG5QfIPkgw1u6doZwRPV6AYi9JHUv1F1yBpEBlpTcORak5UpawxLdre6UhOLNK33QOlgD86~CVyURhNJHLxvF3EzcwUGIRO29doRNCNhS-xVGaJaC93LIRQJJRIemwflOMZcF3iESs5eCzWfaKMKH0PGuSGO3SZFbfC2buZTnQI3ml5tzuS9kgcDIUX7AK3TNjj4A3PnksFZRwUVEnpZw__',
      link: 'https://localhost'
    }
  ];

  const theme = {
    bg: isDarkTheme ? 'bg-black' : 'bg-white',
    text: isDarkTheme ? 'text-white' : 'text-black',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-600',
    border: isDarkTheme ? 'border-gray-800' : 'border-gray-200',
    cardBg: isDarkTheme ? 'bg-zinc-900' : 'bg-gray-50',
    highlight: isDarkTheme ? 'bg-white text-black' : 'bg-black text-white',
    highlightHover: isDarkTheme ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-gray-800 hover:text-white',
    input: isDarkTheme ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-300',
    btnOutline: isDarkTheme ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white',
    imgFilter: isDarkTheme ? 'grayscale' : 'grayscale-0',
    iconBg: isDarkTheme ? 'bg-gray-800' : 'bg-gray-100',
    glowEffect: isDarkTheme ? 'hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]',
    profileOutline: isDarkTheme ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_15px_rgba(0,0,0,0.5)]'
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} overflow-x-hidden font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`h-16 fixed top-0 left-0 right-0 w-full ${theme.bg}/90 backdrop-blur-sm z-50 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            CallmeHarsh<span className={isDarkTheme ? 'text-gray-500' : 'text-gray-400'}>.</span>
          </div>
          
          <div className="hidden md:flex gap-6 items-center">
            {['About', 'Skills', 'Projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] ${isDarkTheme ? 'after:bg-white' : 'after:bg-black'} after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`border px-4 py-1 text-sm font-medium ${theme.btnOutline} transition-all duration-300 ${theme.glowEffect}`}
            >
              Contact Me
            </button>
            
            <button 
              onClick={toggleTheme} 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.border} border`}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.border} border`}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="text-xl" onClick={() => setIsMenuOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>

        <div className={`fixed top-0 left-0 w-full h-screen ${theme.bg} z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-xl">
              <X />
            </button>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`text-lg py-2 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'} transition-colors duration-200`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6" data-aos="fade-right">
            <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs`}>
              Full-Stack Developer
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              I'm <span>Chanabasappa</span>
            </h1>
      
            <div className="text-lg md:text-xl font-medium">
              I'm a <span className="typed-element"></span>
            </div>
      
            <p className={`text-sm md:text-base ${theme.textMuted} max-w-md`}>
              Specialized in building exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
      
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/ItsHarsh45', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/harshkemali/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/driftinalong5?utm_source=qr', label: 'Instagram' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-8 h-8 border ${theme.border} rounded-full flex items-center justify-center ${theme.textMuted} transition-all duration-200 ${isDarkTheme ? 'hover:border-white hover:text-white' : 'hover:border-black hover:text-black'} ${theme.glowEffect}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
      
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://drive.google.com/file/d/1ghWODI5Cd5yp60ZZtYjMASZP2Yy20lcN/view?usp=sharing" rel="noopener noreferrer">
                <button className={`w-full sm:w-36 px-4 py-2 ${theme.highlight} font-medium text-sm transition-all duration-200 ${theme.highlightHover} flex items-center justify-center gap-2 ${theme.glowEffect}`}>
                  Download Resume <FileText size={14} />
                </button>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full sm:w-36 px-4 py-2 border ${theme.border} font-medium text-sm transition-all duration-200 ${isDarkTheme ? 'hover:border-white' : 'hover:border-black'} flex items-center justify-center gap-2 ${theme.glowEffect}`}
              >
                Contact Me <ArrowRight size={14} />
              </button>
            </div>
          </div>
      
          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="profile-container w-64 h-64 md:w-80 md:h-80 relative">
                <div className="particles-container absolute inset-0 -z-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`particle absolute rounded-full ${isDarkTheme ? 'bg-blue-400' : 'bg-blue-300'}`}
                      style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.6,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 10 + 10}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="absolute inset-0 rotating-ring"></div>
                
                <div 
                  className="absolute inset-0 shape-morph"
                  style={{
                    borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                  }}
                ></div>
                
                <div className="absolute inset-0 overflow-hidden profile-image-container" style={{ borderRadius: '60% 40% 50% 50%/60% 30% 40% 40%' }}>
                  <img 
                    src="https://i.ibb.co/5xcLVSxY/6e9f5a901157.png" 
                    alt="Profile" 
                    className="profile-image w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <style jsx="true">{`
              .profile-container {
                animation: float 6s ease-in-out infinite;
                transform-style: preserve-3d;
              }
              
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              
              .rotating-ring {
                border: 2px dashed ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
                border-radius: 50%;
                transform: scale(1.1);
                animation: rotate 20s linear infinite;
              }
              
              @keyframes rotate {
                0% { transform: scale(1.1) rotate(0deg); }
                100% { transform: scale(1.1) rotate(360deg); }
              }
              
              .shape-morph {
                box-shadow: 0 0 20px 5px ${isDarkTheme ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)'};
                animation: morph 8s ease-in-out infinite;
                background: ${isDarkTheme ? 'linear-gradient(90deg, rgba(70,70,255,0.5), rgba(70,255,70,0.5))' : 'linear-gradient(90deg, rgba(0,0,255,0.2), rgba(0,255,0,0.2))'};
                transition: all 1s ease-in-out;
              }
              
              @keyframes morph {
                0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
                25% { border-radius: 40% 60% 70% 30%/30% 60% 40% 70%; }
                50% { border-radius: 70% 30% 50% 50%/30% 30% 70% 70%; }
                75% { border-radius: 30% 70% 70% 30%/50% 50% 30% 70%; }
                100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
              }
              
              .particle {
                animation: moveParticle linear infinite;
                filter: blur(1px);
              }
              
              @keyframes moveParticle {
                0% { transform: translate(0, 0); }
                25% { transform: translate(30px, -30px); }
                50% { transform: translate(0, -60px); }
                75% { transform: translate(-30px, -30px); }
                100% { transform: translate(0, 0); }
              }
              
              .profile-image-container {
                transition: all 0.5s ease;
              }
              
              .profile-image {
                transition: all 0.5s ease;
                ${isDarkTheme ? 'filter: grayscale(80%) brightness(0.8);' : ''}
              }
              
              .profile-image-container:hover .profile-image {
                filter: none;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 ${isDarkTheme ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <div className="w-full h-72 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://i.ibb.co/9X8Y78Z/6be9afce84d4.jpg" 
                    alt="About Me" 
                    className={`w-full h-full object-cover ${theme.imgFilter}`}
                  />
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs mb-3`}>
                Coding Enthusiast
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Tech Explorer & Code Artist</h2>
              <p className={`${theme.textMuted} text-sm md:text-base mb-6`}>
                Creative problem-solver with a passion for building cool stuff that makes a difference. Always curious, constantly learning, and excited to dive into new technologies!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Name', value: 'Chanabasappa Kemali' },
                  { label: 'Email', value: 'harshkemali123@gmail.com' },
                  { label: 'Location', value: 'Bangalore, India' },
                  { label: 'Status', value: 'Ready to create magic ✨' }
                ].map((item) => (
                  <div key={item.label}>
                    <div className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-600'} text-sm`}>{item.label}</div>
                    <div className="font-medium text-sm md:text-base">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-lg mx-auto mb-12">
            <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs mb-3`}>
              My Expertise
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Technical Skills</h2>
            <p className={`${theme.textMuted} text-sm`}>
              Comprehensive expertise across modern technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {techLogos.map((tech, index) => (
              <div
                key={tech.name}
                className="relative skill-card group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`h-full flex flex-col items-center justify-center p-8 border ${theme.border} ${theme.cardBg} rounded-lg transition-all duration-300`}>
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className={`w-16 h-16 mb-4 ${theme.imgFilter}`}
                  />
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                </div>
                
                <div className="tooltip-content">
                  <div className={`p-5 ${theme.cardBg} border ${theme.border} rounded-lg shadow-xl`}>
                    <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                    <p className={`text-sm mb-4 leading-relaxed`}>{tech.details}</p>
                    
                    <div className="py-3">
                      <h4 className="text-xs uppercase tracking-wider mb-3 font-semibold">Related Skills</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {tech.subtopics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-xs">
                            <span className="w-1.5 h-1.5 bg-current rounded-full flex-shrink-0"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .skill-card {
            perspective: 1000px;
            position: relative;
            z-index: 1;
            transition: z-index 0s linear 0.3s;
          }
          
          .skill-card:hover {
            z-index: 10;
            transition-delay: 0s;
          }
          
          .tooltip-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            transform: translateY(10px);
            pointer-events: none;
          }
          
          .tooltip-content > div {
            width: 90%;
            max-width: 300px;
            border-width: 1px;
            opacity: 0.98;
            position: relative;
            z-index: 10;
          }
          
          .skill-card:hover .tooltip-content {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
          }
          
          .skill-card:hover > div:first-child {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          
          @media (max-width: 640px) {
            .tooltip-content > div {
              width: 95%;
            }
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${isDarkTheme ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-lg mx-auto mb-12">
            <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs mb-3 rounded-md`}>
              Portfolio
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured Projects</h2>
            <p className={`${theme.textMuted} text-sm`}>
              A collection of my work showcasing technical execution
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { 
                title: 'MyHarmony',
                description: 'A Resourceful Website for Promoting Mental Health in Teens.',
                image: 'https://i.ibb.co/mXZXcG9/3a8a6b5c8bc5.jpg',
                tech: ['React', 'Tailwind' , 'Firebase', 'Stable Diffusion' , 'llama 3.2'],
                link: 'https://myharmony.netlify.app'
              },
              {
                title: 'GeekPeak',
                description: 'Showcase Best Projects by University/College students.',
                image: 'https://i.ibb.co/HTrHQ1YN/4408c95f129d.jpg',
                tech: ['React', 'Tailwind', 'Firebase'],
                link: 'https://geekpeak.netlify.app'
              },
              {
                title: 'Online Game Store',
                description: 'Data Encryption and Decryption Services over Online Game Store.',
                image: 'https://i.ibb.co/H4rBhMV/103c142cfe45.jpg',
                tech: ['HTML', 'CSS', 'JS', 'MySQL', 'PHP'],
                link: 'https://github.com/ItsHarsh45/updated-gamestore'
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className={`border ${theme.border} group overflow-hidden rounded-lg`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover ${theme.imgFilter} group-hover:filter-none group-hover:scale-105 transition-transform duration-500`} 
                  />
                  <div className={`absolute inset-0 ${isDarkTheme ? 'bg-black/50' : 'bg-white/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <a 
                      href={project.link} 
                      className={`px-3 py-1 border ${theme.btnOutline} text-xs font-medium transition-all duration-200 flex items-center gap-2 ${theme.glowEffect} rounded-md`}
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className={`${theme.textMuted} text-xs mb-3`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-2 py-1 text-xs border ${theme.border} ${theme.textMuted} rounded-md`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16" data-aos="fade-up">
            <div className="text-center max-w-lg mx-auto mb-10">
              <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs mb-3 rounded-md`}>
                Featured Project
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Live Demonstration</h2>
              <p className={`${theme.textMuted} text-sm`}>
                Interactive showcase of selected projects
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {projectDemos.map((demo, index) => (
                  <button
                    key={demo.title}
                    onClick={() => setActiveDemo(index)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
                      activeDemo === index 
                        ? `${theme.highlight}`
                        : `${theme.btnOutline}`
                    } ${theme.glowEffect}`}
                  >
                    {demo.title}
                  </button>
                ))}
              </div>

              <div className="relative max-w-2xl mx-auto">
                <div className="w-11/12 mx-auto">
                  <div className={`${theme.cardBg} rounded-t-xl ${theme.border} border-b-0 shadow-xl overflow-hidden`}>
                    <div className="pt-2 px-4 pb-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className={`text-xs ${theme.textMuted} bg-opacity-80 px-3 py-0.5 rounded-full ${isDarkTheme ? 'bg-zinc-700' : 'bg-gray-100'}`}>
                          {projectDemos[activeDemo].link}
                        </div>
                        <div className="w-8"></div>
                      </div>
                    </div>
                    
                    <div className="px-1">
                      <div className="aspect-w-16 aspect-h-9 relative group mb-1">
                        <video
                          className="w-full h-full object-cover rounded"
                          src={projectDemos[activeDemo].video}
                          muted
                          loop
                          autoPlay
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${isDarkTheme ? 'bg-gradient-to-b from-zinc-800 to-zinc-900' : 'bg-gradient-to-b from-gray-300 to-gray-400'} h-4.5 rounded-b-xl relative border-t ${theme.border}`} style={{ height: "1.125rem" }}>
                  <div className={`${isDarkTheme ? 'bg-zinc-700' : 'bg-gray-200'} absolute inset-x-0 top-1/2 h-px`}></div>
                </div>
                
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full mt-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 ${isDarkTheme ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className={`inline-block px-2 py-1 border ${theme.border} ${theme.textMuted} text-xs mb-3`}>
                Get In Touch
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Discuss Your Project</h2>
              <p className={`${theme.textMuted} text-sm md:text-base mb-6`}>
                Interested in ambitious projects and innovative ideas. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Location', value: 'Bangalore, India', icon: ExternalLink },
                  { label: 'Email', value: 'harshkemali123@gmail.com', icon: Mail },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`w-10 h-10 border ${theme.border} flex items-center justify-center`}>
                      <item.icon size={18} className={theme.textMuted} />
                    </div>
                    <div>
                      <div className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-600'} text-sm`}>{item.label}</div>
                      <div className="font-medium text-sm md:text-base">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <div className={`p-8 border ${theme.border} ${isDarkTheme ? 'bg-zinc-800' : 'bg-white'}`}>
                <h3 className="text-xl font-medium mb-4">Ready to start your project?</h3>
                <p className={`${theme.textMuted} text-sm mb-6`}>
                  Drop me an email with your project details, and I'll get back to you as soon as possible.
                </p>
                <div className="flex items-center flex-wrap gap-6">
                  <a 
                    href="mailto:harshkemali123@gmail.com?subject=Project%20Inquiry" 
                    className={`inline-flex items-center gap-2 ${theme.highlight} font-medium py-3 px-6 text-sm ${theme.highlightHover} transition-colors duration-200 ${theme.glowEffect}`}
                  >
                    <Mail size={16} />
                    Send Email
                  </a>
                  
                  <div className="flex items-center gap-4 ml-2">
                    {[
                      { icon: Github, href: 'https://github.com/ItsHarsh45', label: 'GitHub' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/harshkemali/', label: 'LinkedIn' },
                      { icon: Instagram, href: 'https://www.instagram.com/driftinalong5?utm_source=qr', label: 'Instagram' }
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-8 h-8 border ${theme.border} rounded-full flex items-center justify-center ${theme.textMuted} transition-all duration-200 ${isDarkTheme ? 'hover:border-white hover:text-white' : 'hover:border-black hover:text-black'} ${theme.glowEffect}`}
                      >
                        <social.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 border-t ${theme.border} ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className={`${theme.textMuted} text-sm`}>© {new Date().getFullYear()} Made with ❤️ & 😊 by Chanabasappa. </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
