const photoAlbumReducer = (state = {}, action) => {

    switch (action.type) {
      case 'GET_ALBUMS':
       console.log("In reducer", action);		
        return action.albums;
      default:
        return state;
    }
  };
  
  export default photoAlbumReducer;