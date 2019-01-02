Promise

promise :: Promise<input>
promise.then(f :: input => output) :: Promise<output>
promise.catch(f :: error => output) :: Promise<output>

Promise.all([ promise1, promise2, ... ]) :: Promise<[value1, value2, ...]>
Promise.race([ promise1, promise2, ... ]) :: Promise<value1 | value2 | ...]>

Promise.resolve(value)
Promise.reject(error)

new Promise((resolve, reject) => {
  resolve(value)
  // or reject(error)
})


/* Convert old callback-based APIs:

function getItemsAsPromised() {
  return new Promise((resolve, reject) => { // EXECUTOR
    getItems({
      success: items => resolve(items),
      error: err => reject(err)
    });
  });
}

function getItems({ success, error }) {
  ... si ça se passe bien:
  success(items)
  ... si ça se passe mal:
  error(err)
}
*/


$.get("/cats") // Promise<cats>
  .then(cats => {
    const promises = cats.map(cat => {
      if (cat.fed) {
        return;
      }
      return $.get(`/catfoods/${cat.age}`) // Promise<food>
        .then(food => $.post(`/cats/${cat.id}`, { fed: food })); // Promise<updated cat>
    }); // Array<Promise<updated cat>>
    return Promise.all(promises); // Promise<Array<updated cat>>
  }) // Promise<Array<updated cat>>
  .catch(err => {
    alert(err);
  });
