
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface BettingSimulatorProps {
  matchId: number;
  homeTeam: string;
  awayTeam: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
}

export const BettingSimulator = ({
  matchId,
  homeTeam,
  awayTeam,
  homeOdds,
  drawOdds,
  awayOdds,
}: BettingSimulatorProps) => {
  const { toast } = useToast();
  const [betAmount, setBetAmount] = useState("");
  const [selectedBet, setSelectedBet] = useState<"home" | "draw" | "away" | null>(null);
  const [showReceipt, setShowReceipt] = useState(false);
  
  const getPotentialWinnings = () => {
    if (!betAmount || !selectedBet) return 0;
    
    const amount = parseFloat(betAmount);
    if (isNaN(amount)) return 0;
    
    let odds = 0;
    if (selectedBet === "home") odds = parseFloat(homeOdds);
    else if (selectedBet === "draw") odds = parseFloat(drawOdds);
    else if (selectedBet === "away") odds = parseFloat(awayOdds);
    
    return (amount * odds).toFixed(2);
  };
  
  const handlePlaceBet = () => {
    if (!betAmount || !selectedBet) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un résultat et saisir un montant",
        variant: "destructive",
      });
      return;
    }
    
    const amount = parseFloat(betAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un montant valide",
        variant: "destructive",
      });
      return;
    }
    
    // Show bet receipt
    setShowReceipt(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setShowReceipt(false);
      setBetAmount("");
      setSelectedBet(null);
    }, 5000);
  };
  
  const getBetTypeName = () => {
    if (selectedBet === "home") return `Victoire ${homeTeam}`;
    if (selectedBet === "draw") return "Match nul";
    if (selectedBet === "away") return `Victoire ${awayTeam}`;
    return "";
  };
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      {showReceipt ? (
        <div className="animate-scale-in bg-white p-4 border border-green-500 rounded-lg">
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Paris enregistré !</h4>
            <div className="space-y-2">
              <p><span className="font-semibold">Match:</span> {homeTeam} vs {awayTeam}</p>
              <p><span className="font-semibold">Pronostic:</span> {getBetTypeName()}</p>
              <p><span className="font-semibold">Mise:</span> {betAmount}€</p>
              <p><span className="font-semibold">Cote:</span> {
                selectedBet === "home" ? homeOdds : 
                selectedBet === "draw" ? drawOdds : 
                selectedBet === "away" ? awayOdds : "0"
              }</p>
              <p className="text-xl font-bold text-green-600">Gains potentiels: {getPotentialWinnings()}€</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="font-bold mb-3">Simuler un pari</h4>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button
              onClick={() => setSelectedBet("home")}
              variant={selectedBet === "home" ? "default" : "outline"}
              className={selectedBet === "home" ? "bg-akatsuki-gold text-black" : ""}
            >
              1 - {homeOdds}
            </Button>
            <Button
              onClick={() => setSelectedBet("draw")}
              variant={selectedBet === "draw" ? "default" : "outline"}
              className={selectedBet === "draw" ? "bg-akatsuki-gold text-black" : ""}
            >
              X - {drawOdds}
            </Button>
            <Button
              onClick={() => setSelectedBet("away")}
              variant={selectedBet === "away" ? "default" : "outline"}
              className={selectedBet === "away" ? "bg-akatsuki-gold text-black" : ""}
            >
              2 - {awayOdds}
            </Button>
          </div>
          <div className="flex space-x-2">
            <Input
              type="number"
              min="1"
              placeholder="Montant €"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              className="w-full"
            />
            <Button
              onClick={handlePlaceBet}
              className="bg-akatsuki-gold hover:bg-yellow-500 text-black"
            >
              Parier
            </Button>
          </div>
          {betAmount && selectedBet && (
            <p className="mt-2 text-sm">
              Gains potentiels: <span className="font-bold">{getPotentialWinnings()}€</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
