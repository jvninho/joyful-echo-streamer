import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BettingSimulator } from "@/components/BettingSimulator";
import { motion } from "framer-motion";

const isLoggedIn = () => {
  const user = localStorage.getItem('frg-user');
  if (!user) return false;
  
  try {
    const userData = JSON.parse(user);
    return userData.isLoggedIn === true;
  } catch (e) {
    return false;
  }
};

const generateRealMatches = () => {
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

const leagues = [
  { id: "ligue1", name: "Ligue 1" },
  { id: "premierLeague", name: "Premier League" },
  { id: "laLiga", name: "La Liga" },
  { id: "bundesliga", name: "Bundesliga" },
  { id: "serieA", name: "Serie A" }
];

const getTopScorers = (league: string) => {
  const data = {
    ligue1: [
      { name: "Kylian Mbappé", team: "PSG", goals: 25, image: "https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg" },
      { name: "Alexandre Lacazette", team: "Lyon", goals: 20, image: "https://img.a.transfermarkt.technology/portrait/big/93720-1684239713.jpg" },
      { name: "Jonathan David", team: "Lille", goals: 18, image: "https://img.a.transfermarkt.technology/portrait/big/404243-1684104714.jpg" },
    ],
    premierLeague: [
      { name: "Erling Haaland", team: "Manchester City", goals: 32, image: "https://img.a.transfermarkt.technology/portrait/big/418560-1682683669.jpg" },
      { name: "Mohamed Salah", team: "Liverpool", goals: 24, image: "https://img.a.transfermarkt.technology/portrait/big/148455-1682683953.jpg" },
      { name: "Harry Kane", team: "Bayern Munich", goals: 23, image: "https://img.a.transfermarkt.technology/portrait/big/132098-1682683920.jpg" },
    ],
    laLiga: [
      { name: "Robert Lewandowski", team: "Barcelona", goals: 23, image: "https://img.a.transfermarkt.technology/portrait/big/38253-1682683694.jpg" },
      { name: "Vinicius Jr", team: "Real Madrid", goals: 19, image: "https://img.a.transfermarkt.technology/portrait/big/371998-1682683672.jpg" },
      { name: "Jude Bellingham", team: "Real Madrid", goals: 17, image: "https://img.a.transfermarkt.technology/portrait/big/581678-1682683661.jpg" },
    ],
    bundesliga: [
      { name: "Harry Kane", team: "Bayern Munich", goals: 33, image: "https://img.a.transfermarkt.technology/portrait/big/132098-1682683920.jpg" },
      { name: "Serhou Guirassy", team: "Stuttgart", goals: 25, image: "https://img.a.transfermarkt.technology/portrait/big/270541-1682683900.jpg" },
      { name: "Lois Openda", team: "RB Leipzig", goals: 21, image: "https://img.a.transfermarkt.technology/portrait/big/377407-1682683893.jpg" },
    ],
    serieA: [
      { name: "Lautaro Martinez", team: "Inter", goals: 24, image: "https://img.a.transfermarkt.technology/portrait/big/406625-1682683783.jpg" },
      { name: "Victor Osimhen", team: "Napoli", goals: 18, image: "https://img.a.transfermarkt.technology/portrait/big/401923-1682683797.jpg" },
      { name: "Dusan Vlahovic", team: "Juventus", goals: 16, image: "https://img.a.transfermarkt.technology/portrait/big/357847-1682683782.jpg" },
    ],
  };
  return data[league as keyof typeof data] || [];
};

const getTopAssists = (league: string) => {
  const data = {
    ligue1: [
      { name: "Ousmane Dembélé", team: "PSG", assists: 15, image: "https://img.a.transfermarkt.technology/portrait/big/288230-1682683674.jpg" },
      { name: "Romain Faivre", team: "Lorient", assists: 14, image: "https://img.a.transfermarkt.technology/portrait/big/475639-1682683691.jpg" },
      { name: "Bradley Barcola", team: "PSG", assists: 12, image: "https://img.a.transfermarkt.technology/portrait/big/730502-1682683693.jpg" },
    ],
    premierLeague: [
      { name: "Kevin De Bruyne", team: "Manchester City", assists: 16, image: "https://img.a.transfermarkt.technology/portrait/big/88755-1682683674.jpg" },
      { name: "Bruno Fernandes", team: "Manchester United", assists: 14, image: "https://img.a.transfermarkt.technology/portrait/big/240306-1682683658.jpg" },
      { name: "Bukayo Saka", team: "Arsenal", assists: 12, image: "https://img.a.transfermarkt.technology/portrait/big/433177-1682683563.jpg" },
    ],
    laLiga: [
      { name: "Rodrygo", team: "Real Madrid", assists: 10, image: "https://img.a.transfermarkt.technology/portrait/big/412363-1682683671.jpg" },
      { name: "Antoine Griezmann", team: "Atletico Madrid", assists: 9, image: "https://img.a.transfermarkt.technology/portrait/big/125781-1682683673.jpg" },
      { name: "Iago Aspas", team: "Celta Vigo", assists: 8, image: "https://img.a.transfermarkt.technology/portrait/big/72457-1682683676.jpg" },
    ],
    bundesliga: [
      { name: "Florian Wirtz", team: "Bayer Leverkusen", assists: 13, image: "https://img.a.transfermarkt.technology/portrait/big/521942-1682683896.jpg" },
      { name: "Jamal Musiala", team: "Bayern Munich", assists: 10, image: "https://img.a.transfermarkt.technology/portrait/big/580195-1682683898.jpg" },
      { name: "Xavi Simons", team: "RB Leipzig", assists: 9, image: "https://img.a.transfermarkt.technology/portrait/big/566931-1682683892.jpg" },
    ],
    serieA: [
      { name: "Khvicha Kvaratskhelia", team: "Napoli", assists: 11, image: "https://img.a.transfermarkt.technology/portrait/big/557055-1682683797.jpg" },
      { name: "Hakan Calhanoglu", team: "Inter", assists: 10, image: "https://img.a.transfermarkt.technology/portrait/big/126414-1682683784.jpg" },
      { name: "Paulo Dybala", team: "Roma", assists: 9, image: "https://img.a.transfermarkt.technology/portrait/big/206050-1682683794.jpg" },
    ],
  };
  return data[league as keyof typeof data] || [];
};

const getTopReferees = (league: string) => {
  const data = {
    ligue1: [
      { name: "Clément Turpin", cards: 85, image: "https://img.a.transfermarkt.technology/portrait/big/referee-23722-1692091897.jpg" },
      { name: "Benoît Bastien", cards: 75, image: "https://img.a.transfermarkt.technology/portrait/big/referee-23723-1692091897.jpg" },
      { name: "François Letexier", cards: 70, image: "https://img.a.transfermarkt.technology/portrait/big/referee-23724-1692091897.jpg" },
    ],
    premierLeague: [
      { name: "Michael Oliver", cards: 95, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15152-1692091897.jpg" },
      { name: "Anthony Taylor", cards: 88, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15157-1692091897.jpg" },
      { name: "Paul Tierney", cards: 82, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15162-1692091897.jpg" },
    ],
    laLiga: [
      { name: "Mateu Lahoz", cards: 92, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15321-1692091897.jpg" },
      { name: "Gil Manzano", cards: 87, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15322-1692091897.jpg" },
      { name: "Martinez Munuera", cards: 80, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15323-1692091897.jpg" },
    ],
    bundesliga: [
      { name: "Felix Zwayer", cards: 78, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15701-1692091897.jpg" },
      { name: "Daniel Siebert", cards: 73, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15702-1692091897.jpg" },
      { name: "Felix Brych", cards: 70, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15703-1692091897.jpg" },
    ],
    serieA: [
      { name: "Daniele Orsato", cards: 89, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15501-1692091897.jpg" },
      { name: "Marco Guida", cards: 83, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15502-1692091897.jpg" },
      { name: "Davide Massa", cards: 79, image: "https://img.a.transfermarkt.technology/portrait/big/referee-15503-1692091897.jpg" },
    ],
  };
  return data[league as keyof typeof data] || [];
};

const VipAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('predictions');
  const [matches, setMatches] = useState(generateRealMatches());
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

  const renderStatsContent = () => {
    switch (selectedStatsTab) {
      case 'scorers':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                <Award className="h-5 w-5" /> Top Buteurs
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px] bg-white text-black">
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
              {getTopScorers(selectedLeague).map((scorer, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow text-black"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={scorer.image} alt={scorer.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black">{scorer.name}</h4>
                    <p className="text-sm text-black">{scorer.team}</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{scorer.goals}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'assists':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                <Award className="h-5 w-5" /> Top Passeurs
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px] bg-white text-black">
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
              {getTopAssists(selectedLeague).map((assister, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow text-black"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={assister.image} alt={assister.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black">{assister.name}</h4>
                    <p className="text-sm text-black">{assister.team}</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{assister.assists}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'referees':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                <Award className="h-5 w-5" /> Top Arbitres
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px] bg-white text-black">
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
              {getTopReferees(selectedLeague).map((referee, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow text-black"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={referee.image} alt={referee.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black">{referee.name}</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{referee.cards} 🟨</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
          <h1 className="text-3xl font-bold text-center mb-8 animate-fade-in text-yellow-500">Espace VIP - PRONOS STATS EMPIRE</h1>
          
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
          
          {/* Refresh Button */}
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
              <h2 className="text-2xl font-semibold">Pronostics du jour - {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
              {matches.map(match => (
                <motion.div 
                  key={match.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ translateY: -5 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-black hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div>
                      <div className="text-xs text-gray-500">{match.competition} - {new Date(match.date).toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit'}) + ' ' + new Date(match.date).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}</div>
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
              ))}
            </div>
          )}
          
          {activeTab === 'stats' && renderStatsContent()}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default VipAccess;
