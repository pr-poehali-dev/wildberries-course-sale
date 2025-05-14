
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Icon name="ShoppingCart" className="h-6 w-6 text-wb-purple mr-2" />
              <span className="font-montserrat font-bold text-xl">WB<span className="text-wb-pink">Карты</span></span>
            </div>
            <p className="text-muted-foreground">
              Обучение заработку на карточках Wildberries без необходимости закупать товар
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">
                <Icon name="Telegram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">О курсе</a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-wb-purple transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#author" className="text-muted-foreground hover:text-wb-purple transition-colors">Автор</a>
              </li>
              <li>
                <a href="#order" className="text-muted-foreground hover:text-wb-purple transition-colors">Оплатить курс</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">Публичная оферта</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">Правила использования</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">Согласие на обработку данных</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-wb-purple mr-2" />
                <a href="mailto:info@wbcards.ru" className="text-muted-foreground hover:text-wb-purple transition-colors">info@wbcards.ru</a>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-wb-purple mr-2" />
                <a href="tel:+79001234567" className="text-muted-foreground hover:text-wb-purple transition-colors">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Icon name="MessageCircle" className="h-5 w-5 text-wb-purple mr-2" />
                <a href="#" className="text-muted-foreground hover:text-wb-purple transition-colors">Написать в чат</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 WBКарты. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
