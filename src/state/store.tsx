import { createStore } from "redux";
import allReducers from "../state/reducers/allReducers";

const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()));

export default store;
