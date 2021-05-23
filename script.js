
let words = 'java';

let allWords = [];

let underlineInfo = document.querySelector(".underline");
// let value = document.querySelector("#underlined-text");
// value.setAttribute("style", "border-bottom: 3px solid black;");
let buttonClicked = document.getElementById("button");

let displayInfo = document.getElementById("displayInfo");

let currentScore = document.getElementById("currentScore");

let counterUntilFinished = words.length;


for(let i=0;i<words.length;i++){
    console.log("in hereeeee");
    let newItem = document.createElement('p');
    newItem.setAttribute("style", "border-bottom: 3px solid black; padding-right: 15px; margin-right:15px");
    underlineInfo.append(newItem);
    
}

let children = underlineInfo.children;
//localStorage.clear();

let winner = false;


document.addEventListener('keydown',function(event){
    console.log("in this");
    for(let i = 0; i < words.length; i++){
        if(event.key === words.charAt(i)){
            children[i].textContent = event.key;
            children[i].setAttribute("style","border-bottom: 0px;");
            counterUntilFinished-=1;
            if(counterUntilFinished === 0){
                displayInfo.innerText = "You win congrats";
                totalWins+=1;
                localStorage.setItem("wins ",totalWins);
                winner = true;
                score();
            }
        }
       

    }


})

    buttonClicked.addEventListener('click',setTime);



    const time = document.getElementById('time');
    

    let secondsLeft = 10;

    let totalWins = 0;
    let totalLosses = 0;

    time.textContent = secondsLeft + " seconds left .";


    currentScore.innerHTML = " Total: " + totalWins + " TotaLosses  " + totalLosses;


    function score(){
        let wins = localStorage.getItem('wins');
        let losses = localStorage.getItem('losses');
        currentScore.innerHTML = "Total: " + wins  + "TotaLosses  " + losses;
    }




    function setTime() {
    // Sets interval in variable
        var timerInterval = setInterval(function() {
            
            if(winner){
                return;
            }
                        
            else{
                secondsLeft--;
                time.textContent = secondsLeft + " seconds left till colorsplosion.";

                if(secondsLeft === 0) {
                    totalLosses+=1;
                    localStorage.setItem("losses ",totalLosses);
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                alert("you lose");
                }

            }
        
    }, 1000);
    }
    
