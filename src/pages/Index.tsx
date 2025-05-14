import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AuthorSection from "@/components/AuthorSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon"; // Добавляем импорт иконок

const Index: React.FC = () => {
  // Эффект для анимации элементов при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <HeroSection />

        <div id="about" className="animate-on-scroll py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Что такое{" "}
                <span className="text-gradient">карточки Wildberries</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Узнайте, как работает наша методика заработка без необходимости
                закупать товар
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-wb-purple flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Находите поставщиков</h3>
                <p className="text-muted-foreground">
                  Вы находите поставщиков, уже работающих на маркетплейсе с
                  хорошими товарами, но плохо оптимизированными карточками
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-wb-pink flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Оптимизируете карточки
                </h3>
                <p className="text-muted-foreground">
                  Используя нашу методику, вы создаете высококонверсионные
                  карточки, которые приводят к резкому росту продаж
                </p>
              </div>

              <div className="flex flex-col items-center lg:col-span-1 md:col-span-2">
                <div className="w-16 h-16 mb-4 rounded-full bg-wb-orange flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Получаете прибыль</h3>
                <p className="text-muted-foreground">
                  Вы заключаете договор с поставщиком и получаете процент с
                  каждой продажи через оптимизированные вами карточки
                </p>
              </div>
            </div>
          </div>
        </div>

        <BenefitsSection />
        <AuthorSection />

        <div className="animate-on-scroll py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Программа курса{" "}
                <span className="text-wb-purple">
                  "Заработок на картах Wildberries"
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                За 3 недели вы освоите все аспекты работы с картами товаров и
                сможете начать зарабатывать
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-wb-purple text-white flex items-center justify-center mr-3">
                    1
                  </span>
                  Основы работы с Wildberries и поиск поставщиков
                </h3>
                <ul className="space-y-3 pl-11">
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-purple mt-2 mr-2"></span>
                    <span>
                      Структура маркетплейса Wildberries и принципы его работы
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-purple mt-2 mr-2"></span>
                    <span>
                      Как выбрать прибыльную нишу с низкой конкуренцией
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-purple mt-2 mr-2"></span>
                    <span>
                      Методики поиска и выбора поставщиков для сотрудничества
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-purple mt-2 mr-2"></span>
                    <span>
                      Составление выгодного предложения для поставщика
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-wb-pink text-white flex items-center justify-center mr-3">
                    2
                  </span>
                  Создание и оптимизация карточек товаров
                </h3>
                <ul className="space-y-3 pl-11">
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-pink mt-2 mr-2"></span>
                    <span>
                      Анализ успешных карточек и выявление ключевых факторов
                      успеха
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-pink mt-2 mr-2"></span>
                    <span>
                      Работа с SEO на маркетплейсе и ключевыми словами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-pink mt-2 mr-2"></span>
                    <span>Создание привлекательных описаний и заголовков</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-pink mt-2 mr-2"></span>
                    <span>Работа с фотографиями товаров и инфографикой</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-wb-orange text-white flex items-center justify-center mr-3">
                    3
                  </span>
                  Масштабирование и автоматизация бизнеса
                </h3>
                <ul className="space-y-3 pl-11">
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-orange mt-2 mr-2"></span>
                    <span>Юридические аспекты работы с поставщиками</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-orange mt-2 mr-2"></span>
                    <span>
                      Инструменты аналитики и отслеживания эффективности
                      карточек
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-orange mt-2 mr-2"></span>
                    <span>Стратегии масштабирования портфеля карточек</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1 w-1 rounded-full bg-wb-orange mt-2 mr-2"></span>
                    <span>Автоматизация процессов и увеличени прибыли</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="reviews"
          className="animate-on-scroll py-16 md:py-24 bg-muted/30"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Отзывы наших <span className="text-wb-purple">учеников</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Вот что говорят люди, которые уже прошли курс и начали
                зарабатывать
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Александр"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Александр К.</h4>
                    <div className="flex text-wb-orange">
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Я скептически относился к заработку без вложений, но решил
                  попробовать. Уже через месяц после курса у меня было 15
                  карточек, которые приносят около 70 тысяч рублей в месяц!"
                </p>
                <div className="text-wb-purple font-medium">
                  Доход: 70 000 ₽/месяц
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Елена"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Елена В.</h4>
                    <div className="flex text-wb-orange">
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Я мама в декрете и искала способ подработки. Этот курс стал
                  находкой! Сейчас я работаю 2-3 часа в день и зарабатываю
                  больше, чем на прошлой работе офис-менеджером."
                </p>
                <div className="text-wb-purple font-medium">
                  Доход: 85 000 ₽/месяц
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Дмитрий"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Дмитрий О.</h4>
                    <div className="flex text-wb-orange">
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon name="Star" className="h-4 w-4 fill-wb-orange" />
                      <Icon
                        name="Star"
                        className="h-4 w-4 fill-current text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Уволился с офисной работы и полностью ушел в работу с
                  картами. Сейчас у меня команда помощников, более 100 карт в
                  управлении и стабильный доход свыше 200 тысяч рублей."
                </p>
                <div className="text-wb-purple font-medium">
                  Доход: 200 000+ ₽/месяц
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="animate-on-scroll py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Часто задаваемые <span className="text-wb-purple">вопросы</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Всё, что вы хотели узнать о заработке на картах Wildberries
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="rounded-xl bg-white dark:bg-card shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Нужен ли мне опыт работы с маркетплейсами?
                  </h3>
                  <p className="text-muted-foreground">
                    Нет, курс построен таким образом, что вы освоите все с нуля.
                    Мы начинаем с базовых понятий и постепенно переходим к
                    продвинутым техникам.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-card shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Сколько времени занимает работа с картами?
                  </h3>
                  <p className="text-muted-foreground">
                    В среднем на старте вам потребуется 3-4 часа в день. По мере
                    освоения навыков и автоматизации процессов это время
                    сокращается до 1-2 часов.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-card shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Как быстро я начну зарабатывать?
                  </h3>
                  <p className="text-muted-foreground">
                    Первые результаты можно увидеть уже через 2-3 недели после
                    внедрения знаний. Стабильный доход формируется примерно
                    через 1-2 месяца.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-card shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Нужны ли вложения для старта?
                  </h3>
                  <p className="text-muted-foreground">
                    Кроме оплаты курса, никаких вложений не требуется. Вы не
                    закупаете товар, не тратите деньги на рекламу. Вам нужен
                    только компьютер и доступ в интернет.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-card shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Есть ли поддержка после прохождения курса?
                  </h3>
                  <p className="text-muted-foreground">
                    Да, вы получите доступ к закрытому сообществу выпускников
                    курса, где можно обсуждать рабочие моменты. Также
                    предусмотрены групповые консультации с наставником в течение
                    месяца после завершения обучения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OrderForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
