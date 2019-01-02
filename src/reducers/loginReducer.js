const loginReducer = (state = {"isAuthenticated" : false}, action) => {

    console.log ("Printing login ACTION AND TYPE", action);
    switch (action.type) {
        case 'LOGIN_INIT':
            console.log ("initialize......", action.loginCred);
            return action.loginCred;
        case 'LOGIN':
            const newState = {...state};
            if (action.cred.username === "admin" && action.cred.password === "abcd") {
                newState.isAuthenticated = true;
            }
            newState.submitted = true;
            console.log("In reducer login", newState);		
            return newState;
        default:
            return state;
        }
  };
  
  export default loginReducer;