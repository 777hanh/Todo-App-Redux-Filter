import {combineReducers} from 'redux';
import filterReducer from './filter';
import todoListReducer from './todo'


const rootReducer = combineReducers({
    filter: filterReducer,
    todo: todoListReducer,
})

export default rootReducer