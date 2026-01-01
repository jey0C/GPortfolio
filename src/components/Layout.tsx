import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_ITEMS, RESUME_URL } from '../constants';
import { Menu, X, Sun, Moon, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GioLogo from './GioLogo';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  useEffect(() => {
    // Check initial theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 flex flex-col font-sans selection:bg-stone-200 dark:selection:bg-stone-800 selection:text-stone-900 dark:selection:text-stone-50 transition-colors duration-300 relative">
      
      {/* Film Grain Texture Overlay */}
      <div className="bg-noise" />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          <NavLink to="/" className="z-50 hover:opacity-80 transition-opacity flex items-center" aria-label="Gio Cruz Home">
             <GioLogo className="h-9 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-stone-600 dark:hover:text-stone-300 ${isActive ? 'text-stone-900 dark:text-stone-50' : 'text-stone-500 dark:text-stone-400'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
            >
              Resume
            </a>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cruzgiovanni90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
            >
              Contact
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
             <button
              onClick={toggleTheme}
              className="p-2 text-stone-800 dark:text-stone-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="p-2 -mr-2 text-stone-800 dark:text-stone-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-stone-50 dark:bg-stone-950 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="text-2xl font-medium text-stone-800 dark:text-stone-100"
              >
                {item.label}
              </NavLink>
            ))}
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="text-2xl font-medium text-stone-800 dark:text-stone-100">
              Resume
            </a>
             <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=cruzgiovanni90@gmail.com"
               target="_blank"
               rel="noopener noreferrer" 
               className="text-2xl font-medium text-stone-800 dark:text-stone-100"
             >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 md:pt-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>

      <footer className="py-12 md:py-24 border-t border-stone-200 dark:border-stone-800 mt-24 relative z-10">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2 text-stone-900 dark:text-stone-50">Giovanni Cruz</h4>
            <p className="text-stone-500 dark:text-stone-400 max-w-xs">
              Building human-centered systems with engineering rigor and creative intent.
            </p>
          </div>
          <div className="flex gap-6 text-stone-600 dark:text-stone-400">
            <a href="https://github.com/jey0C" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/giovanni-cruz-a06852278/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
             <a href="https://www.instagram.com/jeyo.cruz/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
             <a href="https://www.facebook.com/giovanni.cruz.5477272" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl px-6 mt-12 text-sm text-stone-400 dark:text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
           <span>© {new Date().getFullYear()} Giovanni Cruz. All rights reserved.</span>
           <span className="font-mono text-xs">Designed & Engineered.</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;