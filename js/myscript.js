// Do una variabile al bottone per giocare
let btnDie = document.querySelector("button.my_btn-die");

let divResult = document.querySelector("div.my_result-die");
let pResult = document.createElement("p");   

// Creo un event listener
btnDie.addEventListener("click",
    function(){

        pResult=0

        //Creo 2 variabili - 1 per il dado del computer e uno per quello dell' utente
        let computerDie = parseInt(Math.random() * (6 - 1 + 1) + 1);
        document.getElementById("computer-die").innerHTML= parseInt(computerDie)

        let userDie = parseInt(Math.random() * (6 - 1 + 1) + 1);
        document.getElementById("user-die").innerHTML= parseInt(userDie)

        // chi ha il numero più alto vince
         if ( computerDie > userDie){
            //console.log("Computer vince");
            pResult="Spiacente, il computer ha vinto"
        }else if( userDie > computerDie){
            //console.log ("Utente vince");
            pResult="Hai Vinto"
        }else{
            //console.log("E' un pareggio riprova");
            pResult="E' un pareggio"
        }
        divResult.innerHTML=pResult;
    }
);

// Es Arrey

const mailArrey = ["ale@gmail.com","dino@gmail.com","gino@gmail.com","pino@gmail.com"];

let mailAccepted;

const btnLogin = document.querySelector("button.my_btn-login")

btnLogin.addEventListener("click",
    function(){
        let inputMail
        let contatore=0

        for(index = 0; index < mailArrey.length;index++){

             inputMail = document.getElementById("email-ok");

            if(inputMail.value == mailArrey[index]){
                mailAccepted = true
                contatore=1
            }else{
                mailAccepted = false
            }
        }
        if(contatore == 1 ){
            document.getElementById("mail-result").innerHTML="mail valida";
            document.getElementById("mail-result").classList.add("text-success")  
        }else{
            document.getElementById("mail-result").innerHTML="mail non valida";
            inputMail.value=""
            document.getElementById("mail-result").classList.add("text-danger")

        }
    }
);    







