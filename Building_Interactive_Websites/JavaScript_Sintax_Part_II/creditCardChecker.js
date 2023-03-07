// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// Bonus cards from free formater
const discover1 = "6011006192703081";
const discover2 = "6011427069136256";
const discover3 = "6011875260387119376";
const maestro1 = "6759716263994718";
const maestro2 = "6763560319266356";

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const checkIsValid = (arr) => {
  let sumOfDigits = 0;

  let i = arr.length - 2;
  while (i >= 0) {
    if (arr[i] * 2 > 9) {
      sumOfDigits += arr[i] * 2 - 9;
    } else {
      sumOfDigits += arr[i] * 2;
    }
    i -= 2;
  }

  i = arr.length - 1;
  while (i >= 0) {
    sumOfDigits += arr[i];
    i -= 2;
  }

  return sumOfDigits;
};

const validateCred = (arr, checkFunc) => {
  const result = checkFunc(arr);

  return result % 10 === 0 ? true : false;
};

const findInvalidCards = (nestedCards) => {
  const invalidCards = [];
  nestedCards.forEach((card) => {
    if (!validateCred(card, checkIsValid)) {
      invalidCards.push(card);
    }
  });
  return invalidCards;
};

const idInvalidCardCompanies = (nestedInvCards) => {
  const invCardCompanies = [];
  nestedInvCards.filter((invCard) => {
    switch (invCard[0]) {
      case 3:
        if (invCardCompanies.includes("Amex (American Express)")) {
          break;
        } else {
          invCardCompanies.push("Amex (American Express)");
          break;
        }
      case 4:
        if (invCardCompanies.includes("Visa")) {
          break;
        } else {
          invCardCompanies.push("Visa");
          break;
        }
      case 5:
        if (invCardCompanies.includes("Mastercard")) {
          break;
        } else {
          invCardCompanies.push("Mastercard");
        }
        break;
      case 6:
        if (invCardCompanies.includes("Discover")) {
          break;
        } else {
          invCardCompanies.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
        break;
    }
  });
  return invCardCompanies;
};

const strToArr = (inputStr) => {
  const resultArr = [];
  for (let i = 0; i < inputStr.length; i++) {
    resultArr.push(parseInt(inputStr[i]));
  }
  return resultArr;
};

const invToVal = (cardNotValid, checkFunc) => {
  const oldValue = cardNotValid.join("");
  const restOfDivision = checkFunc(cardNotValid) % 10;

  if (restOfDivision > 0) {
    for (let i = cardNotValid.length - 1; i >= 0; i--) {
      if (cardNotValid[i] - restOfDivision >= 0) {
        cardNotValid[i] -= restOfDivision;
        return `The invalid card ${oldValue} was converted to a valid card: ${cardNotValid.join(
          ""
        )}`;
      } else {
        i--;
      }
    }
  } else {
    return "This is already a valid card";
  }
};

// const invalid6 = strToArr("4532778771091790");
// const invalid7 = strToArr("5795593392134641");
// const invalid8 = strToArr("375796084459114");
// const invalid9 = strToArr("6011127961777930");
// const invalid10 = strToArr("5382019772883853");
// console.log(invToVal(invalid1, checkIsValid));
// console.log(invToVal(invalid2, checkIsValid));
// console.log(invToVal(invalid3, checkIsValid));
// console.log(invToVal(invalid4, checkIsValid));
// console.log(invToVal(invalid5, checkIsValid));
// console.log(invToVal(invalid6, checkIsValid));
// console.log(invToVal(valid1, checkIsValid));

// console.log(validateCred(valid1, checkIsValid));
// console.log(validateCred(valid2, checkIsValid));
// console.log(validateCred(valid3, checkIsValid));
// console.log(validateCred(valid4, checkIsValid));
// console.log(validateCred(valid5, checkIsValid));
// console.log(validateCred(invalid6, checkIsValid));
// console.log(validateCred(invalid7, checkIsValid));
// console.log(validateCred(invalid8, checkIsValid));
// console.log(validateCred(invalid9, checkIsValid));
// console.log(validateCred(invalid10, checkIsValid));

// console.log("Now the invalids");

// console.log(validateCred(invalid1, checkIsValid));
// console.log(validateCred(invalid2, checkIsValid));
// console.log(validateCred(invalid3, checkIsValid));
// console.log(validateCred(invalid4, checkIsValid));
// console.log(validateCred(invalid5, checkIsValid));

// console.log("Now the misterious ones");

// console.log(validateCred(mystery1, checkIsValid));
// console.log(validateCred(mystery2, checkIsValid));
// console.log(validateCred(mystery3, checkIsValid));
// console.log(validateCred(mystery4, checkIsValid));
// console.log(validateCred(mystery5, checkIsValid));

// console.log(findInvalidCards(batch));

// const invalidCardsArr = findInvalidCards(batch);
// console.log(idInvalidCardCompanies(invalidCardsArr));
