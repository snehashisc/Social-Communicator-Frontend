const videoAlbumReducer = (state = {}, action) => {

    switch (action.type) {
      case 'GET_VIDEOS':
       console.log("In reducer", action);		
        return action.albums;
      default:
        return state;
    }
  };
  
  export default videoAlbumReducer;