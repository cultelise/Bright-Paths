/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonAttack = 10;
let jamieAttack = 40;

if (jamieAttack > jonAttack) {
  console.log('Jamie has greater attack strength.');
} else if (jonAttack == jamieAttack) {
  console.log("It's a stalemate.");
} else {
  console.log('Jon has greater attack strength.');
}

let jonHealth = 100;
let jonDefense = 0;

function jamieAttacks() {
  console.log('Jamie attacks Jon!');
  if (jamieAttack - jonDefense > 0) {
    jonHealth -= jamieAttack - jonDefense;
  }
  if (jonHealth <= 0) {
    console.log('Jon has fallen to Jamie.');
  } else {
    console.log(`Jon survives with ${jonHealth} health.`);
  }
}

jamieAttacks();

if (jonHealth <= 0) {
  console.log('Jon has fallen to Jamie.');
} else {
  console.log(jonHealth);
}

console.log('Jon picks up a shield, gaining 25 defense.');
jonDefense += 25;

jamieAttacks();

function jonHeals() {
  if (jonHealth < 100 && jonHealth >= 50) {
    console.log('Jon is healed to 100.');
  } else if (jonHealth < 50) {
    jonHealth += 50;
    console.log(`The health pack heals Jon to ${jonHealth} health.`);
  } else {
    console.log("Jon's health is already full.");
  }
}

jonHeals();

let coinLandsHeads = true;

if (coinLandsHeads) {
  console.log('Jamie aims for the head!');
} else {
  console.log('Jon flees.');
}

console.log('Jamie initiates a flurry of blows.');
for (let i = 0; i < 5; i++) {
  jamieAttacks();
  if (jonHealth <= 0) {
    console.log('The flurry was successful.');
    break;
  }
  if (i === 4) {
    console.log('The flurry was unsuccessful.');
  }
}

while (jonHealth > 0) {
  console.log('Jamie enrages.');
  jamieAttacks();
}

console.log('Jon resurrects. Winter has come.');
