
import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="feature-card group">
    <div className="w-12 h-12 mb-4 rounded-full bg-wb-purple/10 flex items-center justify-center group-hover:bg-wb-purple group-hover:text-white transition-all duration-300">
      <Icon name={icon} size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

const BenefitsSection: React.FC = () => {
  const features = [
    {
      icon: "CreditCard",
      title: "Без вложений в товар",
      description: "Вам не нужно закупать товары. Вы работаете с уже существующими товарами на маркетплейсе."
    },
    {
      icon: "LineChart",
      title: "Быстрый старт дохода",
      description: "Первые деньги можно получить уже через 2-3 недели после начала работы с картами."
    },
    {
      icon: "Calendar",
      title: "Удобный график",
      description: "Работайте из любой точки мира и в удобное для вас время - достаточно иметь доступ к интернету."
    },
    {
      icon: "Shield",
      title: "Легальный заработок",
      description: "Абсолютно белый и законный способ получения дохода на маркетплейсе Wildberries."
    },
    {
      icon: "Zap",
      title: "Масштабируемая модель",
      description: "Возможность увеличивать доход, добавляя новые карточки в свой портфель."
    },
    {
      icon: "GraduationCap",
      title: "Простые навыки",
      description: "Не требуется специальных знаний или образования, всему научим с нуля."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества работы с <span className="text-wb-purple">картами Wildberries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Узнайте, почему работа с карточками товаров на Wildberries — один из самых эффективных способов онлайн-заработка в 2025 году
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-wb-purple/10 via-wb-pink/10 to-wb-orange/10 border border-wb-purple/20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-wb-purple text-white text-4xl font-bold">
                  <span>₽</span>
                </div>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold mb-3">Сколько можно заработать на картах Wildberries?</h3>
              <p className="text-lg mb-4">
                Доходность работы с картами товаров на Wildberries зависит от количества карт, качества их оптимизации и выбранных ниш. Наши ученики зарабатывают:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-white dark:bg-card shadow">
                  <p className="text-wb-purple font-bold text-2xl">40-60 тыс ₽</p>
                  <p className="text-sm text-muted-foreground">Начинающие</p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-card shadow">
                  <p className="text-wb-pink font-bold text-2xl">80-120 тыс ₽</p>
                  <p className="text-sm text-muted-foreground">Уверенные</p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-card shadow">
                  <p className="text-wb-orange font-bold text-2xl">150+ тыс ₽</p>
                  <p className="text-sm text-muted-foreground">Профессионалы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
