import { createStore } from "redux";
import rootReducer from './reducer';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('Todo-APP-State-Redux');
        if (serializedState === null)
            return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('Todo-APP-State-Redux', serializedState);
    } catch (error) {
        return undefined;
    }
}
const peristedState = loadState();
//store
const store = createStore(rootReducer, peristedState);

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

export default store