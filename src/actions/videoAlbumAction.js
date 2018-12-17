import videoAlbums from '../api/videosApi';

export const videoAlbumAction = () => (
{	
  type: 'GET_VIDEOS',
  albums: videoAlbums
});

