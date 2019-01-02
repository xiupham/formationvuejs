// map
// filter
// reduce
// find
// findIndex
// forEach



// Mapping
var b = []
for (var i = 0; i < a.length; i++) {
  b.push(transform(a[i], i, a))
}

=> a.map(transform)


// Filtering
var b = []
for (var i = 0; i < a.length; i++) {
  if (test(a[i], i, a)) {
    b.push(a[i])
  }
}

=> a.filter(test)


// Reduce
var result = initial
for (var i = 0; i < a.length; i++) {
  result = accumulator(result, a[i], i, a)
}

=> a.reduce(accumulator, initial)
