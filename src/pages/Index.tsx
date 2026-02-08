import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Transaction {
  id: string;
  sender: string;
  amount: number;
  date: string;
  time: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'transfer' | 'profile'>('home');
  const [balance, setBalance] = useState(125340);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      sender: 'Алексей Сидоров',
      amount: 5000,
      date: '15.02.2026',
      time: '14:30'
    },
    {
      id: '2',
      sender: 'ООО "Компания"',
      amount: 25000,
      date: '14.02.2026',
      time: '09:15'
    }
  ]);

  const names = [
    'Анна Петрова', 'Михаил Иванов', 'Елена Сидорова', 'Дмитрий Козлов',
    'Ольга Смирнова', 'Александр Попов', 'Мария Новикова', 'Игорь Волков',
    'Татьяна Соколова', 'Андрей Морозов', 'Наталья Федорова', 'Сергей Орлов',
    'ООО "Бизнес"', 'ИП Константинов', 'АО "Финансы"', 'Группа Компаний',
    'Павел Лебедев', 'Виктория Егорова', 'Николай Васильев', 'Юлия Павлова'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAmount = Math.floor(Math.random() * (1000000000 - 50 + 1)) + 50;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const now = new Date();
      const date = now.toLocaleDateString('ru-RU');
      const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

      const newTransaction: Transaction = {
        id: Date.now().toString(),
        sender: randomName,
        amount: randomAmount,
        date,
        time
      };

      setBalance(prev => prev + randomAmount);
      setTransactions(prev => [newTransaction, ...prev].slice(0, 10));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Wallet" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-slate-900">CBP</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('transfer')}
              className={`font-medium transition-colors ${activeSection === 'transfer' ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Переводы
            </button>
            <button 
              onClick={() => setActiveSection('profile')}
              className={`font-medium transition-colors ${activeSection === 'profile' ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Профиль
            </button>
          </div>

          <Button>Войти</Button>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Надежные денежные переводы по всему миру
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                CBP — профессиональная платформа для быстрых и безопасных финансовых операций. Доверие клиентов — наш приоритет.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('transfer')}>
                  Отправить перевод
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>
                    Банковский уровень защиты данных и шифрования транзакций
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Скорость</CardTitle>
                  <CardDescription>
                    Мгновенные переводы 24/7 без задержек и выходных
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="TrendingDown" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Низкие комиссии</CardTitle>
                  <CardDescription>
                    Прозрачные тарифы без скрытых платежей и дополнительных сборов
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-lg mb-6 text-blue-100">
                Присоединяйтесь к тысячам пользователей, которые доверяют CBP
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => setActiveSection('transfer')}>
                Создать аккаунт
              </Button>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'transfer' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Денежные переводы</h2>
            
            <Tabs defaultValue="send" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="send" className="text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </TabsTrigger>
                <TabsTrigger value="receive" className="text-lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Получить
                </TabsTrigger>
              </TabsList>

              <TabsContent value="send">
                <Card>
                  <CardHeader>
                    <CardTitle>Отправка перевода</CardTitle>
                    <CardDescription>Заполните данные для отправки денежных средств</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Сумма перевода</Label>
                      <div className="relative">
                        <Input id="amount" type="number" placeholder="10000" className="pl-10 text-lg h-12" />
                        <Icon name="DollarSign" size={20} className="absolute left-3 top-3 text-slate-400" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sender">Отправитель</Label>
                        <Input id="sender" placeholder="Иван Иванов" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sender-card">Номер карты отправителя</Label>
                        <Input id="sender-card" placeholder="1234 5678 9012 3456" className="h-12" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="recipient">Получатель</Label>
                        <Input id="recipient" placeholder="Мария Петрова" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recipient-card">Номер карты получателя</Label>
                        <Input id="recipient-card" placeholder="9876 5432 1098 7654" className="h-12" />
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Сумма перевода:</span>
                        <span className="font-semibold">10 000 ₽</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Комиссия:</span>
                        <span className="font-semibold">50 ₽</span>
                      </div>
                      <div className="h-px bg-slate-200 my-2" />
                      <div className="flex justify-between">
                        <span className="font-semibold">К оплате:</span>
                        <span className="font-bold text-lg text-primary">10 050 ₽</span>
                      </div>
                    </div>

                    <Button className="w-full h-12 text-lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить перевод
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="receive">
                <Card>
                  <CardHeader>
                    <CardTitle>Получение перевода</CardTitle>
                    <CardDescription>Проверьте входящие переводы по реквизитам</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="check-card">Номер вашей карты</Label>
                      <Input id="check-card" placeholder="1234 5678 9012 3456" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="check-code">Код подтверждения</Label>
                      <Input id="check-code" placeholder="ABC123XYZ" className="h-12" />
                    </div>

                    <Button className="w-full h-12 text-lg" variant="outline">
                      <Icon name="Search" size={20} className="mr-2" />
                      Проверить статус
                    </Button>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-4">Последние входящие переводы</h4>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {transactions.map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg animate-fade-in">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Icon name="ArrowDown" className="text-green-600" size={20} />
                              </div>
                              <div>
                                <p className="font-medium">{transaction.sender}</p>
                                <p className="text-sm text-slate-500">{transaction.date}, {transaction.time}</p>
                              </div>
                            </div>
                            <span className="font-bold text-green-600">+{transaction.amount.toLocaleString('ru-RU')} ₽</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {activeSection === 'profile' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Личный кабинет</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="bg-primary text-white text-2xl">ИИ</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>Иван Иванов</CardTitle>
                  <CardDescription>ivan@example.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="User" size={18} className="mr-2" />
                      Профиль
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="CreditCard" size={18} className="mr-2" />
                      Карты
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="History" size={18} className="mr-2" />
                      История
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Settings" size={18} className="mr-2" />
                      Настройки
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Баланс счета</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-4 transition-all duration-300 animate-pulse">{balance.toLocaleString('ru-RU')} ₽</div>
                    <div className="flex gap-3">
                      <Button>
                        <Icon name="Plus" size={18} className="mr-2" />
                        Пополнить
                      </Button>
                      <Button variant="outline">
                        <Icon name="ArrowUpRight" size={18} className="mr-2" />
                        Вывести
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Личные данные</CardTitle>
                    <CardDescription>Управление информацией профиля</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Имя</Label>
                        <Input id="first-name" defaultValue="Иван" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Фамилия</Label>
                        <Input id="last-name" defaultValue="Иванов" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="ivan@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
                    </div>
                    <Button>Сохранить изменения</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Настройки безопасности</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Lock" className="text-slate-600" />
                        <div>
                          <p className="font-medium">Двухфакторная аутентификация</p>
                          <p className="text-sm text-slate-500">Включена</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Настроить</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Bell" className="text-slate-600" />
                        <div>
                          <p className="font-medium">Уведомления о переводах</p>
                          <p className="text-sm text-slate-500">Email + SMS</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Icon name="Key" size={18} className="mr-2" />
                      Изменить пароль
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Wallet" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold text-white">CBP</span>
              </div>
              <p className="text-sm">Надежный партнер для ваших финансовых операций</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 CBP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;