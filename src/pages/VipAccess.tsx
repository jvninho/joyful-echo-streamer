
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { generateRealMatches } from "@/utils/matchData";
import { TopStats } from "@/components/stats/TopStats";
import { MatchPrediction } from "@/components/predictions/MatchPrediction";
import { useAuth } from "@/hooks/useAuth";
import { Match } from "@/types/match";

const VipAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isLoggedIn } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('predictions');
  const [matches, setMatches] = useState<Match[]>(generateRealMatches());
  const [refreshing, setRefreshing] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("ligue1");
  const [selectedStatsTab, setSelectedStatsTab] = useState('scorers');

  useEffect(() => {
    setAuthenticated(isLoggedIn());
  }, []);

  const refreshData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMatches(generateRealMatches());
      setRefreshing(false);
      toast({
        title: "Données mises à jour",
        description: "Les pronostics ont été actualisés",
      });
    }, 1000);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black/70 p-8 rounded-lg max-w-md w-full"
          >
            <p className="text-xl text-center mb-6 text-white">
              Ce contenu est réservé aux abonnés, merci de vous connecter
            </p>
            <Button 
              onClick={() => navigate("/login")}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Se connecter
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://static.onzemondial.com/8/2025/04/photo_article/952529/382642/1200-L-psg-le-record-d-europe-hallucinant-des-parisiens.jpg")' }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/70 rounded-lg p-6 text-white"
        >
          <h1 className="text-3xl font-bold text-center mb-8 animate-fade-in text-yellow-500">
            Espace VIP - PRONOS STATS EMPIRE
          </h1>
          
          <div className="flex flex-wrap border-b mb-6 border-gray-600">
            <button 
              onClick={() => setActiveTab('predictions')}
              className={`px-4 py-2 ${activeTab === 'predictions' ? 'border-b-2 border-yellow-500 text-yellow-500 font-semibold' : 'text-gray-300'} transition-colors`}
            >
              Pronostics du jour
            </button>
            <button 
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 ${activeTab === 'stats' ? 'border-b-2 border-yellow-500 text-yellow-500 font-semibold' : 'text-gray-300'} transition-colors`}
            >
              Valeurs sûres
            </button>
          </div>

          {activeTab === 'stats' && (
            <div className="mb-6 flex flex-wrap gap-4">
              <Button
                onClick={() => setSelectedStatsTab('scorers')}
                variant={selectedStatsTab === 'scorers' ? "default" : "outline"}
                className={selectedStatsTab === 'scorers' ? "bg-green-600 text-white border-green-600" : ""}
              >
                Top Buteurs
              </Button>
              <Button
                onClick={() => setSelectedStatsTab('assists')}
                variant={selectedStatsTab === 'assists' ? "default" : "outline"}
                className={selectedStatsTab === 'assists' ? "bg-green-600 text-white border-green-600" : ""}
              >
                Top Passeurs
              </Button>
              <Button
                onClick={() => setSelectedStatsTab('referees')}
                variant={selectedStatsTab === 'referees' ? "default" : "outline"}
                className={selectedStatsTab === 'referees' ? "bg-green-600 text-white border-green-600" : ""}
              >
                Top Arbitres
              </Button>
            </div>
          )}
          
          <div className="flex justify-end mb-4">
            <Button 
              onClick={refreshData}
              disabled={refreshing}
              className="bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-transform"
            >
              {refreshing ? 'Actualisation...' : 'Actualiser les données'}
            </Button>
          </div>

          {activeTab === 'predictions' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-2xl font-semibold">
                Pronostics du jour - {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h2>
              {matches.map(match => (
                <MatchPrediction key={match.id} match={match} />
              ))}
            </div>
          )}
          
          {activeTab === 'stats' && (
            <TopStats 
              selectedStatsTab={selectedStatsTab}
              selectedLeague={selectedLeague}
              setSelectedLeague={setSelectedLeague}
            />
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default VipAccess;
