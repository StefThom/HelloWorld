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
console.log(opdracht2());

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

function opdracht3Add(array, item) {

    console.log("Array inhoud voor toevoegen: " + array);

    if (!opdracht3Contains(array,item)) {
        array.push(item);
        return array;
    }
    return item + " is niet toegevoegd. bestond al";
}
console.log("Array inhoud na toevoegen: " +
            opdracht3Add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log("Array inhoud na toevoegen: " +
opdracht3Add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

