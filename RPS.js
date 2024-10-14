let user="";
let com_score=0,user_score=0;
let computer="";
function choose()
{
    let n=Math.ceil(Math.random()*3);  /*computer choose any one */
    if(n==1)
    {
        computer = "ROCK";
    }
    if(n==2)
    {
        computer = "PAPER";
    }
    if(n==3)
    {
        computer = "SCISSORS";
    }
}
// first time call function
choose();
/* User value fetch */
let user_choice_rock = document.getElementById("rock-btn");
let user_choice_paper = document.getElementById("paper-btn");
let user_choice_scissors = document.getElementById("scissors-btn");
let user_choice_reset = document.getElementById("r-btn");
let rock = function f1(){
    user="ROCK";
    if(user == "ROCK" && computer == "ROCK")
    {
        document.getElementById("com_disp").innerHTML="ROCK";
        document.getElementById("user_disp").innerHTML="ROCK";
        document.getElementById("match-position").innerHTML="Match Draw !";
        choose();
    }
    if(user == "ROCK" && computer == "PAPER")
    {
        document.getElementById("com_disp").innerHTML="PAPER";
        document.getElementById("user_disp").innerHTML="ROCK";
        document.getElementById("match-position").innerHTML="Computer Win !";
        com_score = com_score + 1;
        document.getElementById("c-score").innerHTML=com_score;
        choose();
    }
    if(user == "ROCK" && computer == "SCISSORS")
    {
        document.getElementById("com_disp").innerHTML="SCISSORS";
        document.getElementById("user_disp").innerHTML="ROCK";
        document.getElementById("match-position").innerHTML="You Win !";
        user_score = user_score + 1;
        document.getElementById("u-score").innerHTML=user_score;
        choose();
   }
}
let paper = function f2(){
    user="PAPER";
    if(user == "PAPER" && computer == "ROCK")
    {
        document.getElementById("com_disp").innerHTML="ROCK";
        document.getElementById("user_disp").innerHTML="PAPER";
        document.getElementById("match-position").innerHTML="You Win !";
        user_score = user_score + 1;
        document.getElementById("u-score").innerHTML=user_score;
        choose();
    }
    if(user == "PAPER" && computer == "PAPER")
    {
        document.getElementById("com_disp").innerHTML="PAPER";
        document.getElementById("user_disp").innerHTML="PAPER";
        document.getElementById("match-position").innerHTML="Match Draw !";
        choose();
    }
    if(user == "PAPER" && computer == "SCISSORS")
    {
        document.getElementById("com_disp").innerHTML="SCISSORS";
        document.getElementById("user_disp").innerHTML="PAPER";
        document.getElementById("match-position").innerHTML="Computer Win !";
        com_score = com_score + 1;
        document.getElementById("c-score").innerHTML=com_score;
        choose();
    }
}
let scissors = function f3(){
    user="SCISSORS";
    if(user == "SCISSORS" && computer == "ROCK")
        {
            document.getElementById("com_disp").innerHTML="ROCK";
            document.getElementById("user_disp").innerHTML="SCISSORS";
            document.getElementById("match-position").innerHTML="Computer Win !";
            com_score = com_score + 1;
            document.getElementById("c-score").innerHTML=com_score;
            choose();
        }
        if(user == "SCISSORS" && computer == "PAPER")
        {
            document.getElementById("com_disp").innerHTML="PAPER";
            document.getElementById("user_disp").innerHTML="SCISSORS";
            document.getElementById("match-position").innerHTML="You Win !";
            user_score = user_score + 1;
            document.getElementById("u-score").innerHTML=user_score;
            choose();
        }
        if(user == "SCISSORS" && computer == "SCISSORS")
        {
            document.getElementById("com_disp").innerHTML="SCISSORS";
            document.getElementById("user_disp").innerHTML="SCISSORS";
            document.getElementById("match-position").innerHTML="Match Draw !";
            choose();
        }
}

let reset = function f4(){
    computer="";
    user="";
    com_score=0,user_score=0;
    choose();
    document.getElementById("com_disp").innerHTML="";
    document.getElementById("user_disp").innerHTML="";
    document.getElementById("match-position").innerHTML="";
    document.getElementById("c-score").innerHTML="0";
    document.getElementById("u-score").innerHTML="0";
}
 
user_choice_rock.addEventListener('click',rock);
user_choice_paper.addEventListener('click',paper);
user_choice_scissors.addEventListener('click',scissors);
user_choice_reset.addEventListener('click',reset);