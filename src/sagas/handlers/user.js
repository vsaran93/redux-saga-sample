import { call, put, takeLeading } from 'redux-saga/effects';
import { requestGetUser } from '../requests/user';
import { setUser, getUser } from '../../reducers/userSlice';


export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data));
    } catch (e) {
        console.log(e);
    }
}

export function* watchHandleGetUser() {
    yield takeLeading(getUser.type, handleGetUser);
}