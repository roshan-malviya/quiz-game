import { FINISH, HISTORY, NAME,QUEST1,QUEST2 } from "../actions/types";

const initialState = {
    name:null,
    quest1:null,
    quest2:null,
    history:null,
    isuploaded:null

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){

    const {type,payload}=action;

    // eslint-disable-next-line default-case
    // console.log(action,"in reducer");

    switch(type){

        case NAME:
            return{
                ...state,
                name:payload
            }
        case QUEST1:
            console.log(payload);
            return{
                ...state,
                quest1:payload,
                isuploaded:null
            }
        case QUEST2:
            return{
                ...state,
                quest2:payload
            }
        case FINISH:
            return{
                ...state,
                isuploaded:true,
                name:null,
                quest1:null,
                quest2:null
            }
        case HISTORY:
            return{
                ...state,
                history:payload

            }
         default:
             return state
    }


}