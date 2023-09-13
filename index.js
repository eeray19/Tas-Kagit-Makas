var playerChoice;
var compChoice;
var playerScore = 0;
var compScore = 0;

var options = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        //id will be rock, paper or scissors
        let option = document.createElement("img");
        option.id = options[i];
        option.src = options[i] + ".png";
        
        option.addEventListener("click", chooseOption);
        document.getElementById("options").append(option);
        document.getElementById("restart-button").addEventListener("click", restartGame);
    }
}

function chooseOption(){
    playerChoice = this.id;
    document.getElementById("player-choice").src = playerChoice + ".png";

    compChoice = options[Math.floor(Math.random() * 3)];
    document.getElementById("comp-choice").src = compChoice + ".png";

    if(playerChoice == compChoice) {
        playerScore +=1; 
        compScore +=1; 
    }
    else if ( (playerChoice == "rock" && compChoice == "scissors") || (playerChoice == "paper" && compChoice == "rock") || (playerChoice == "scissors" && compChoice == "paper")) {
        playerScore +=1; 
    }
    else {
        compScore +=1; 
    }
    
    document.getElementById("comp-score").innerText = `Rakip Puanı: ${compScore}`;
    document.getElementById("player-score").innerText = `Puan: ${playerScore}`;    
}

function restartGame() {
    playerScore = 0;
    compScore = 0;

    document.getElementById("comp-score").innerText = `Rakip Puanı: ${compScore}`;
    document.getElementById("player-score").innerText = `Puan: ${playerScore}`;

    document.getElementById("player-choice").src = "blank.png";
    document.getElementById("comp-choice").src = "blank.png";
}




