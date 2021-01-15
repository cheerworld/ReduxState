function createStore () {
  //The store should have 4 parts
  //1. The state
  //2. Get the state
  //3. Listen to changes on the state
  //4. Update the state

  let state = 2;

  const getState = () => state;

  return {
    getState
  }
}

console.log(createStore().getState())
