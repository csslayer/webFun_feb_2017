"use strict";

var arrGiven = ["James", 'Jill',  4];
var symbol = "::";
var reversed = !0;

fancyArray(arrGiven, symbol, reversed);

function fancyArray(arr, sym, rev) {
    var i;
    if (!reversed) {
        for (i=0; i<arr.length; i++) {
            console.log(i, "->" ,arr[i]);
            console.log(i + " " + sym + " " + arr[i]);
        }
    } else {
        for (i=arr.length-1; i>=0; i--) {
            console.log(i, "->", arr);
            console.log(i + " " + sym + " " + arr);
        }
    }
}


console.log( (10) % (-3) );
