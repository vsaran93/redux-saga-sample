import { all } from 'redux-saga/effects';
import { watchHandleGetUser } from '../sagas/handlers/user';

export function* watcherSaga() {
    yield all([
        watchHandleGetUser()
    ])
}