import { Match } from "@/types/match";

export const generateRealMatches = (): Match[] => {
  return [
    {
      id: 1,
      homeTeam: "Paris Saint-Germain",
      awayTeam: "Manchester City",
      homeScore: null,
      awayScore: null,
      homeOdds: "2.10",
      drawOdds: "3.50",
      awayOdds: "3.25",
      date: "2025-04-25 20:45",
      competition: "Ligue des Champions",
      prediction: "Paris Saint-Germain gagne",
      analysis: "Le PSG est en grande forme à domicile avec 5 victoires consécutives. Manchester City montre des signes de fatigue en cette fin de saison. Les attaquants parisiens devraient faire la différence sur leur pelouse.",
      keyPlayers: [
        { name: "Kylian Mbappé", team: "PSG", role: "Attaquant", stats: "32 buts cette saison" },
        { name: "Kevin De Bruyne", team: "Manchester City", role: "Milieu", stats: "16 passes décisives" }
      ],
      scorePredictions: [
        { score: "2-1", probability: "30%" },
        { score: "2-0", probability: "20%" },
        { score: "1-0", probability: "15%" }
      ],
      scorers: [
        { name: "Kylian Mbappé", team: "PSG", probability: "55%" },
        { name: "Erling Haaland", team: "Manchester City", probability: "40%" },
        { name: "Ousmane Dembélé", team: "PSG", probability: "25%" }
      ]
    },
    {
      id: 2,
      homeTeam: "Marseille",
      awayTeam: "Lyon",
      homeScore: null,
      awayScore: null,
      homeOdds: "2.40",
      drawOdds: "3.30",
      awayOdds: "2.90",
      date: "2025-04-24 21:00",
      competition: "Ligue 1",
      prediction: "Match nul",
      analysis: "Le classique du football français s'annonce très serré. Les deux équipes sont au coude à coude au classement et ont montré des performances similaires lors des dernières journées. Les derbys sont souvent tendus et peuvent se terminer sur un match nul.",
      keyPlayers: [
        { name: "Pierre-Emerick Aubameyang", team: "Marseille", role: "Attaquant", stats: "18 buts cette saison" },
        { name: "Alexandre Lacazette", team: "Lyon", role: "Attaquant", stats: "15 buts cette saison" }
      ],
      scorePredictions: [
        { score: "1-1", probability: "35%" },
        { score: "2-2", probability: "20%" },
        { score: "1-0", probability: "15%" }
      ],
      scorers: [
        { name: "Pierre-Emerick Aubameyang", team: "Marseille", probability: "45%" },
        { name: "Alexandre Lacazette", team: "Lyon", probability: "40%" },
        { name: "Rayan Cherki", team: "Lyon", probability: "20%" }
      ]
    },
    {
      id: 3,
      homeTeam: "Real Madrid",
      awayTeam: "FC Barcelone",
      homeScore: null,
      awayScore: null,
      homeOdds: "2.20",
      drawOdds: "3.60",
      awayOdds: "3.00",
      date: "2025-04-25 21:00",
      competition: "La Liga",
      prediction: "Real Madrid gagne",
      analysis: "Le Clasico s'annonce favorable au Real Madrid qui joue à domicile. L'équipe de Carlo Ancelotti est dans une forme exceptionnelle et n'a perdu qu'un seul match à domicile cette saison. Le Barça est en reconstruction et pourrait souffrir face à l'intensité madrilène.",
      keyPlayers: [
        { name: "Vinicius Jr", team: "Real Madrid", role: "Ailier", stats: "19 buts, 13 passes décisives" },
        { name: "Robert Lewandowski", team: "FC Barcelone", role: "Attaquant", stats: "23 buts cette saison" }
      ],
      scorePredictions: [
        { score: "2-1", probability: "25%" },
        { score: "3-1", probability: "20%" },
        { score: "2-0", probability: "15%" }
      ],
      scorers: [
        { name: "Vinicius Jr", team: "Real Madrid", probability: "50%" },
        { name: "Robert Lewandowski", team: "FC Barcelone", probability: "45%" },
        { name: "Jude Bellingham", team: "Real Madrid", probability: "30%" }
      ]
    }
  ];
};
