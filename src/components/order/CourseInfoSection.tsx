
import React from 'react';
import CourseFeature from './CourseFeature';

const CourseInfoSection: React.FC = () => {
  const features = [
    {
      icon: "VideoIcon",
      title: "20+ видеоуроков",
      description: "Подробные пошаговые инструкции по работе с картами"
    },
    {
      icon: "FileText",
      title: "Готовые шаблоны",
      description: "Шаблоны для быстрого создания эффективных карточек"
    },
    {
      icon: "MessagesSquare",
      title: "Поддержка наставника",
      description: "Личные консультации и ответы на все вопросы"
    },
    {
      icon: "Users",
      title: "Сообщество единомышленников",
      description: "Закрытый чат для общения с другими учениками"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Начните зарабатывать на <span className="text-gradient">Wildberries</span> уже сегодня
      </h2>
      
      <p className="text-lg text-muted-foreground">
        Запишитесь на курс сейчас и получите доступ к эксклюзивным материалам, которые помогут вам быстро начать зарабатывать на картах товаров
      </p>
      
      <div className="pt-4 space-y-4">
        {features.map((feature, index) => (
          <CourseFeature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseInfoSection;
