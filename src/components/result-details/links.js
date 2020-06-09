import React from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

import './links.css';

const getIcon = (url) => {
  const link = new URL(url);
  console.dir(link);
  return <FaLink />;
};

const getLabel = () => '@username1';

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
