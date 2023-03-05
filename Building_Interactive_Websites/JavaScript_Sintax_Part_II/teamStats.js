const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 26,
    },
    {
      firstName: 'Rick',
      lastName: 'Manson',
      age: 29,
    },
    {
      firstName: 'Maria',
      lastName: 'Harry',
      age: 23,
    },
  ],
  _games: [
    {
      opponent: 'Jimmy',
      teamPoints: 7,
      opponentPoints: 5,
    },
    {
      opponent: 'Paul',
      teamPoints: 6,
      opponentPoints: 8,
    },
    {
      opponent: 'David',
      teamPoints: 8,
      opponentPoints: 5,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);
