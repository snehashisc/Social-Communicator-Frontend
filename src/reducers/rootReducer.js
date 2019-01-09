import { combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './loginReducer';
import aboutReducer from './aboutReducer';
import photoAlbumReducer from './photoAlbumReducer';
import friendsReducer from './friendsReducer';
import videoAlbumReducer from './videoAlbumReducer';

const rootReducer = combineReducers({
  form : formReducer,  
  loginReducer,
  aboutReducer,
  friendsReducer,
  photoAlbumReducer,
  videoAlbumReducer
});

export default rootReducer;
