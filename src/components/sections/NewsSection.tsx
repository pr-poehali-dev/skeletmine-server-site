import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { latestNews } from "@/data/serverData";

const NewsSection = () => {
  return (
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
              <CardTitle className="text-white text-lg">{news.title}</CardTitle>
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
  );
};

export default NewsSection;
