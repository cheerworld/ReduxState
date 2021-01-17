//Library code
function createStore (reducer) {
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

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener=>listener())
  }

  return {
    getState,
    subscribe,
    dispatch,
  }

}

//App code
function todos (state=[], action) {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
  }
  return state;
}


//console.log(createStore())

const store = createStore(todos);

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



store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false,
  }
})

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Read a book",
    complete: true,
  }
})

unsubscribe();
