function toto (options = {}) {
  let readable = options.readable
  let onError = options.onError
  let onSuccess = options.onSuccess
  let value = options.defaultValue
  if (onError === undefined) {
    onError = () => {}
  }
  …


  let {readable, onError, onSuccess, defaultValue: value} = options
  if (onError === undefined) {
    onError = () => {}
  }
  …

  let {readable, onError = () => {}, onSuccess, defaultValue: value} = options
}


array = [1, 2, 3, 4, 5, 6]
let [a, b, c] = array // a = 1, b = 2, c = 3


// IDE-friendly
function ultimate ({
  readable,
  onError = () => {},
  onSuccess,
  defaultValue: value
} = {}) {

}


// Shorthand properties
const x = 1
const y = 2
const toto = "tata"

const o = {
  x,
  y,
  toto,
  machin: 'bidule',
}
