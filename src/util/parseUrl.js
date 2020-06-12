import React from 'react';
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLink,
  FaNewspaper,
  FaReddit,
  FaTwitter,
  FaVideo,
  FaYoutube,
} from 'react-icons/fa';

const parseUrl = (link) => {
  const domain = link.hostname.match(/[^.]+\.\w+$/);

  switch (domain[0]) {
    case 'cnn.com':
    case 'cbslocal.com':
    case 'denverpost.com':
    case 'miamiherald.com':
    case 'nytimes.com':
    case 'theguardian.com':
    case 'wapo.st':
      return [<FaNewspaper />, link.hostname];
    case 'fbcdn.net':
    case 'facebook.com':
      return [<FaFacebookF />, link.hostname];
    case 'google.ca':
    case 'google.com':
      return [<FaGoogle />, link.hostname];
    case 'instagram.com':
      return [<FaInstagram />, link.hostname];
    case 'redd.it':
    case 'reddit.com':
      // 'r/subreddit'
      return [<FaReddit />, link.pathname.match(/r\/[^/]+/)[0]];
    case 'tiktok.com':
      return [<FaVideo />, link.pathname.match(/@\w+/)[0]];
    case 'twitter.com':
      // '@username'
      return [<FaTwitter />, `@${link.pathname.match(/([^/]+)/)[1]}`];
    case 'youtu.be':
    case 'youtube.com':
      return [<FaYoutube />, link.hostname];
    default:
      return [<FaLink />, link.hostname];
  }
};

const tryParseUrl = (url) => {
  const link = new URL(url);
  try {
    return parseUrl(link);
  } catch (e) {
    return [<FaLink />, link.hostname];
  }
};

export default tryParseUrl;
