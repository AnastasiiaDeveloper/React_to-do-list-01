const redux = require("redux");

const initialState = {
  counter: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
      break;
    case "MINUS": {
      return { ...state, counter: state.counter - 50 };
    }
    case "CUSTOM": {
      return { ...state, counter: state.counter + action.num };
    }
    default:
      return state;
      break;
  }
};

// store
const store = redux.createStore(reducer);
console.log(store.getState());

// actions
const addCounter = {
  type: "ADD",
};

store.dispatch(addCounter);
console.log(store.getState());
store.dispatch({ type: "MINUS" });
console.log(store.getState());
store.dispatch({ type: "CUSTOM", num: 20 });
console.log(store.getState());
