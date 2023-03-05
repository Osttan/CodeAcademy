let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your Guess is Out of Range!');
  }

  let humanGuessComparison = getAbsoluteDistance(humanGuess, targetNumber);
  let computerGuessComparison = getAbsoluteDistance(
    computerGuess,
    targetNumber
  );

  return humanGuessComparison <= computerGuessComparison ? true : false;
};

const getAbsoluteDistance = (guess, target) => {
  return guess > target ? guess - target : target - guess;
};

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
