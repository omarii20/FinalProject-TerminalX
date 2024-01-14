interface UserInfoRequest{
    input:{
        firstname: string,
        
    }
}

const setUserInfoRequest=(firstName:string)=>{
    return{
        input: {
            firstname: firstName,
        },
    };
    
    }

export{
    UserInfoRequest,setUserInfoRequest
}