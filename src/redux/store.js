import { combineReducers, createStore } from "redux";

let form = (
  state = {
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "less than 500$",
  },
  action
) => {
  if (
    action.type === "name" ||
    action.type === "age" ||
    action.type === "phone" ||
    action.type === "salary" ||
    action.type === "employee"
  )
    return { ...state, [action.type]: action.value };
  else return state;
};
let displayModale = (state = false, action) => {
  if (action.type === "display") return action.value;
  else return state;
};
let error = (state = false, action) => {
  if (action.type === "error") return action.value;
  else return state;
};
let tree = combineReducers({
  form: form,
  displayModale: displayModale,
  error: error,
});
export let store = createStore(tree);
