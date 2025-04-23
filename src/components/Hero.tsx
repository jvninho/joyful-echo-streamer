
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="py-16 md:py-24 text-center bg-gradient-to-b from-akatsuki-black/90 to-gray-900/90 text-white">
      <div className="logo mb-10 animate-fade-in">
        <div className="cloud relative bg-white p-6 rounded-full shadow-lg max-w-md mx-auto hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h1 className="text-4xl md:text-5xl font-bold text-akatsuki">FRG PRONOS</h1>
        </div>
        <div className="stars text-akatsuki-gold text-2xl md:text-3xl mt-4">★ ★ ★</div>
      </div>

      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Votre Expert et conseil en paris sportif FRG PRONOS</h2>
        <h3 className="text-xl md:text-2xl mb-8 text-gray-300">Pronostiques sportifs <span className="text-akatsuki-gold font-bold">80% de réussites</span> avec FRG PRONOS</h3>
        <Button asChild className="bg-akatsuki-gold hover:bg-yellow-500 text-akatsuki-black font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <a href="#pricing">VOIR LES OFFRES VIP</a>
        </Button>
      </div>
      
      <div className="mt-16 bg-white/10 backdrop-blur-sm py-6 px-4 rounded-lg max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-akatsuki-gold mb-2">+5000</div>
            <div className="text-gray-300">Paris gagnants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-akatsuki-gold mb-2">80%</div>
            <div className="text-gray-300">Taux de réussite</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-akatsuki-gold mb-2">+1000</div>
            <div className="text-gray-300">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </div>
  );
};
