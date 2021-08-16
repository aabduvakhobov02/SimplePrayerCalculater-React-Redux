import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, ref } = bindActionCreators(actions, dispatch);

document.querySelector("#inc").addEventListener("click", inc);
document.querySelector("#dec").addEventListener("click", dec);
document.querySelector("#ref").addEventListener("click", ref);

const update = () => {
  document.querySelector("#counter").textContent = store.getState();
};
store.subscribe(update);
