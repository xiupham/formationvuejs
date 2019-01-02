"use strict";

var counter = {
  value: 0,
  incr() {
    this.value++;
  },
  // équivalent à incr: function () { … }
  incrASAP: function() {
    setTimeout(() => {
      this.incr();
    }, 0);
  }
};

counter.incrASAP();
setTimeout(function() {
  console.log(counter.value);
}, 100);

/*
counter.incr();
counter["incr"]();
console.log(counter.value);

var incr = counter.incr;
var o = { value: 42 };

/* bind
var bound = incr.bind(o);
bound();
console.log(counter.value);
*/

/* call/apply
// o.bidule = incr;
// o.bidule();
incr.call(o);
console.log(o.value);
*/

/*
// mode non strict
// this === globalThis
console.log(global.value); // undefined

var incr = counter.incr;
incr();
console.log(counter.value);
console.log(global.value); // NaN
*/
