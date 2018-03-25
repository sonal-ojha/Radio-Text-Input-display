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

export default (showSelectedUser,UserEnteredText);
