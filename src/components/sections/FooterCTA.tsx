import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FooterCTA = () => {
  return (
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
  );
};

export default FooterCTA;
