import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

function* addBirthday(action) {
    try {
        const newBirthday = action.payload
        const response = yield axios.get(`/api/addBirthday/${newBirthday}`)
        console.log(response.data)
    } catch(err) {
        console.log(err)
    }
}

function* birthdaySaga() {
    yield takeEvery('ADD_NEW_BIRTHDAY', addBirthday)
}