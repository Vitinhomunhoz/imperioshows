import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-yellow-400">IMPÉRIO SHOWS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleScrollToSection('inicio')} className="text-white hover:text-yellow-400 transition-colors">
            Início
          </button>
          <button onClick={() => handleScrollToSection('servicos')} className="text-white hover:text-yellow-400 transition-colors">
            Serviços
          </button>
          <button onClick={() => handleScrollToSection('sobre')} className="text-white hover:text-yellow-400 transition-colors">
            Sobre Nós
          </button>
          <button onClick={() => handleScrollToSection('portfolio')} className="text-white hover:text-yellow-400 transition-colors">
            Portfólio
          </button>
          <button onClick={() => handleScrollToSection('contato')} className="text-white hover:text-yellow-400 transition-colors">
            Contato
          </button>
          <a 
            href="https://w.app/83kjav" // Substitua pelo seu link de WhatsApp
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleScrollToSection('inicio')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => handleScrollToSection('servicos')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleScrollToSection('sobre')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => handleScrollToSection('portfolio')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Portfólio
            </button>
            <button 
              onClick={() => handleScrollToSection('contato')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contato
            </button>
            <a 
              href="https://w.app/83kjav" // Substitua pelo seu link de WhatsApp
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full text-center py-2 rounded"
            >
              Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
