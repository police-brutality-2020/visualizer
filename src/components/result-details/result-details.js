import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Evidence from './evidence';
import Links from './links';
import useEvidence from '../../hooks/getEvidence';

import './result-details.css';

function ResultDetails({ id }) {
  const data = useEvidence(id);
  if (!data) return null;

  return (
    <div className="result-details">
      <h3>{data.title}</h3>
      <p>
        {data.city}, {data.state} &bull;{' '}
        {format(new Date(data.date), 'LLL dd, yyyy')}
      </p>
      <div className="divider" />
      <Links urls={data.links} />
      <div className="divider" />
      <Evidence data={data.evidence} />
    </div>
  );
}

ResultDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ResultDetails;
