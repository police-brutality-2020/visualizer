import React from 'react';
import { FaTwitter, FaReddit } from 'react-icons/fa';

import './result-details.css';

function ResultDetails() {
  return (
    <div className="result-details">
      <h3>
        Police shoot tear gas canister at man from close range, striking him in
        the chest
      </h3>
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
    </div>
  );
}

export default ResultDetails;
