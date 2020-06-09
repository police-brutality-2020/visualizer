import React from 'react';
import { FaTwitter, FaReddit, FaLink } from 'react-icons/fa';

import './links.css';

function Links() {
  return (
    <div className="links">
      <a href="http://www.google.ca" target="_blank" rel="noreferrer">
        <FaTwitter />
        <span>@username1</span>
      </a>
      <a href="http://www.google.ca" target="_blank" rel="noreferrer">
        <FaReddit />
        <span>u/username2</span>
      </a>
      <a href="http://www.google.ca" target="_blank" rel="noreferrer">
        <FaLink />
        <span>The Guardian</span>
      </a>
    </div>
  );
}

export default Links;
