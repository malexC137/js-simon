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
var nNumbers = 5;

//creo una funzione che mi generi un'array di n numeri random
function getRandomNumbers (arr, num) {
    for (var i = 0; i < num; i++) {
        generatedNum = Math.floor(Math.random() * (100 - 1) + 1);
        arr.push(generatedNum);
    }
    return arr
}

var generatedNumbers = getRandomNumbers(computerNumbers, nNumbers);

// console.log(generatedNumbers);


//Creo una funzione che compari la lunghezza ed il contenuto delle due array, ossia quella dei numeri generati 
//dal computer e quella dei numeri inseriti dall'utente
/*function isArrayEqual(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            var c = []
            c.push(b[i])
            return alert("Hai indovinato " + c.length + " numeri, che sono: " + [i]) 
        } 
        if (a.length != b.length) {
            return alert("Non hai inserito tutti i numeri")
        } 
    }

    return alert("I numeri inseriti sono uguali")
}*/

var myNumbers = [1, 2, 3, 3, 15, 28, 34, 98, 90];
var userNumbers = [1, 2, 3, 4, 15, 15, 28, 34, 90];
var myArr = [];

// var myArrays = isArrayEqual(myNumbers, userNumbers, myArr);

// console.log(myArrays);

for (var i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === userNumbers[i]) {
        myArr.push(userNumbers[i])
    } 
}

console.log("Hai indovinato " + myArr.length + " numeri, che sono: " + myArr) 


// if (a[i] != b[i]) {
//     return alert("I numeri non sono uguali")
// } 