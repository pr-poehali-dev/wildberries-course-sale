
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AuthorSection: React.FC = () => {
  return (
    <section id="author" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Познакомьтесь с вашим <span className="text-wb-purple">наставником</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Курс ведёт практикующий эксперт с многолетним опытом работы на Wildberries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-wb-purple/20 rounded-full filter blur-3xl"></div>
            
            <Card className="p-1 border-2 border-wb-purple/20 rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Мария Иванова" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            <div className="absolute -z-10 bottom-10 -right-5 transform rotate-3">
              <Card className="p-4 bg-white dark:bg-card shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-wb-purple/10 flex items-center justify-center">
                    <Icon name="TrendingUp" className="h-6 w-6 text-wb-purple" />
                  </div>
                  <div>
                    <p className="font-bold">200+ карт</p>
                    <p className="text-sm text-muted-foreground">в управлении</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="absolute -z-10 top-1/3 -left-5 transform -rotate-3">
              <Card className="p-4 bg-white dark:bg-card shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-wb-pink/10 flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-wb-pink" />
                  </div>
                  <div>
                    <p className="font-bold">4+ года</p>
                    <p className="text-sm text-muted-foreground">на Wildberries</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-16 w-16 border-2 border-wb-purple">
                <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" />
                <AvatarFallback>МИ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">Мария Иванова</h3>
                <p className="text-muted-foreground">Эксперт по Wildberries</p>
              </div>
            </div>
            
            <p className="text-lg">
              Привет! Я Мария, уже более 4 лет я работаю с маркетплейсом Wildberries и за это время создала свою систему заработка на картах товаров, которая приносит стабильный доход без необходимости закупать товар.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Мой опыт:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-wb-purple mr-3 shrink-0" />
                  <span>Управляю портфелем из 200+ карточек, приносящих регулярный доход</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-wb-purple mr-3 shrink-0" />
                  <span>Обучила более 500 учеников, которые успешно зарабатывают на Wildberries</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-wb-purple mr-3 shrink-0" />
                  <span>Разработала уникальную методику выбора прибыльных ниш с минимальной конкуренцией</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-wb-purple mr-3 shrink-0" />
                  <span>Создала набор инструментов для автоматизации работы с картами</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg pt-4">
              В этом курсе я делюсь всеми своими знаниями, чтобы вы могли повторить мой успех и начать зарабатывать на Wildberries без вложений в товар. Я буду сопровождать вас на каждом этапе и отвечать на все вопросы.
            </p>
            
            <div className="pt-4 flex space-x-4">
              <a href="#" className="text-wb-purple hover:text-wb-pink transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-wb-purple hover:text-wb-pink transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-wb-purple hover:text-wb-pink transition-colors">
                <Icon name="Telegram" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
