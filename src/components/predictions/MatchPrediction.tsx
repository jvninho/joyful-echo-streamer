
import { motion } from "framer-motion";
import { Match } from "@/types/match";
import { BettingSimulator } from "@/components/BettingSimulator";

interface MatchPredictionProps {
  match: Match;
}

export const MatchPrediction = ({ match }: MatchPredictionProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }}
      className="bg-white rounded-lg shadow-lg p-6 text-black hover:shadow-xl transition-all"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <div className="text-xs text-gray-500">
            {match.competition} - {new Date(match.date).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit'}) + ' ' + new Date(match.date).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}
          </div>
          <div className="text-xl font-bold mb-2 md:mb-0">
            {match.homeTeam} vs {match.awayTeam}
          </div>
        </div>
        <div className="flex space-x-4 text-sm">
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-semibold">1</span>: {match.homeOdds}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-semibold">X</span>: {match.drawOdds}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-semibold">2</span>: {match.awayOdds}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Notre prédiction: <span className="text-akatsuki">{match.prediction}</span></h3>
        <p>{match.analysis}</p>
      </div>

      <div className="mb-4">
        <BettingSimulator
          matchId={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeOdds={match.homeOdds}
          drawOdds={match.drawOdds}
          awayOdds={match.awayOdds}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Buteurs potentiels:</h4>
          <ul className="list-disc list-inside">
            {match.scorers.map((scorer, i) => (
              <li key={i}>{scorer.name} ({scorer.team}) - {scorer.probability}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Score exact:</h4>
          <ul className="list-disc list-inside">
            {match.scorePredictions.map((pred, i) => (
              <li key={i}>{pred.score}: {pred.probability}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
