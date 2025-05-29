import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
