import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const serverStats = [
    { label: "Онлайн игроков", value: "347", icon: "Users" },
    { label: "Максимум слотов", value: "500", icon: "Crown" },
    { label: "Режимов игры", value: "8", icon: "Gamepad2" },
    { label: "Дней работы", value: "1,248", icon: "Calendar" },
  ];

  const gameFeatures = [
    {
      title: "Выживание без грифов",
      description: "Приватные территории и надежная защита от грифинга",
      icon: "Shield",
      color: "bg-emerald-500",
    },
    {
      title: "Экономика и торговля",
      description: "Развитая игровая экономика с аукционами и магазинами",
      icon: "Coins",
      color: "bg-yellow-500",
    },
    {
      title: "Кастомные данжи",
      description: "Уникальные подземелья с эксклюзивными наградами",
      icon: "Swords",
      color: "bg-red-500",
    },
    {
      title: "Клановая система",
      description: "Создавайте кланы, воюйте и покоряйте территории",
      icon: "Flag",
      color: "bg-purple-500",
    },
  ];

  const latestNews = [
    {
      title: "Обновление 2.4: Новые данжи!",
      date: "15 мая 2025",
      description: "Добавлены 3 новых подземелья с уникальными боссами",
      tag: "Обновление",
    },
    {
      title: "Турнир PvP - Призовой фонд 50,000₽",
      date: "10 мая 2025",
      description: "Регистрация на крупнейший турнир сервера открыта",
      tag: "Событие",
    },
    {
      title: "Открытие нового мира - Небесные острова",
      date: "5 мая 2025",
      description: "Исследуйте загадочный мир в облаках",
      tag: "Новость",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585504198199-20277593b94f?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4 font-rubik">
            🦴 <span className="text-emerald-400">Skelet</span>
            <span className="text-gray-300">Mine</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Премиальный Minecraft сервер с уникальными возможностями. Выживание,
            PvP, кланы и многое другое ждет тебя!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">
              <span className="text-gray-400">IP сервера: </span>
              <span className="text-emerald-400 font-mono font-bold">
                play.skeletmine.ru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Статистика сервера
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serverStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-700/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-500/20 p-3 rounded-full">
                    <Icon
                      name={stat.icon}
                      size={24}
                      className="text-emerald-400"
                    />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Server Features */}
      <section className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Особенности сервера
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Последние новости
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30"
                  >
                    {news.tag}
                  </Badge>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>
                <CardTitle className="text-white text-lg">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {news.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 text-center bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готов начать приключение?
          </h2>
          <p className="text-gray-400 mb-8">
            Присоединяйся к тысячам игроков уже сегодня!
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Zap" className="mr-2" />
            Подключиться к серверу
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
