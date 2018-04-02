import Axios from "axios";

export const showSelectedUser=(value) =>{
    console.log('actions',value);
    return(
        {
            type:"SELECTED_USER",
            text:value
        }
    )
}

export const UserEnteredText=(list)=>{
    console.log('actions- user: checking',list);
    return(
        {
            type:"USER_ENTERED_TEXT",
            usertext:list
        }
    )
}

export const startedActionCreator=()=>{
    return(
        {
            type:"START"            
        }
    )
}
export const successActionCreator=(data)=>{
    return(
        {
            type:"SUCCESS",
            text1: data        
        }
    )
}
export const FailureActionCreator=()=>{
    return(
        {
            type:"FAIL"            
        }
    )
}

export const ThunkActionCreator=()=>{

    return function(dispatch){
        dispatch(startedActionCreator())
        return Axios.get("http://5ab776ff3ddb860014f13ecb.mockapi.io/students").then(
            function (data){
                console.log(data.data);
                dispatch(successActionCreator(data.data))
            }
        ).catch(
            function(error){
                    console.log(error);
                    dispatch(FailureActionCreator())
            }
        )
    }

}

export default (showSelectedUser,UserEnteredText);
