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

// Function to check if user is logged in
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

// Helper functions to update match data
const getRandomScore = () => {
  return Math.floor(Math.random() * 4);
};

const getRandomOdds = () => {
  return (1 + Math.random() * 3).toFixed(2);
};

// Mock match data for demonstration
const generateMatches = () => {
  const teams = [
    "PSG", "Marseille", "Lyon", "Monaco", 
    "Lille", "Rennes", "Real Madrid", "Barcelona", 
    "Bayern Munich", "Manchester City", "Liverpool", "Juventus"
  ];
  
  const matches = [];
  for (let i = 0; i < 6; i += 2) {
    matches.push({
      id: i/2,
      homeTeam: teams[i],
      awayTeam: teams[i+1],
      homeScore: getRandomScore(),
      awayScore: getRandomScore(),
      homeOdds: getRandomOdds(),
      drawOdds: getRandomOdds(),
      awayOdds: getRandomOdds(),
      prediction: Math.random() > 0.5 
        ? `${teams[i]} gagne` 
        : Math.random() > 0.5 
          ? `${teams[i+1]} gagne`
          : "Match nul",
      analysis: `Match très disputé entre ces deux équipes. Basé sur les statistiques récentes, ${teams[i]} a remporté 3 de ses 5 derniers matchs, tandis que ${teams[i+1]} reste sur une série de 2 défaites.`
    });
  }
  return matches;
};

// Top performers data
const topScorersData = [
  { name: "Kylian Mbappé", team: "Real Madrid", goals: 15 },
  { name: "Erling Haaland", team: "Manchester City", goals: 14 },
  { name: "Robert Lewandowski", team: "Barcelona", goals: 12 },
  { name: "Harry Kane", team: "Bayern Munich", goals: 11 },
  { name: "Mohamed Salah", team: "Liverpool", goals: 10 }
];

const topAssistsData = [
  { name: "Kevin De Bruyne", team: "Manchester City", assists: 12 },
  { name: "Lionel Messi", team: "Inter Miami", assists: 10 },
  { name: "Bruno Fernandes", team: "Manchester United", assists: 9 },
  { name: "Ousmane Dembélé", team: "PSG", assists: 8 },
  { name: "Trent Alexander-Arnold", team: "Liverpool", assists: 7 }
];

const topRefereesData = [
  { name: "Clément Turpin", league: "Ligue 1", cards: 45 },
  { name: "Michael Oliver", league: "Premier League", cards: 42 },
  { name: "Daniele Orsato", league: "Serie A", cards: 38 },
  { name: "Felix Brych", league: "Bundesliga", cards: 37 },
  { name: "Mateu Lahoz", league: "La Liga", cards: 35 }
];

// Available leagues data
const leagues = [
  { id: "ligue1", name: "Ligue 1" },
  { id: "premierLeague", name: "Premier League" },
  { id: "laLiga", name: "La Liga" },
  { id: "bundesliga", name: "Bundesliga" },
  { id: "serieA", name: "Serie A" }
];

// Mock data for different leagues (in real app, this would come from an API)
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
    // ... add more leagues with similar data structure
  };
  return data[league as keyof typeof data] || [];
};

const getTopAssists = (league: string) => {
  const data = {
    ligue1: [
      { name: "Ousmane Dembélé", team: "PSG", assists: 15, image: "https://img.a.transfermarkt.technology/portrait/big/288230-1682683674.jpg" },
      { name: "Lionel Messi", team: "Inter Miami", assists: 14, image: "https://img.a.transfermarkt.technology/portrait/big/28003-1694590403.jpg" },
      { name: "Neymar", team: "Al-Hilal", assists: 12, image: "https://img.a.transfermarkt.technology/portrait/big/68290-1682683677.jpg" },
    ],
    premierLeague: [
      { name: "Kevin De Bruyne", team: "Manchester City", assists: 16, image: "https://img.a.transfermarkt.technology/portrait/big/88755-1682683674.jpg" },
      { name: "Bruno Fernandes", team: "Manchester United", assists: 14, image: "https://img.a.transfermarkt.technology/portrait/big/240306-1682683658.jpg" },
      { name: "Bukayo Saka", team: "Arsenal", assists: 12, image: "https://img.a.transfermarkt.technology/portrait/big/433177-1682683563.jpg" },
    ],
    // ... add more leagues with similar data structure
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
    // ... add more leagues with similar data structure
  };
  return data[league as keyof typeof data] || [];
};

const VipAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('predictions');
  const [matches, setMatches] = useState(generateMatches());
  const [refreshing, setRefreshing] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("ligue1");
  const [selectedStatsTab, setSelectedStatsTab] = useState('scorers');

  useEffect(() => {
    // Check authentication status
    setAuthenticated(isLoggedIn());
  }, []);

  const refreshData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMatches(generateMatches());
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
          <div className="bg-black/70 p-8 rounded-lg max-w-md w-full">
            <p className="text-xl text-center mb-6 text-white">
              Ce contenu est réservé aux abonnés, merci de vous connecter
            </p>
            <Button 
              onClick={() => navigate("/login")}
              className="w-full bg-akatsuki-gold hover:bg-yellow-500 text-black"
            >
              Se connecter
            </Button>
          </div>
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
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5" /> Top Buteurs
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px]">
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
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={scorer.image} alt={scorer.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{scorer.name}</h4>
                    <p className="text-sm text-gray-600">{scorer.team}</p>
                  </div>
                  <div className="text-2xl font-bold text-akatsuki-gold">{scorer.goals}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'assists':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5" /> Top Passeurs
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px]">
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
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={assister.image} alt={assister.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{assister.name}</h4>
                    <p className="text-sm text-gray-600">{assister.team}</p>
                  </div>
                  <div className="text-2xl font-bold text-akatsuki-gold">{assister.assists}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'referees':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5" /> Top Arbitres
              </h3>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-[180px]">
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
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={referee.image} alt={referee.name} />
                    <AvatarFallback><Users /></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{referee.name}</h4>
                  </div>
                  <div className="text-2xl font-bold text-akatsuki-gold">{referee.cards} 🟨</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Espace VIP - FRG PRONOS</h1>
        
        <div className="flex flex-wrap border-b mb-6">
          <button 
            onClick={() => setActiveTab('predictions')}
            className={`px-4 py-2 ${activeTab === 'predictions' ? 'border-b-2 border-akatsuki-gold text-akatsuki font-semibold' : 'text-gray-500'}`}
          >
            Pronostics du jour
          </button>
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-4 py-2 ${activeTab === 'live' ? 'border-b-2 border-akatsuki-gold text-akatsuki font-semibold' : 'text-gray-500'}`}
          >
            Matchs en direct
          </button>
          <button 
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 ${activeTab === 'stats' ? 'border-b-2 border-akatsuki-gold text-akatsuki font-semibold' : 'text-gray-500'}`}
          >
            Valeurs sûres
          </button>
        </div>

        {activeTab === 'stats' && (
          <div className="mb-6 flex gap-4">
            <Button
              onClick={() => setSelectedStatsTab('scorers')}
              variant={selectedStatsTab === 'scorers' ? "default" : "outline"}
            >
              Top Buteurs
            </Button>
            <Button
              onClick={() => setSelectedStatsTab('assists')}
              variant={selectedStatsTab === 'assists' ? "default" : "outline"}
            >
              Top Passeurs
            </Button>
            <Button
              onClick={() => setSelectedStatsTab('referees')}
              variant={selectedStatsTab === 'referees' ? "default" : "outline"}
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
            className="bg-akatsuki-gold hover:bg-yellow-500 text-black"
          >
            {refreshing ? 'Actualisation...' : 'Actualiser les données'}
          </Button>
        </div>

        {activeTab === 'predictions' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Pronostics du jour</h2>
            {matches.map(match => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="text-xl font-bold mb-2 md:mb-0">
                    {match.homeTeam} vs {match.awayTeam}
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Buteurs potentiels:</h4>
                    <ul className="list-disc list-inside">
                      <li>Benzema ({match.homeTeam}) - 40%</li>
                      <li>Lewandowski ({match.awayTeam}) - 35%</li>
                      <li>Vinicius ({match.homeTeam}) - 25%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Score exact:</h4>
                    <ul className="list-disc list-inside">
                      <li>2-1: 25%</li>
                      <li>1-1: 20%</li>
                      <li>2-0: 15%</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'live' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Matchs en direct</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Heure</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Minute</TableHead>
                    <TableHead>Statistiques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {matches.map(match => (
                    <TableRow key={match.id}>
                      <TableCell>20:45</TableCell>
                      <TableCell className="font-medium">{match.homeTeam} vs {match.awayTeam}</TableCell>
                      <TableCell className="font-bold">{match.homeScore} - {match.awayScore}</TableCell>
                      <TableCell>{Math.floor(Math.random() * 90)}′</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Voir</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
        
        {activeTab === 'stats' && renderStatsContent()}
      </main>
      <Footer />
    </div>
  );
};

export default VipAccess;
