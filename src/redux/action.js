import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SUBMIT_NOTE_REQ = 'SUBMIT_NOTE_REQ'
export const SUBMIT_NOTE_SUCCESS = 'SUBMIT_NOTE_SUCCESS'
export const SUBMIT_NOTE_FAIL = 'SUBMIT_NOTE_FAIL'
export const GET_SINGLE_NOTE_REQ = 'GET_SINGLE_NOTE_REQ'
export const GET_SINGLE_NOTE_SUCCESS = 'GET_SINGLE_NOTE_SUCCESS'
export const GET_SINGLE_NOTE_FAIL = 'GET_SINGLE_NOTE_FAIL'


export const addNote = (payload) => ({
    type: ADD_NOTE,
    payload
})

export const hideModal = (payload) => ({
    type: HIDE_MODAL,
    payload
})

export const submitNote = (payload) => dispatch =>  {
    dispatch(submitNoteReq());
    axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5001/api/v1/note',
        data: payload
    })
    .then(res => {
        dispatch(submitNoteSuccess(res.data.url))
    }).catch(err => {
        dispatch(submitNoteFail())
    })
}

export const submitNoteReq = (payload) => ({
    type: SUBMIT_NOTE_REQ,
    payload
})
export const submitNoteSuccess = (payload) => ({
    type: SUBMIT_NOTE_SUCCESS,
    payload
})
export const submitNoteFail = (payload) => ({
    type: SUBMIT_NOTE_FAIL,
    payload
})


// <----------- Get Single Note ------------>

export const getSingleNote = (payload) => dispatch => {
    dispatch(getSingleNoteReq())
    axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `http://localhost:5001/api/v1/note/${payload}`,
    })
    .then(res => {
        dispatch(getSingleNoteSuccess(res.data.data))
    }).catch(err => {
        dispatch(getSingleNoteFail())
    })
}


export const getSingleNoteReq = (payload) => ({
    type: GET_SINGLE_NOTE_REQ,
    payload
})
export const getSingleNoteSuccess = (payload) => ({
    type: GET_SINGLE_NOTE_SUCCESS,
    payload
})
export const getSingleNoteFail = (payload) => ({
    type: GET_SINGLE_NOTE_FAIL,
    payload
})
