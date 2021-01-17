import {combineReducers} from 'redux';
import counter, {counterSaga} from './counter';
import {all} from 'redux-saga/effects';
import todos from './todos';
import sample from './sample';
import loading from './loading'
const rootReducer = combineReducers({
    counter,
    todos,
    sample,
    loading
});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;