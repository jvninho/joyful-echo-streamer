
import { Match } from "@/types/match";

export const generateRealMatches = (): Match[] => {
  return [
    {
      id: 1,
      homeTeam: "PSG",
      awayTeam: "Lyon",
      homeScore: null,
      awayScore: null,
      homeOdds: "1.45",
      drawOdds: "4.20",
      awayOdds: "6.50",
      date: new Date().toISOString(),
      competition: "Ligue 1",
      prediction: "Victoire PSG",
      analysis: "Le PSG reçoit Lyon au Parc des Princes. Avec leur attaque redoutable menée par Mbappé et leur milieu créatif, les Parisiens partent favoris. Lyon devra s'appuyer sur sa solidité défensive pour espérer ramener un point.",
      keyPlayers: [
        { name: "Kylian Mbappé", team: "PSG", role: "Attaquant", stats: "25 buts cette saison" },
        { name: "Alexandre Lacazette", team: "Lyon", role: "Attaquant", stats: "15 buts cette saison" }
      ],
      scorePredictions: [
        { score: "2-1", probability: "28%" },
        { score: "2-0", probability: "22%" },
        { score: "1-0", probability: "18%" }
      ],
      scorers: [
        { name: "Kylian Mbappé", team: "PSG", probability: "65%" },
        { name: "Ousmane Dembélé", team: "PSG", probability: "45%" },
        { name: "Bradley Barcola", team: "PSG", probability: "40%" },
        { name: "Randal Kolo Muani", team: "PSG", probability: "35%" },
        { name: "Alexandre Lacazette", team: "Lyon", probability: "55%" },
        { name: "Malick Fofana", team: "Lyon", probability: "30%" },
        { name: "Rayan Cherki", team: "Lyon", probability: "25%" },
        { name: "Gift Orban", team: "Lyon", probability: "20%" }
      ]
    },
    {
      id: 2,
      homeTeam: "Marseille",
      awayTeam: "Nice",
      homeScore: null,
      awayScore: null,
      homeOdds: "2.10",
      drawOdds: "3.40",
      awayOdds: "3.60",
      date: new Date(Date.now() + 86400000).toISOString(),
      competition: "Ligue 1",
      prediction: "Match nul",
      analysis: "Affrontement équilibré entre deux équipes ambitieuses. Marseille à domicile aura l'avantage du public, mais Nice possède une équipe solide capable de rivaliser. Un match nul semble le résultat le plus probable.",
      keyPlayers: [
        { name: "Pierre-Emerick Aubameyang", team: "Marseille", role: "Attaquant", stats: "18 buts cette saison" },
        { name: "Terem Moffi", team: "Nice", role: "Attaquant", stats: "12 buts cette saison" }
      ],
      scorePredictions: [
        { score: "1-1", probability: "35%" },
        { score: "2-1", probability: "20%" },
        { score: "1-2", probability: "18%" }
      ],
      scorers: [
        { name: "Pierre-Emerick Aubameyang", team: "Marseille", probability: "60%" },
        { name: "Amine Harit", team: "Marseille", probability: "35%" },
        { name: "Ismaïla Sarr", team: "Marseille", probability: "30%" },
        { name: "Faris Moumbagna", team: "Marseille", probability: "25%" },
        { name: "Terem Moffi", team: "Nice", probability: "50%" },
        { name: "Evann Guessand", team: "Nice", probability: "35%" },
        { name: "Gaëtan Laborde", team: "Nice", probability: "30%" },
        { name: "Sofiane Diop", team: "Nice", probability: "25%" }
      ]
    },
    {
      id: 3,
      homeTeam: "Lille",
      awayTeam: "Rennes",
      homeScore: null,
      awayScore: null,
      homeOdds: "2.30",
      drawOdds: "3.20",
      awayOdds: "3.10",
      date: new Date(Date.now() + 172800000).toISOString(),
      competition: "Ligue 1",
      prediction: "Victoire Rennes",
      analysis: "Rennes se déplace à Lille dans un match crucial pour l'Europe. Les Bretons, avec leur jeu offensif, pourraient faire la différence face à des Lillois irréguliers cette saison.",
      keyPlayers: [
        { name: "Jonathan David", team: "Lille", role: "Attaquant", stats: "20 buts cette saison" },
        { name: "Amine Gouiri", team: "Rennes", role: "Attaquant", stats: "14 buts cette saison" }
      ],
      scorePredictions: [
        { score: "1-2", probability: "25%" },
        { score: "0-1", probability: "20%" },
        { score: "2-2", probability: "18%" }
      ],
      scorers: [
        { name: "Jonathan David", team: "Lille", probability: "65%" },
        { name: "Edon Zhegrova", team: "Lille", probability: "40%" },
        { name: "Rémy Cabella", team: "Lille", probability: "30%" },
        { name: "Mohamed Bayo", team: "Lille", probability: "25%" },
        { name: "Amine Gouiri", team: "Rennes", probability: "55%" },
        { name: "Arnaud Kalimuendo", team: "Rennes", probability: "45%" },
        { name: "Benjamin Bourigeaud", team: "Rennes", probability: "35%" },
        { name: "Désiré Doué", team: "Rennes", probability: "30%" }
      ]
    },
    {
      id: 4,
      homeTeam: "Monaco",
      awayTeam: "Strasbourg",
      homeScore: null,
      awayScore: null,
      homeOdds: "1.60",
      drawOdds: "4.00",
      awayOdds: "5.50",
      date: new Date(Date.now() + 259200000).toISOString(),
      competition: "Ligue 1",
      prediction: "Victoire Monaco",
      analysis: "Monaco reçoit Strasbourg et devrait s'imposer logiquement. L'ASM, avec son collectif rodé et ses individualités, part largement favorite face à des Alsaciens en difficulté.",
      keyPlayers: [
        { name: "Wissam Ben Yedder", team: "Monaco", role: "Attaquant", stats: "16 buts cette saison" },
        { name: "Emanuel Emegha", team: "Strasbourg", role: "Attaquant", stats: "8 buts cette saison" }
      ],
      scorePredictions: [
        { score: "2-0", probability: "30%" },
        { score: "3-1", probability: "25%" },
        { score: "2-1", probability: "20%" }
      ],
      scorers: [
        { name: "Wissam Ben Yedder", team: "Monaco", probability: "70%" },
        { name: "Folarin Balogun", team: "Monaco", probability: "55%" },
        { name: "Takumi Minamino", team: "Monaco", probability: "40%" },
        { name: "Breel Embolo", team: "Monaco", probability: "35%" },
        { name: "Maghnes Akliouche", team: "Monaco", probability: "30%" },
        { name: "Emanuel Emegha", team: "Strasbourg", probability: "40%" },
        { name: "Dilane Bakwa", team: "Strasbourg", probability: "25%" },
        { name: "Habib Diarra", team: "Strasbourg", probability: "20%" }
      ]
    },
    {
      id: 5,
      homeTeam: "Lens",
      awayTeam: "Montpellier",
      homeScore: null,
      awayScore: null,
      homeOdds: "1.80",
      drawOdds: "3.60",
      awayOdds: "4.20",
      date: new Date(Date.now() + 345600000).toISOString(),
      competition: "Ligue 1",
      prediction: "Victoire Lens",
      analysis: "Lens accueille Montpellier dans un match où les Sang et Or doivent s'imposer pour rester dans le haut du tableau. Montpellier, en difficulté cette saison, aura du mal à résister.",
      keyPlayers: [
        { name: "Elye Wahi", team: "Lens", role: "Attaquant", stats: "13 buts cette saison" },
        { name: "Akor Adams", team: "Montpellier", role: "Attaquant", stats: "9 buts cette saison" }
      ],
      scorePredictions: [
        { score: "2-0", probability: "28%" },
        { score: "1-0", probability: "25%" },
        { score: "3-1", probability: "20%" }
      ],
      scorers: [
        { name: "Elye Wahi", team: "Lens", probability: "60%" },
        { name: "Florian Sotoca", team: "Lens", probability: "45%" },
        { name: "Wesley Saïd", team: "Lens", probability: "35%" },
        { name: "Adrien Thomasson", team: "Lens", probability: "30%" },
        { name: "Angelo Fulgini", team: "Lens", probability: "25%" },
        { name: "Akor Adams", team: "Montpellier", probability: "45%" },
        { name: "Téji Savanier", team: "Montpellier", probability: "30%" },
        { name: "Arnaud Nordin", team: "Montpellier", probability: "25%" }
      ]
    }
  ];
};
