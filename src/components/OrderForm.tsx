
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

// Импортируем подкомпоненты
import CourseInfoSection from './order/CourseInfoSection';
import PriceDisplay from './order/PriceDisplay';
import OrderFormInputs from './order/OrderFormInputs';
import PaymentMethodSelector from './order/PaymentMethodSelector';
import PaymentSecurityInfo from './order/PaymentSecurityInfo';
import SubmitButton from './order/SubmitButton';
import PaymentSystemsInfo from './order/PaymentSystemsInfo';

/**
 * Компонент формы заказа/оплаты курса
 */
const OrderForm: React.FC = () => {
  // Состояния формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Обработка отправки формы
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setIsSubmitting(false);
      resetForm();
    }, 1500);
  };

  /**
   * Сброс формы к исходным значениям
   */
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section id="order" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Информационная секция */}
          <CourseInfoSection />
          
          {/* Форма заказа */}
          <div>
            <Card className="border-2 border-wb-purple/20 overflow-hidden">
              {/* Заголовок карточки */}
              <div className="bg-gradient-to-r from-wb-purple to-wb-pink p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Онлайн-курс "Заработок на картах Wildberries"</h3>
                <p>Запишитесь сейчас и начните зарабатывать уже через 3 недели</p>
              </div>
              
              <CardContent className="p-6">
                {/* Блок цены и скидки */}
                <div className="mb-6">
                  <PriceDisplay 
                    currentPrice={15990} 
                    originalPrice={25990} 
                    discountPercentage={38} 
                  />
                </div>
                
                {/* Форма */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Поля ввода */}
                  <OrderFormInputs 
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                  />
                  
                  {/* Выбор способа оплаты */}
                  <PaymentMethodSelector 
                    value={paymentMethod} 
                    onChange={setPaymentMethod} 
                  />
                  
                  {/* Блок безопасности платежей */}
                  <PaymentSecurityInfo />
                  
                  {/* Кнопка отправки формы */}
                  <SubmitButton 
                    paymentMethod={paymentMethod} 
                    isSubmitting={isSubmitting} 
                  />
                </form>
                
                {/* Условия использования */}
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Нажимая кнопку, вы соглашаетесь с условиями оферты и политикой конфиденциальности</p>
                </div>
                
                {/* Информация о платежных системах */}
                <div className="mt-6">
                  <PaymentSystemsInfo />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
