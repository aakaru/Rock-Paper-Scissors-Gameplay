let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#progress");

const usr_scP = document.querySelector("#your-sc");
const comp_scP = document.querySelector("#comp-sc");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    msg.innerText = "Draw!"
    msg.style.backgroundColor = "#7D82B8"
}

const showWinner = (usrWIn, userChoice, compChoice) => {
    if(usrWIn){
        userScore++;
        usr_scP.innerText = userScore;
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#358600";
    } else{
        comScore++;
        comp_scP.innerText = comScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FB3640"
    }
}
const playGame = (userChoice) => {
    //Generating Computer's choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let usrWin = true;
        if(userChoice === "rock"){
            //paper or scissors
            usrWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock or scissors
            usrWin = compChoice === "scissors" ? false : true; 
        } else{
            // rock or paper
            usrWin = compChoice === "rock" ? false : true;
        }
        showWinner(usrWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("Id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});