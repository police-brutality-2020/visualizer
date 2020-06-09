import React from 'react';
import { FaTwitter, FaReddit } from 'react-icons/fa';

function Actions() {
  return (
    <div className="actions">
      <div>
        <FaTwitter />
        <span>@username1</span>
      </div>
      <div>
        <FaReddit />
        <span>u/username2</span>
      </div>
    </div>
  );
}

export default Actions;
