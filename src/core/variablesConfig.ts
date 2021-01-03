export const jwt = 'jwt';

export const defaultAvatar = () => {
  const avatars = [
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_icon_149311.png',
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_icon_149313.png',
  ];

  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max));

  return avatars[getRandomInt(avatars.length)];
};

export const apiRoutes: Record<string, string> = {
  login: '/user/login',
  product: '/product',
};
