import React from 'react';
import Links from './links';

import './result-details.css';

// TODO: Use URLs from the incident object
const urls = [
  'https://twitter.com/courtenay_roche/status/1267653137969623040',
  'https://www.4029tv.com/article/bentonville-police-deploy-tear-gas-on-protesters/32736629#',
  'https://www.reddit.com/r/nextfuckinglevel/comments/gtv4co/downtown_salt_lake_city_may_30th_2020_unarmed/',
];

function ResultDetails() {
  return (
    <div className="result-details">
      <h3>
        Police shoot tear gas canister at man from close range, striking him in
        the chest
      </h3>
      <div className="divider" />
      <Links urls={urls} />
      <div className="divider" />
    </div>
  );
}

export default ResultDetails;
