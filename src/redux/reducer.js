import {ADD_NOTE, GET_SINGLE_NOTE_FAIL, GET_SINGLE_NOTE_REQ, GET_SINGLE_NOTE_SUCCESS, HIDE_MODAL, SUBMIT_NOTE_FAIL, SUBMIT_NOTE_REQ, SUBMIT_NOTE_SUCCESS} from './action';


const initialState = {
    email: '',
    data:[],
    isHide: true,
    url: '',
    isUrl: false,
    noteDetails: null,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_NOTE:
            return {
                ...state,
                isHide: false,
                email: payload
            }
        case HIDE_MODAL:
            return {
                ...state,
                isHide: true,
                isUrl: false,
            }
        case SUBMIT_NOTE_REQ:
            return {
                ...state,
                isLoading: true
            }
        case SUBMIT_NOTE_SUCCESS:
        return {
            ...state,
            isHide: true,
            isLoading: false,
            isUrl: true,
            url: payload,
        }
        case SUBMIT_NOTE_FAIL:
        return {
            ...state,
            isHide: true,
            isLoading: false
        }
        case GET_SINGLE_NOTE_REQ:
            return {
                ...state,
                isLoading: true
            }
        case GET_SINGLE_NOTE_SUCCESS:
        return {
            ...state,
            isLoading: false,
            noteDetails: payload,
        }
        case GET_SINGLE_NOTE_FAIL:
        return {
            ...state,
            isLoading: false
        }
        default:
            return state
    }
}

export default reducer;