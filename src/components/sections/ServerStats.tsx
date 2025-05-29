import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { serverStats } from "@/data/serverData";

const ServerStats = () => {
  return (
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
  );
};

export default ServerStats;
