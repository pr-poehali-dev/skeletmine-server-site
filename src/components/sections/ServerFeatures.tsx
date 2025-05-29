import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { gameFeatures } from "@/data/serverData";

const ServerFeatures = () => {
  return (
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
                  <Icon name={feature.icon} size={24} className="text-white" />
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
  );
};

export default ServerFeatures;
