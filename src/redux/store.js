import { createStore } from "redux";
import rootReducer from './reducer';
//store
const store = createStore(rootReducer);

export default store