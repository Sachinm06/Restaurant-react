import { Action } from "@remix-run/router";
import { FAIL, SUCCESS } from "../constants/restConstants";

//reducer function 
//                state to store the payload,working action
export const restReducer = (state = { restList: [] }, action) => {

    switch (action.type) {
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return {
                restList: action.payload
            }
        default:
            return state
    }

}