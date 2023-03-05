const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 9;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8;
      break;
  }
};

const getActualSleepHours = () => {
  return 8 + 6 + 9 + 7 + 6 + 9 + 8;
};

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = idealHours => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);

  if (actualSleepHours === idealSleepHours) {
    console.log("You've slept the perfect amount of hours!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You've slept ${
        actualSleepHours - idealSleepHours
      } hour(s) more than it was needed`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You should get some rest, cause you've slept ${
        idealSleepHours - actualSleepHours
      } less hour(s) than it was needed...`
    );
  }
};

calculateSleepDebt(8);
