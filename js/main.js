// 1. function that ask player for choice
// 2. func that return random computer choice
// 3. func that return restul depen on who win
// 4. for loop that count score and displey winner after five RefCountDisposable

var possibleChoices = ["Камень","Ножницы","Бумага"];

const playerChoice = function () {
    var askChoice = prompt("Ваш выбор?");
    return askChoice
};

const computerChoice = function () {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
};

function roundWinner(playerChoice,computerChoice) {
    if (playerChoice == "Камень" && computerChoice == "Ножницы") {
        return "Победа"
    }
    else if (playerChoice == "Камень" && computerChoice == "Бумага") {
        return "Поражение"
    }
    else if (playerChoice == "Ножницы" && computerChoice == "Бумага") {
        return "Победа"
    }
    else if (playerChoice == "Ножницы" && computerChoice == "Камень") {
        return "Поражение"
    }
    else if (playerChoice == "Бумага" && computerChoice == "Камень") {
        return "Победа"
    }
    else if (playerChoice == "Бумага" && computerChoice == "Ножницы") {
        return "Поражение"
    }
    else if (playerChoice == computerChoice) {
        return "Ничья"
    }
    else {
        return false
    }
   
};
var computerScore = 0
var playerScore = 0

for (let i = 0; i < 5; i++) {
    var win = roundWinner(playerChoice(),computerChoice())
    if (win == "Победа") {
        console.log("Победа")
        playerScore += 1
        console.log("Your score:",playerScore,":", computerScore, "Computer score")
    }
    else if (win == "Поражение") {
        console.log("Поражение")
        computerScore += 1
        console.log("Your score:",playerScore,":", computerScore, "Computer score") 
    }
    else if (win == "Ничья" ) {
        console.log("Ничья")
        console.log("Your score:",playerScore,":", computerScore, "Computer score") 
    }

    else {
        console.log("Incorrect value")
    } 
};

function result() {
    if (computerScore > playerScore) {
        return "You lose"
    }
    else {
        return "You win"
    }
}

console.log(result())




 
    










