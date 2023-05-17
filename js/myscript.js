// Do una variabile al bottone per giocare
let btnDie = document.querySelector("button.my_btn-die");

let divResult = document.querySelector("div.my_result-die");
let pResult = document.createElement("p");   

// Creo un event listener
btnDie.addEventListener("click",
    function(){
        //Creo 2 variabili - 1 per il dado del computer e uno per quello dell' utente

        let computerDie = parseInt(Math.random() * (6 - 1 + 1) + 1);
        console.log(computerDie + " Dadi Computer");
        document.getElementById("computer-die").innerHTML= parseInt(computerDie)

        let userDie = parseInt(Math.random() * (6 - 1 + 1) + 1);
        console.log(userDie + " Dadi utente");
        document.getElementById("user-die").innerHTML= parseInt(userDie)

        // chi ha il numero più alto vince
         if ( computerDie > userDie){
            console.log("Computer vince");
            pResult="Spiacente, il computer ha vinto"
        }else if( userDie > computerDie){
            console.log ("Utente vince");
            pResult="Hai Vinto"
        }else{
            console.log("E' un pareggio riprova");
            pResult="E' un pareggio"
        }
        divResult.append(pResult);
    }
);




