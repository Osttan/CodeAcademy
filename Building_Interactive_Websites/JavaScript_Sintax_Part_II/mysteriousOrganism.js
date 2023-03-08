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
  };
};

const test = pAqueorFactory(2, mockUpStrand());
console.log(test.mutate());
