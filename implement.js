
let randomnumber = Math.trunc(Math.random() * 6) + 1;
let player1_score=document.getElementById("score--0");
let player2_score=document.getElementById("score--1");
let currentscore1=document.getElementById("current--0");
let currentscore2=document.getElementById("current--1");
let rolldice=document.querySelector(".btn.btn--roll");
let dicevalue=document.querySelector(".dice");
let hold=document.querySelector(".btn.btn--hold")
let newgame=document.querySelector(".btn.btn--new");

hold.addEventListener("click",switchplayer);
rolldice.addEventListener("click", play);
newgame.addEventListener("click",resetgame);
let current=player1_score;
let score1=0;
let score2=0;

function play(){
    let randomnumber = Math.trunc(Math.random() * 6) + 1;
    if (randomnumber==1){
        dicevalue.setAttribute("src","dice-1.png");
        if (current==player1_score){
            score1=score1+1;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+1;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
    else if (randomnumber==2){
        dicevalue.setAttribute("src","dice-2.png");
        if (current==player1_score){
            score1=score1+2;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+2;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
    else if (randomnumber==3){
        dicevalue.setAttribute("src","dice-3.png");
        if (current==player1_score){
            score1=score1+3;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+3;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
    else if (randomnumber==4){
        dicevalue.setAttribute("src","dice-4.png");
        if (current==player1_score){
            score1=score1+4;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+4;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
    else if (randomnumber==5){
        dicevalue.setAttribute("src","dice-5.png");
        if (current==player1_score){
            score1=score1+5;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+5;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
    else {
        dicevalue.setAttribute("src","dice-6.png");
        if (current==player1_score){
            score1=score1+6;
            currentscore1.textContent=score1;
            if (score1>20){
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
            }
        }
        else if (current==player2_score){
            score2=score2+6;
            currentscore2.textContent=score2;
            if (score2>20){
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
        }
    }
}
let click1=0;
let click2=0;
function switchplayer(){
    if (current==player1_score)
    {
        click1=1;
        current=player2_score;
        if (score1<20){
            player1_score.textContent=score1;
        }
        else if (score1>20){
            player1_score.textContent="you lost";
            document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
        }
        
        if (click2>0){
            if (score1<=20){
                if (score1>score2){
                    player1_score.textContent="You won";
                    document.querySelector(".player.player--0.player--active").style.backgroundColor="green";
                }
                else{
                    player1_score.textContent="You lost";
                    document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
                }
            }
            else{
                player1_score.textContent="you lost";
                document.querySelector(".player.player--0.player--active").style.backgroundColor="black";
    
            }

            
        }
        
        
    }
    else if (current==player2_score)
    {
        click2=1;
        current=player1_score;
        if (score2<20){
            player2_score.textContent=score2;

        }
        else if (score2>20){
            player2_score.textContent="you lost";
            document.querySelector(".player.player--1").style.backgroundColor="black";
        }
        if (click1>0){
            if (score2<=20){
                if (score2>score1){
                    player2_score.textContent="You won";
                    document.querySelector(".player.player--1").style.backgroundColor="green";
                }
                else{
                    player2_score.textContent="You lost";
                    document.querySelector(".player.player--1").style.backgroundColor="black";
                }
            }
            else{
                player2_score.textContent="you lost";
                document.querySelector(".player.player--1").style.backgroundColor="black";
            }
            }
            
        
    }

}

function resetgame(){
    player1_score.textContent=0;
    player2_score.textContent=0;
    currentscore1.textContent=0;
    currentscore2.textContent=0;
    score1=0;
    score2=0;
    click1=0;
    click2=0;
    
    document.querySelector(".player.player--0.player--active").style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    document.querySelector(".player.player--1").style.backgroundColor="rgba(255, 255, 255, 0)";


}