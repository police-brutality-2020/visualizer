import React from 'react';
import PropTypes from 'prop-types';
import { FaLink, FaTwitter, FaReddit, FaFacebookF } from 'react-icons/fa';

import './links.css';

const getIcon = (url) => {
  const link = new URL(url);

  switch (link.host) {
    case 'twitter.com':
      return <FaTwitter />;
    case 'www.reddit.com':
      return <FaReddit />;
    case 'www.facebook.com':
      return <FaFacebookF />;
    default:
      return <FaLink />;
  }
};

const getLabel = (url) => {
  const link = new URL(url);
  switch (link.host) {
    case 'twitter.com':
      // '@username'
      return `@${link.pathname.match(/([^/]+)/)[1]}`;
    case 'www.reddit.com':
      // 'r/subreddit'
      return link.pathname.match(/r\/[^/]+/)[0];
    default:
      return link.hostname;
  }
};

function Links({ urls }) {
  const elements = urls.map((url) => (
    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
      {getIcon(url)}
      <span>{getLabel(url)}</span>
    </a>
  ));

  return <div className="links">{elements}</div>;
}

Links.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string),
};

Links.defaultProps = {
  urls: [],
};

export default Links;
