import { NAME, QUEST1, QUEST2, FINISH, HISTORY} from "./types"
import axios from "axios"

export const name = (name) => dispatch => {


    dispatch({
        type: NAME,
        payload: name
    })

}


export const cricketer = (data) => dispatch => {
    dispatch({
        type: QUEST1,
        payload: data
    })
}

export const flag = (data) => dispatch => {
    dispatch({
        type: QUEST2,
        payload: data
    })
}

export const submit = ({name, question1, answer1, question2, answer2}) => async dispatch => {

    console.log(name, question1, answer1, question2, answer2);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, question1, answer1, question2, answer2 })

    await axios.post('http://localhost:5000/',body,config)

    dispatch({
        type: FINISH
    })
}

export const getHistory = ()=>async dispatch=>{
    const res = await axios.get('http://localhost:5000/')

    dispatch({
        type: HISTORY,
        payload:res.data
    })
}