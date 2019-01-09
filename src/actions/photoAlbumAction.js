import photoAlbums from '../api/photosApis';

export const photoAlbumAction = () => ({
  type: 'GET_ALBUMS',
  albums: photoAlbums
});
