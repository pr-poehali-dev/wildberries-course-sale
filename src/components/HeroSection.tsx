
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Научитесь зарабатывать на <span className="text-gradient">картах Wildberries</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            Пошаговый курс от практикующего эксперта, который поможет вам построить стабильный доход на маркетплейсе без вложений в товар
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button 
              onClick={scrollToOrder}
              size="lg" 
              className="bg-wb-purple hover:bg-wb-pink text-white font-medium text-lg"
            >
              Начать обучение
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-wb-purple text-wb-purple hover:bg-wb-purple/10 font-medium text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробнее
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-6">
            <div className="flex items-center">
              <Icon name="Users" className="h-6 w-6 text-wb-purple mr-2" />
              <span className="text-sm md:text-base"><b>500+</b> учеников</span>
            </div>
            <div className="flex items-center">
              <Icon name="Star" className="h-6 w-6 text-wb-orange mr-2" />
              <span className="text-sm md:text-base"><b>4.9</b> средний рейтинг</span>
            </div>
            <div className="flex items-center">
              <Icon name="Calendar" className="h-6 w-6 text-wb-pink mr-2" />
              <span className="text-sm md:text-base"><b>3</b> недели обучения</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-wb-purple/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-wb-pink/20 rounded-full filter blur-3xl"></div>
          
          <Card className="relative z-10 overflow-hidden rounded-2xl border-2 border-wb-purple/20 p-1">
            <div className="aspect-video bg-gradient-to-br from-wb-purple/10 via-background to-wb-pink/10 rounded-xl flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Заработок на Wildberries" 
                className="rounded-xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                <div className="h-16 w-16 rounded-full bg-wb-purple flex items-center justify-center cursor-pointer hover:bg-wb-pink transition-colors">
                  <Icon name="Play" className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </Card>
          
          <div className="absolute -z-10 top-1/4 right-0 transform translate-x-1/4 animate-float">
            <div className="bg-wb-purple text-white p-4 rounded-lg rotate-6 shadow-lg">
              <p className="font-bold">+ 120 000 ₽</p>
              <p className="text-xs">Средний доход наших учеников</p>
            </div>
          </div>
          
          <div className="absolute -z-10 bottom-1/4 left-0 transform -translate-x-1/4 animate-float animation-delay-1000">
            <div className="bg-wb-pink text-white p-4 rounded-lg -rotate-3 shadow-lg">
              <p className="font-bold">Без вложений</p>
              <p className="text-xs">Не требуется закупать товар</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
