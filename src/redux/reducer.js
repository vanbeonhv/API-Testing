import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO } from "./ActionConstant";

const initialState = {
  initTodos: [
    { id: 1, text: "Learn html" },
    { id: 2, text: "Learn css" },
    { id: 3, text: "Learn javascript" },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ];
      break;
    case DELETE_TODO:
      {
        return state.filter((todo) => todo.id !== action.payload);
      }
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  initTodos: reducer,
});
export default rootReducer;
