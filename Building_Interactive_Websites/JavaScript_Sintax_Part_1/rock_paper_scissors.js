console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'bomb') {
    return 'bomb';
  } else if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    console.log('No valid option input');
  }
};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else if (computerChoice === 2) {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
};

// console.log(determineWinner('scissors', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(
    `The choices were ${userChoice} for the user and ${computerChoice} for the computer. The result is...`
  );
  if (userChoice === 'bomb') {
    return 'User Won!';
  }
  return determineWinner(userChoice, computerChoice);
};

console.log(playGame());
