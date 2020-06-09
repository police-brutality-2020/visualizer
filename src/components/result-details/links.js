import React from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

import './links.css';

function Links({ urls }) {
  const elements = urls.map((url) => (
    <a href={url} target="_blank" rel="noreferrer">
      <FaLink />
      <span>@username1</span>
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
