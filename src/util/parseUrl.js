import React from 'react';
import { FaTwitter, FaReddit, FaFacebookF, FaLink } from 'react-icons/fa';

const parseUrl = (url) => {
  const link = new URL(url);
  const domain = link.hostname.match(/[^.]+\.\w+$/);

  switch (domain[0]) {
    case 'twitter.com':
      // '@username'
      return [<FaTwitter />, `@${link.pathname.match(/([^/]+)/)[1]}`];
    case 'reddit.com':
      // 'r/subreddit'
      return [<FaReddit />, link.pathname.match(/r\/[^/]+/)[0]];
    case 'facebook.com':
      return [<FaFacebookF />, link.hostname];
    default:
      return [<FaLink />, link.hostname];
  }
};

export default parseUrl;
