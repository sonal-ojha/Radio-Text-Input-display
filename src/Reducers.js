const initialState={
    usertext:[{
        value:"vilva",
        text:"abcd",
    }]
}

const state1={
    STATUS:"",
   text1:[{
            status:"",
            name:"",
            emailID:"",
            PhNo:"",
            type:"",
            lat:"",
            lan:""
       }] 
}

export const thunkReducer=(state=state1,action)=>{
    switch(action.type){
        case "SUCCESS":  
            for (var i=0;i<action.text1.length;i++){
                var newArr1=state.text1
                var newObj1={
                    status:action.type,
                    name:action.text1[i].name,
                    emailID:action.text1[i].email,
                    PhNo:action.text1[i].phone,
                    type:action.text1[i].type,
                    lan:action.text1[i].lan,
                    lat:action.text1[i].lat
                }
                newArr1.push(newObj1);
            }
            return Object.assign({},state,{text1:newArr1,STATUS:action.type})
        case "FAIL":
            return Object.assign({},state,{STATUS:action.type})
        case "START":
            return Object.assign({},state,{STATUS:action.type})
        default:
            return state;
    }

}
export const Selectedreducer=(state=initialState,action)=>{
    switch(action.type){
        case "SELECTED_USER":
            console.log('case selected user',action.text);
            return Object.assign({},state,{value:action.text});
        default:
            return state;
    }
}
export const Textreducer=(state=initialState,action)=>{
    console.log('text reducer',action);
    switch(action.type){
        case "USER_ENTERED_TEXT":
            console.log('case text reduser',action.usertext);
            //var newArray=state.usertext;
            /* Need to append the SelectedUser value along with the text */
            var newArray=state.usertext;
            var newObj={value:action.usertext.selectedUser,
                        text:action.usertext.inputText
            }
            newArray.push(newObj);
           // newArray.push(action.usertext.inputText);
            return Object.assign({},state,{usertext:newArray});
        default:
            return state; 
    }
}
