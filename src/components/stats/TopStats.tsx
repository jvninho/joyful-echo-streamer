
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getTopScorers, getTopAssists, getTopReferees } from "@/utils/statsData";
import { leagues } from "@/utils/constants";

interface TopStatsProps {
  selectedStatsTab: string;
  selectedLeague: string;
  setSelectedLeague: (league: string) => void;
}

export const TopStats = ({ selectedStatsTab, selectedLeague, setSelectedLeague }: TopStatsProps) => {
  const getStatsData = () => {
    switch (selectedStatsTab) {
      case 'scorers':
        return getTopScorers(selectedLeague);
      case 'assists':
        return getTopAssists(selectedLeague);
      case 'referees':
        return getTopReferees(selectedLeague);
      default:
        return [];
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
          <Award className="h-5 w-5" /> {selectedStatsTab === 'scorers' ? 'Top Buteurs' : selectedStatsTab === 'assists' ? 'Top Passeurs' : 'Top Arbitres'}
        </h3>
        <Select value={selectedLeague} onValueChange={setSelectedLeague}>
          <SelectTrigger className="w-[180px] bg-card text-foreground border-border">
            <SelectValue placeholder="Sélectionner un championnat" />
          </SelectTrigger>
          <SelectContent>
            {leagues.map((league) => (
              <SelectItem key={league.id} value={league.id}>
                {league.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4">
        {getStatsData().map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/30 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all"
          >
            <Avatar className="h-16 w-16 ring-2 ring-primary/50">
              <AvatarImage src={item.image} alt={item.name} />
              <AvatarFallback><Users className="text-primary" /></AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">{item.name}</h4>
              {'team' in item && <p className="text-sm text-muted-foreground">{item.team}</p>}
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {'goals' in item ? item.goals :
               'assists' in item ? item.assists :
               'cards' in item ? `${item.cards} 🟨` : ''}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
