import axios from "axios";

export default function GetUser(dispatch, getState){
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    if(token){
        // just like in postman
        config.headers["Authorization"] = `Token ${token}`; 
    }
    axios.get("/account/api/auth/user",config)
    .then(res=> {
        dispatch({
            userStatus: "USER_LOADED",
            payload: res.data
        });
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}