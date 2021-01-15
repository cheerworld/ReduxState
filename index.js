function createStore () {
  //The store should have 4 parts
  //1. The state
  //2. Get the state
  //3. Listen to changes on the state
  //4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  }

  return {
    getState,
    subscribe,
  }

}
//console.log(createStore())

const store = createStore();

store.subscribe(() => {
  console.log("The new state is: ", store.getState());
})
//Store.subscribe():
//It is a function
//When called, it is passed a single function
//It returns a function

const unsubscribe = store.subscribe(() => {
  console.log("The store changed.");
});

unsubscribe();
