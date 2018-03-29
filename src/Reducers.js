const initialState={
    usertext:[{
        value:"vilva",
        text:"abcd",
    }]
}

export const Selectedreducer=(state=initialState,action)=>{
    console.log('selected reducer - state',action," -", state);
    switch(action.type){
        case "SELECTED_USER":
            console.log('case selected user',action.text);
            //var newArr=state;
            // set state
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
