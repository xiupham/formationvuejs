"use strict";

function testHoisting1() {
  if (true) {
    var toto = "tata";
  }
  var machin = "bidule";
}

// équivalent à:
function testHoisting2() {
  var toto;
  var machin;

  console.log(toto);

  if (true) {
    toto = "tata";
  }
  machin = "bidule";
}

// let/const

// console.log(machin) => ReferenceError
if (true) {
  let toto = "tata";
}
// console.log(toto) => ReferenceError
let machin = "bidule";

const x = 42;
x = 33;

const o = { champ: "valeur" };
o.champ = "autre valeur";
console.log(o); // { champ: 'autre valeur' }

const o = Object.freeze({ champ: "valeur" });
o.champ = "autre valeur"; // TypeError
console.log(o);
