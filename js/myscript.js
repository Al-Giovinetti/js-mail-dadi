//Creo 2 variabili - 1 per il dado del computer e uno per quello dell' utente

let computerDie = parseInt(Math.random() * (6 - 1 + 1) + 1)
    console.log(computerDie + " Dadi Computer")

let userDie = parseInt(Math.random() * (6 - 1 + 1) + 1)
    console.log(userDie + " Dadi utente")

// chi ha il numero più alto vince

if ( computerDie > userDie){
    console.log("Computer vince")
}else if( userDie > computerDie){
    console.log ("Utente vince")
}else{
    console.log("E' un pareggio riprova")
}
