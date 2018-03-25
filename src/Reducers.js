export const Selectedreducer=(state={value:"vilva"},action)=>{
    console.log('selected reducer',action);
    switch(action.type){
        case "SELECTED_USER":
            console.log('case selected user',action.text);
            return Object.assign({},state,{value:action.text});
        default:
            return state;
    }
}
export const Textreducer=(state={usertext:["abcd"]},action)=>{
    console.log('text reducer',action);
    switch(action.type){
        case "USER_ENTERED_TEXT":
            console.log('case text reduser',action.usertext);
            var newArray=state.usertext;
            /* Need to append the SelectedUser value along with the text */

            newArray.push(action.usertext);
            return Object.assign({},state,{usertext:newArray});
        default:
            return state;
    }
}
