// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function consoleLogger() {
//   const poraka = "Vezbame java script";
//   return poraka;
// }

// console.log(consoleLogger());

// definirajte funkcija so ime vezbamZaTest so dva argumenti predmet1 i predmet2
// koja treba da ja vrati slednata recenica
// "Vezbame po predmetite $Matematika i $Progamiranje"
// Povikajte ja funkcijata i prikazete vo consola

// function vezbamZaTest(predmet1, predmet2) {
//   const vezbam = `Vezbame po predmetite ${predmet1} i ${predmet2}`;
//   return vezbam;
// }

// const vezbame = vezbamZaTest("Matematika", "Programiranje");
// console.log(vezbame);
//function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(2006);
// console.log(age1);

//function expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(2006);
// console.log(age2);

// Arrow function

// const calcAge = (birthYear) => 2023 - birthYear;
// console.log(calcAge(2006));

// const yearsUntilRetirements = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirements(1991, "Jonas"));

// Functions calling others function

// function cutFruitPieces(fruit) {
//   return 4 * fruit;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// function describeCountry(Counry, population, CapitalCity) {
//   return `Country name ${Counry} with population of ${population} people and capital city ${CapitalCity}`;
// }

// const firstCountry = describeCountry("Macedonia", "2milion", "Skopje");
// console.log(firstCountry);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
