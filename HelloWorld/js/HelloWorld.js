/**
 * Created by Jaap on 24-10-2014.
 */

// Opdracht 1 a t/m c
function helloWorld() {
    return "Hallo Wereld, mijn eerste javascript functie";
}
console.log(helloWorld());

// Opdracht1 d t/m f
function mijnNaam() {
    var mij;
    mij = {
        voorNaam : "Jaap",
        achterNaam : "van de Belt"
    };
    return "Mijn naam is: " + mij.voorNaam + " " + mij.achterNaam;
}
console.log("Opdracht 1");
console.log(mijnNaam());

// Opdracht 2 Expressies
function opdracht2() {
    var x = '1';
    var y = 1;
    console.log(x + y); // Dit geeft 11 als uitvoer
    console.log(x * y); // Dit geeft 1 als uitvoer
    console.log(x == y); // Dit geeft true als uitvoer
    console.log(x ? 2 : 3); // Dit geeft 2 als uitvoer want x = true
    console.log(!y ? 2 : 3); // Dit geeft 3 als uitvoer want !y = false

    return "Variabele expressies gedaan"
}
console.log("Opdracht 2");
console.log(opdracht2());

// Opdracht 3 array's contains
function opdracht3Contains(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}
console.log("'3' zit wel in deze array " +
"resultaat van opdracht3Contains is: " +
opdracht3Contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// Opdracht 3 array's toevoegen als nog niet bestaat
function opdracht3Add(array, item) {

    console.log("Array inhoud voor toevoegen: " + array);

    if (!opdracht3Contains(array,item)) {
        array.push(item);
        return array;
    }
    return item + " is niet toegevoegd. bestond al";
}
console.log("Opdracht 3a");
console.log("Array inhoud na toevoegen: " +
            opdracht3Add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log("Array inhoud na toevoegen: " +
opdracht3Add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Opdracht 3 array's verwijder meegegeven item
function opdracht3Remove(array, item) {

    console.log("Array inhoud voor verwijderen: " + array);

    if (opdracht3Contains(array,item)) {
        for(var i = array.length; i--;) {
            if(array[i] == item) {
                array.splice(i, 1);
                return array;
            }
        }
    }
    return item + " is niet verwijderd. bestond bestond niet";
}
console.log("Opdracht 3b");
console.log("Array inhoud na verwijderen: " +
opdracht3Remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log("Array inhoud na verwijderen: " +
opdracht3Remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Opdracht 3 array's Sommeer de inhoud van de array
function opdracht3Sum(array) {

    var totaal = 0;

    console.log("De volgende getallen worden getotaliseerd: " + array);

    for (var i = 0; i < array.length; i++) {
        totaal += array[i];
    }

    return totaal;
}
console.log("Opdracht 3c");
console.log("Totaal van de getallen : " +
opdracht3Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Totaal van de Getallen : " +
opdracht3Sum([15, 2, 53, 4, 102, 66, 77, 81, 19, 100]));


// Opdracht 4a Berekenen Celsius naar Fahrenheit en andersom
function opdrachtCelciusNaarFahrenheit(gradenCelcius) {

    var gradenFahrenheit = 0;
    gradenFahrenheit = gradenCelcius * 9/5 + 32;

    console.log(gradenCelcius + " graden Celcius is " + gradenFahrenheit + " graden Fahrenheit");
}
function opdrachtFahrenheitNaarCelcius(gradenFahrenheit) {

    var gradenCelcius = 0;
    gradenCelcius = (gradenFahrenheit -32) * 5/9;

    console.log(gradenFahrenheit + " graden Fahrenheit is " + gradenCelcius + " graden Celcius");
}

console.log("Opdracht 4a");
opdrachtCelciusNaarFahrenheit(20);
opdrachtFahrenheitNaarCelcius(68);


// Opdracht 4b Sommeer de meegegeven parameters
function opdracht4Sum() {

    var totaal = 0;

    for (var i = 0; i < arguments.length; i++) {
        totaal += arguments[i];
    }

    return totaal;
}
console.log("Opdracht 4b");
console.log("Totaal van de getallen : " +
opdracht4Sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log("Totaal van de Getallen : " +
opdracht4Sum(15, 2, 53, 4, 102, 66, 77, 8, 19, 100));


// Opdracht 4c tellen en tonen van letters in een woord
function opdracht4LetterCount(invoer) {

    var totaal = 0;
    var letters = [];
//    var invoer = "onmiddelijk";

    console.log(invoer);
    for (var i = 0; i < invoer.length; i++) {
        console.log(invoer.charAt(i));
        letters[invoer.charAt(i)] += 1;
//        console.log(letters);
        console.log(letters[invoer.charAt(i)]);
    }

    for (var j = 0; j < letters.length; j++) {
        console.log(letters.charAt(j) + ": " + letters[j])
    }

    return totaal;
}
opdracht4LetterCount("onmiddelijk");

