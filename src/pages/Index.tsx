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
    { label: "Онлайн игроков", value: "156", icon: "Users" },
    { label: "Максимум слотов", value: "200", icon: "Crown" },
    { label: "PvP убийств", value: "12,847", icon: "Sword" },
    { label: "Дней хаоса", value: "892", icon: "Flame" },
  ];

  const gameFeatures = [
    {
      title: "Полный гриф",
      description: "Разрушай, строй и уничтожай без ограничений",
      icon: "Pickaxe",
      color: "bg-red-500",
    },
    {
      title: "Hardcore PvP",
      description: "Бои без правил, убивай или будь убитым",
      icon: "Sword",
      color: "bg-orange-500",
    },
    {
      title: "Рейдовые кланы",
      description: "Создавай банды для масштабных набегов",
      icon: "Users",
      color: "bg-gray-700",
    },
    {
      title: "Анархия",
      description: "Никаких правил, только выживание сильнейших",
      icon: "Zap",
      color: "bg-black",
    },
  ];

  const latestNews = [
    {
      title: "Война кланов: Кровавый передел!",
      date: "15 мая 2025",
      description: "Крупнейший рейд в истории сервера - спавн в руинах",
      tag: "PvP",
    },
    {
      title: "Новая PvP арена открыта!",
      date: "10 мая 2025",
      description: "Сражайся в лаве и получай редкие награды",
      tag: "Арена",
    },
    {
      title: "Дюп найден и пофикшен",
      date: "5 мая 2025",
      description: "Читеры наказаны, баланс восстановлен",
      tag: "Фикс",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585504198199-20277593b94f?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4 font-rubik">
            🦴 <span className="text-red-400">Skelet</span>
            <span className="text-gray-300">Mine</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Жестокий гриф-сервер Minecraft без правил. PvP, рейды, разрушения и
            выживание в хаосе!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <div className="bg-slate-800 px-6 py-3 rounded-lg">
              <span className="text-gray-400">IP сервера: </span>
              <span className="text-red-400 font-mono font-bold">
                skeletmine.20tps.ru
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
