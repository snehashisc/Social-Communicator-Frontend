const aboutReducer = (state = {}, action) => {

  switch (action.type) {
    case 'GET_ABOUT':
     console.log("In reducer", action);		
      return action.about;
    default:
      return state;
  }
};

export default aboutReducer;