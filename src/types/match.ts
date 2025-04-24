
export interface Scorer {
  name: string;
  team: string;
  probability: string;
}

export interface ScorePrediction {
  score: string;
  probability: string;
}

export interface KeyPlayer {
  name: string;
  team: string;
  role: string;
  stats: string;
}

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
  date: string;
  competition: string;
  prediction: string;
  analysis: string;
  keyPlayers: KeyPlayer[];
  scorePredictions: ScorePrediction[];
  scorers: Scorer[];
}
