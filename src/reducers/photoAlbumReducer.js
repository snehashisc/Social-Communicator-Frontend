const photoAlbumReducer = (state = {}, action) => {

    switch (action.type) {
      case 'GET_ALBUMS':		
        return action.albums;
      case 'INCREASE_ALBUM_LIKES':
        const newState = {...state};
        
        if (newState.albums[action.id].socialStatus.likeStatus) {
          newState.albums[action.id].socialStatus.likes -= action.value;
          newState.albums[action.id].socialStatus.likeStatus =  false;
        }
        else {
          newState.albums[action.id].socialStatus.likes += action.value;
          newState.albums[action.id].socialStatus.likeStatus =  true;
        }
        
        return newState;
      case 'DECREASE_ALBUM_LIKES':
        const newState1 = {...state};
        newState1.albums[action.id].socialStatus.likes -= action.value;
        return newState1;    
      default:
        return state;
    }
  };
  
  export default photoAlbumReducer;