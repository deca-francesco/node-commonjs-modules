// importo il contenuto dei 2 file
// quindi solo una funzione ciascuno
const getNameObj = require("./names");
const getHobbiesObj = require("./hobbies");


function getPersonNameAndHobbies() {
    // destrutturo gli oggetti che mi ritornano dalle 2 funzioni
    const {firstName, lastName} = nameObj;
    const {hobbies} = hobbiesObj;
    
    // ritorno un oggetto contenente le variabili dei risultati
    // delle altre funzioni 
    return personObj = {
        firstName,
        lastName,
        hobbies
    }
}

// richiamo le 2 funzioni
getNameObj("Ugo", "Fantocci");
getHobbiesObj("Tennis", "Calcio", "Caccia")

// richiamo la terza nel log per leggere il risultato
console.log(getPersonNameAndHobbies());


