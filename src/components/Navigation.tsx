import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Home, User, Zap, Briefcase, FolderKanban, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Zap },
    { label: 'Experience', href: '#companies', icon: Briefcase },
    { label: 'Portfolio', href: '#portfolio', icon: FolderKanban },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-[#0f172a]/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-6 relative">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group z-20 relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              <span className="text-white text-xl sm:text-2xl">E</span>
            </div>
            <span className="text-white hidden sm:block">Emmanuel</span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors relative group flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
          </div>

          {/* LinkedIn - Right Side */}
          <div className="hidden md:flex items-center z-10">
            <a
              href="https://www.linkedin.com/in/emmanuel-adeyemo-b5a501104/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#6B8CFF] transition-colors z-20 relative p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0f172a]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white hover:bg-white/5 transition-all px-4 py-3 rounded-lg flex items-center gap-3"
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href="https://www.linkedin.com/in/emmanuel-adeyemo-b5a501104/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all px-4 py-3 rounded-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
