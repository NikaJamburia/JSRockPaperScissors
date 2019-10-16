var userChoice_output_div = document.getElementById('userchoice');
var compChoice_output_div = document.getElementById('compchoice');
var userScore_output = document.getElementById('userScore');
var compScore_output = document.getElementById('compScore');
var outcome = document.getElementById('outcome');
var userScore = 0;
var compScore = 0;

function removeGlow(){
    userChoice_output_div.classList.remove("green_glow");
    compChoice_output_div.classList.remove("green_glow");

    userChoice_output_div.classList.remove("grey_glow");
    compChoice_output_div.classList.remove("grey_glow");
}

function main(userChoice){
    a = ['r', 'p', 's'];
    compChoice = a[Math.floor(Math.random()*3)];
    userChoice_output_div.innerHTML = "<img style='position:relative;top:20px;' src='img/"+userChoice+".png' width='90' height='90'>";
    compChoice_output_div.innerHTML = "<img style='position:relative;top:20px;' src='img/"+compChoice+".png' width='90' height='90'>";
    
    console.log("Comp choose: ", compChoice);
    switch (userChoice+compChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            userScore++;
            userScore_output.innerHTML = userScore;
            userChoice_output_div.classList.add("green_glow");
            setTimeout(removeGlow,300);
            outcome.innerHTML= "You win";
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            compScore++;
            compScore_output.innerHTML = compScore;
            compChoice_output_div.classList.add("green_glow");
            setTimeout(removeGlow,300); 
            outcome.innerHTML= "Comp wins";
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            compChoice_output_div.classList.add("grey_glow");
            userChoice_output_div.classList.add("grey_glow");
            setTimeout(removeGlow,300); 
            outcome.innerHTML= "It's a draw";
            break;
    }
}