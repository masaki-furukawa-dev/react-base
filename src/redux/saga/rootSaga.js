import { takeEvery, put, call, all } from 'redux-saga/effects';

const saga = [];

export default function* rootSaga(){
    yield all([...saga]);
}
