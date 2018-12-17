import { combineReducers} from 'redux';
import aboutReducer from './aboutReducer';
import photoAlbumReducer from './photoAlbumReducer';
import friendsReducer from './friendsReducer';
import videoAlbumReducer from './videoAlbumReducer';

const rootReducer = combineReducers({
  aboutReducer,
  friendsReducer,
  photoAlbumReducer,
  videoAlbumReducer
});

export default rootReducer;
