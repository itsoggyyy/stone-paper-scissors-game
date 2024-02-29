let userScore = 0;
let comScore = 0 ;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock", "paper", "kainchi" ];
    const randIdx = math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Ek or Bar ");
};

const showWinner = (userWin) => {
    if (userWin){
        console.log("you win")
    }else{
        console.log("you lose")
    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const comChoice = genComChoice();
    console.log("comp choice = ", comChoice);

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice ==="paper" ? false : true ;
        }else if(userChoice=== "paper"){
            userWin = comChoice=== "kainchi" ? false : true;
        }else{
            userWin = comChoice === "rock" ? false : true ;
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id")
        console.log("choice was clicked", choiceId);
        playGame(userChoice);
    });
})

