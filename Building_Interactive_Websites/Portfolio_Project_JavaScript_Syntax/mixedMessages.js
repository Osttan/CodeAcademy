const feelings = [
  "afraid",
  "angry",
  "anxious",
  "bored",
  "confused",
  "frustraded",
  "furious",
  "happy",
  "impatient",
  "in love",
  "lonely",
  "nervous",
  "relaxed",
  "sad",
  "scared",
  "tense",
  "tired",
  "upset",
  "worried",
];

const bands = [
  {
    name: "Def Leppard",
    genre: "rock'n roll",
  },
  {
    name: "Motley Crue",
    genre: "rock'n roll",
  },
  {
    name: "Saxon",
    genre: "hard rock",
  },
  {
    name: "Kiss",
    genre: "hard rock",
  },
  {
    name: "Scorpions",
    genre: "hard rock",
  },
  {
    name: "Led Zeppelin",
    genre: "hard rock",
  },
  {
    name: "The Who",
    genre: "rock'n roll",
  },
  {
    name: "Legião Urbana",
    genre: "brazilian rock",
  },
  {
    name: "Titãs",
    genre: "brazilian rock",
  },
  {
    name: "Plebe Rude",
    genre: "brazilian rock",
  },
  {
    name: "Nenhum de Nós",
    genre: "brazilian rock",
  },
  {
    name: "Camisa de Vênus",
    genre: "brazilian rock",
  },
  {
    name: "Rush",
    genre: "progressive rock",
  },
  {
    name: "Pink Floyd",
    genre: "progressive rock",
  },
  {
    name: "Judas Priest",
    genre: "heavy metal",
  },
  {
    name: "Iron Maiden",
    genre: "heavy metal",
  },
  {
    name: "U2",
    genre: "rock'n roll",
  },
  {
    name: "Dead Kennedys",
    genre: "punk",
  },
  {
    name: "The OffSpring",
    genre: "punk",
  },
];

const generateMessage = (feeling, band) => {
  const choosenFeel = Math.floor(Math.random() * feeling.length);
  const choosenBand = Math.floor(Math.random() * band.length);

  console.log(
    `You seem to be ${feeling[choosenFeel]}...\nSo, maybe you should listen to ${band[choosenBand].name}, a great ${band[choosenBand].genre} band!`
  );
};

generateMessage(feelings, bands);
