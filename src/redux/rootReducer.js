const initialState = {
  counter: 0,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
      break;
    case "MINUS": {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
      break;
  }
}
