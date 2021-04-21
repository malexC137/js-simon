/*Un alert() espone 5 numeri generati casualmente.

Da li parte un timer di 30 secondi.

Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

var computerNumbers = [];
var userNumbers = [];
var nNumbers = 5;
var newArr = [];


//creo una funzione che mi generi un'array di n numeri random
function getRandomNumbers(arr, num) {
    for (var i = 0; i < num; i++) {
        generatedNum = Math.floor(Math.random() * (100 - 1) + 1);
        arr.push(generatedNum);
    }
    return arr
}

var computerNumbers = getRandomNumbers(computerNumbers, nNumbers);
alert("Tieni bene a mente questi numeri: " + computerNumbers);

//Imposto una timing function per stabilire quanto tempo l'utente avrà a disposizione per memorizzare i numeri
var wait = setTimeout(function () {
    //Creo un ciclo for per il numero di volte in cui l'utente dovrà inserire un numero
    for (var i = 0; i < nNumbers; i++) {
        var userNumber = parseInt(prompt("Ti ricordi quali erano i numeri?"));
        userNumbers.push(userNumber);
        if (isNaN(userNumber)) {
            alert("Sono ammessi solo numeri");
            parseInt(prompt("Ti ricordi quali erano i numeri?"))
        }
    }

    //Controllo che i numeri digitati dall'utente corrispondano interamente o 
    //parzialmente a quelli generati dal computer
    for (var i = 0; i < userNumbers.length; i++) {
        if (computerNumbers.indexOf(userNumbers[i]) != -1) {
            newArr.push(userNumbers[i]);
        }
    }
    //Stabilisco in base alle condizioni che si verificheranno, quali informazioni fornire all'utente
    if (newArr.length === nNumbers) {
        alert("Complimenti, hai indovinato tutti i numeri!")
    } else if (newArr.length === 0) {
        alert("Purtroppo non hai indovinato neanche un numero.")
    } else {
        alert("Hai indovinato " + newArr.length + " numeri, che sono: " + newArr);
    }
//La durata della timing function
}, 5000);
