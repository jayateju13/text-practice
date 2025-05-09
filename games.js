alert("Welcome to the Guessing game");
const wanttoplay=confirm("Do you want to play a number guessing game?");
if(wanttoplay){
    const randomNumber=Math.floor(Math.random()*12)+1;
    for(let attempt=1;attempt<=5; attempt++)
    {
        let userguess=prompt("attempt:"+attempt +"Guess a number between 1to10");
        if(parseInt(userguess)===randomNumber){
            alert("Congratulation! you guessed the correct number:"+randomNumber);
            break;
        }
        else{
            if(attempt<5)
            {
                alert("Wrong guess!Try again");
            }
            else{
                alert("game Over! the correct number was"+randomNumber);

            }
        }
        }
    }
    else{
        alert("no problem! may be next time");
    }
