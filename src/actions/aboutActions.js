import about from '../api/aboutapis';

export const getAbout = () => ({
  type: 'GET_ABOUT',
  about: about
});

