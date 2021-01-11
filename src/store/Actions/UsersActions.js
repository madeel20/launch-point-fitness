import {getCollectionByField} from "../../firebase/helpers";
import Users from "../Constants/Users";
import {convertToArray} from "../../utils/helpers";
import { auth } from "../../firebase";
export const getUserData = (data,CB) => async (dispatch) => {
    dispatch({type:Users.GET_USER_DATA,payload:{ loading:true }})
     await getCollectionByField('users','email',auth.currentUser.email).then(res=>{
        dispatch({type:Users.GET_USER_DATA,payload:{loading:false, data:convertToArray(res)[0] }});
        CB && CB(); })
        .catch((error) => {
            console.log(error);
            dispatch({ type: Users.GET_USER_DATA, loading: false });
        });
};