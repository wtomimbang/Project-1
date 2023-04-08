let wins = 0;
let losses = 0;
let ties = 0;

let rounds = prompt("How many rounds do you want to play?");

while (isNaN(rounds) || rounds < 1) {
  rounds = prompt("Please enter a valid number of rounds - a number greater than zero.");
}

for (let i = 1; i <= rounds; i++) {
  let userChoice = prompt("Choose rock (r), paper (p), or scissors (s).");

  while (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
    userChoice = prompt(`Invalid input. Please choose rock (r), paper (p), or scissors (s).`);
  }

  let computerChoice = Math.floor(Math.random() * 3);

  if (userChoice === 'r' && computerChoice === 1) {
    losses++;
    alert("You lost!");
  } else if (userChoice === 'r' && computerChoice === 2) {
    wins++;
    alert("You won!");
  } else if (userChoice === 'p' && computerChoice === 0) {
    losses++;
    alert("You lost!");
  } else if (userChoice === 'p' && computerChoice === 2) {
    wins++;
    alert("You won!");
  } else if (userChoice === 's' && computerChoice === 0) {
    wins++;
    alert("You won!");
  } else if (userChoice === 's' && computerChoice === 1) {
    losses++;
    alert("You lost!");
  } else {
    ties++;
    alert("You tied!");
  }
}

alert(`You won ${wins} time(s), tied ${ties} time(s), and lost ${losses} time(s).`);
