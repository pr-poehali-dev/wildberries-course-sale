
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const OrderForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setName('');
      setEmail('');
      setPhone('');
    }, 1500);
  };

  return (
    <section id="order" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Начните зарабатывать на <span className="text-gradient">Wildberries</span> уже сегодня
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Запишитесь на курс сейчас и получите доступ к эксклюзивным материалам, которые помогут вам быстро начать зарабатывать на картах товаров
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wb-purple/10 flex items-center justify-center mr-4 shrink-0">
                  <Icon name="VideoIcon" className="h-5 w-5 text-wb-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">20+ видеоуроков</h3>
                  <p className="text-muted-foreground">Подробные пошаговые инструкции по работе с картами</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wb-purple/10 flex items-center justify-center mr-4 shrink-0">
                  <Icon name="FileText" className="h-5 w-5 text-wb-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Готовые шаблоны</h3>
                  <p className="text-muted-foreground">Шаблоны для быстрого создания эффективных карточек</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wb-purple/10 flex items-center justify-center mr-4 shrink-0">
                  <Icon name="MessagesSquare" className="h-5 w-5 text-wb-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Поддержка наставника</h3>
                  <p className="text-muted-foreground">Личные консультации и ответы на все вопросы</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-wb-purple/10 flex items-center justify-center mr-4 shrink-0">
                  <Icon name="Users" className="h-5 w-5 text-wb-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Сообщество единомышленников</h3>
                  <p className="text-muted-foreground">Закрытый чат для общения с другими учениками</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-2 border-wb-purple/20 overflow-hidden">
              <div className="bg-gradient-to-r from-wb-purple to-wb-pink p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Онлайн-курс "Заработок на картах Wildberries"</h3>
                <p>Запишитесь сейчас и начните зарабатывать уже через 3 недели</p>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">15 990 ₽</span>
                    <span className="text-muted-foreground line-through ml-2">25 990 ₽</span>
                  </div>
                  <div className="bg-wb-orange text-white text-sm font-bold px-3 py-1 rounded-full">
                    Скидка 38%
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Введите ваш email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      placeholder="+7 (999) 123-45-67" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-wb-purple hover:bg-wb-pink text-white font-medium text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Оплатить курс
                        <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Нажимая кнопку, вы соглашаетесь с условиями оферты и политикой конфиденциальности</p>
                </div>
                
                <div className="mt-6 flex justify-center space-x-4">
                  <Icon name="CreditCard" className="h-8 w-8 text-muted-foreground" />
                  <Icon name="CircleDollarSign" className="h-8 w-8 text-muted-foreground" />
                  <Icon name="Wallet" className="h-8 w-8 text-muted-foreground" />
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
