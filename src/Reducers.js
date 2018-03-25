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
export const Textreducer=(state={userText:["abcd","efgh"]},action)=>{
    console.log('text reducer',action);
    switch(action.type){
        case "USER_ENTERED_TEXT":
            console.log('case text reduser',action.text);
            return Object.assign({},state,state.userText.push(action.userText));
        default:
            return state;
    }
}
