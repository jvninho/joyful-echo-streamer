export const getTopScorers = (league: string) => {
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

export const getTopAssists = (league: string) => {
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

export const getTopReferees = (league: string) => {
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
