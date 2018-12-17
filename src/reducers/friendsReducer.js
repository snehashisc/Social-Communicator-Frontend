const friendsReducer = (state = {}, action) => {

    switch (action.type) {
      case 'GET_FRIENDS':
       console.log("In reducer", action);		
        return action.friends;
      default:
        return state;
    }
  };
  
  export default friendsReducer;