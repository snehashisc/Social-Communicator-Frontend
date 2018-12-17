import friends from '../api/friendsapis';

export const getFriends = () => (
{
  type: 'GET_FRIENDS',
  friends: friends
});

