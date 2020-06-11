import React from 'react';
import PropTypes from 'prop-types';
import { FaLink, FaTwitter, FaReddit, FaFacebookF } from 'react-icons/fa';

import './links.css';

const getData = (url) => {
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

function Links({ urls }) {
  const elements = urls.map((url) => {
    // Look up the icon and label for this URL
    const [icon, label] = getData(url);

    return (
      <a key={url} href={url} target="_blank" rel="noopener noreferrer">
        {icon}
        <span>{label}</span>
      </a>
    );
  });

  return <div className="links">{elements}</div>;
}

Links.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string),
};

Links.defaultProps = {
  urls: [],
};

export default Links;
