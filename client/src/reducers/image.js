import {  GET_POST, PROFILE_ERROR } from "../actions/types"

const initialState = {
    filename: null,
    error: null
}


export default function imageReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case GET_POST:
            return{
                ...state,
                filename: payload
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: payload
            }
        default:
            return state
    }
} 
