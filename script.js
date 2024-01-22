let userscore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompchoice = () => 
{
    const options =["rock","paper","scissor"];
    
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

const drawGame = () =>
{
    msg.innerText = "Game draw,play again!!!";

    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!! ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `You loss!! ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceId) => 
{
      console.log("user choice =",choiceId);

      const compChoice = genCompchoice();

      console.log("comp choice",compChoice);

      if(choiceId === compChoice)
      {
          drawGame();
      }


      else {
        let userWin = true;

        if(choiceId === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        } 

        else if(choiceId === "paper") 
        {
            userWin = compChoice === "scissor" ? false : true;
        } 

        else 
        {
            compChoice === "rock" ? false:true;
        }

           showWinner(userWin,choiceId,compChoice);
      }
};

choices.forEach((choice) =>
 {
    console.log(choice);

    choice.addEventListener("click",() =>
     {
        const choiceId =choice.getAttribute("id")

        console.log("choice was clicked",choiceId);

        playGame(choiceId);
    });
});