
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-card shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Icon name="ShoppingCart" className="h-8 w-8 text-wb-purple mr-2" />
          <span className="font-montserrat font-bold text-xl">WB<span className="text-wb-pink">Карты</span></span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-wb-purple transition-colors"
          >
            О курсе
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-foreground hover:text-wb-purple transition-colors"
          >
            Преимущества
          </button>
          <button 
            onClick={() => scrollToSection('author')}
            className="text-foreground hover:text-wb-purple transition-colors"
          >
            Автор
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-foreground hover:text-wb-purple transition-colors"
          >
            Отзывы
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-wb-purple transition-colors"
          >
            Вопросы
          </button>
        </nav>
        
        <Button 
          onClick={() => scrollToSection('order')}
          className="bg-wb-purple hover:bg-wb-pink text-white font-medium"
        >
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;
