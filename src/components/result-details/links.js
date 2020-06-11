import React from 'react';
import PropTypes from 'prop-types';
import parseUrl from '../../util/parseUrl';

import './links.css';

function Links({ urls }) {
  const elements = urls.map((url) => {
    // Look up the icon and label for this URL
    const [icon, label] = parseUrl(url);

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
