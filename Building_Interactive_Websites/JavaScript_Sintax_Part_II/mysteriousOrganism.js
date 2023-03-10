// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAqueorFactory = (num, arrDNA) => {
  return {
    specimenNum: num,
    dna: arrDNA,
    mutate() {
      const randomBase = Math.floor(Math.random() * 15);
      let newBase;

      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[randomBase]);

      this.dna[randomBase] = newBase;

      return this.dna;
    },

    compareDNA(otherArqueor) {
      let sameDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherArqueor.dna[i]) {
          sameDNA++;
        }
      }
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          otherArqueor.specimenNum
        } have ${((sameDNA / this.dna.length) * 100).toFixed(2)}% DNA in common`
      );

      // for the use of the twoMostRelated Function
      return (sameDNA / this.dna.length) * 100;
    },

    willLikelySurvive() {
      let survivalChance = 0;
      this.dna.forEach((dnaElement) => {
        if (dnaElement === "C" || dnaElement === "G") {
          survivalChance++;
        }
      });

      survivalChance /= this.dna.length;
      return survivalChance >= 0.6 ? true : false;
    },
    complementStrand() {
      const complDNAStrand = [];

      this.dna.forEach((dnaElement) => {
        switch (dnaElement) {
          case "A":
            complDNAStrand.push("T");
            break;

          case "T":
            complDNAStrand.push("A");
            break;

          case "C":
            complDNAStrand.push("G");
            break;

          case "G":
            complDNAStrand.push("C");
            break;
        }
      });
      return complDNAStrand;
    },
  };
};

const generateAqeors = (dnaStrandFunc, factoryFunc) => {
  const arrOfAqueors = [];
  let specimenNumber = 1;
  do {
    const aqueor = factoryFunc(specimenNumber, dnaStrandFunc());

    if (aqueor.willLikelySurvive()) {
      arrOfAqueors.push(aqueor);
      specimenNumber++;
    } else {
      specimenNumber++;
    }
  } while (arrOfAqueors.length < 30);

  return arrOfAqueors;
};

const twoMostRelated = (groupOfAqueors) => {
  let percentage = groupOfAqueors[0].compareDNA(groupOfAqueors[1]);
  let mostRelated = percentage,
    specimenOne = [
      `${groupOfAqueors[0].specimenNum} e ${groupOfAqueors[1].specimenNum}`,
    ];

  for (let i = 1; i < groupOfAqueors[0].dna.length; i++) {
    let percentage = groupOfAqueors[i].compareDNA(groupOfAqueors[i + 1]);

    if (percentage > mostRelated) {
      specimenOne = [];
      specimenOne.push(
        ` ${groupOfAqueors[i].specimenNum} e ${
          groupOfAqueors[i + 1].specimenNum
        }`
      );
      mostRelated = percentage;
    } else if (percentage === mostRelated) {
      specimenOne.push(
        ` ${groupOfAqueors[i].specimenNum} e ${
          groupOfAqueors[i + 1].specimenNum
        }`
      );
    }
  }
  return `As instâncias de pAqueor com maior número de relações são as de números${specimenOne} `;
};

const test = pAqueorFactory(2, mockUpStrand());
const anotherTest = pAqueorFactory(3, mockUpStrand());
// console.log(test.mutate());
// test.compareDNA(anotherTest);
// console.log(test.willLikelySurvive(test));
// console.log(test.willLikelySurvive(anotherTest));
// test.willLikelySurvive(test);
// test.willLikelySurvive(anotherTest);
// generateAqeors(mockUpStrand, pAqueorFactory);
// console.log(generateAqeors(mockUpStrand, pAqueorFactory));
// console.log(test.complementStrand());

const aqueors = generateAqeors(mockUpStrand, pAqueorFactory);
console.log(twoMostRelated(aqueors));
