import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Loader from 'react-loader-spinner';
import { FaChevronLeft } from 'react-icons/fa';
import Evidence from './evidence';
import Links from './links';
import useEvidence from '../../hooks/getEvidence';

import './result-details.css';

function ResultDetails({ id, hideResultDetail }) {
  const data = useEvidence(id);

  return data ? (
    <div className="result-details">
      <div className="result-details-header">
        <FaChevronLeft onClick={hideResultDetail} />
        <div className="result-details-header-text">
          <h3>{data.title}</h3>
          <p>
            {data.city}, {data.state} &bull;{' '}
            {format(new Date(data.date), 'LLL dd, yyyy')}
          </p>
        </div>
      </div>
      <div className="divider" />
      <Links urls={data.links} />
      <div className="divider" />
      <Evidence data={data.evidence} />
    </div>
  ) : (
    <div className="results-details-loader">
      <Loader
        type="TailSpin"
        color="#000000"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}

ResultDetails.propTypes = {
  id: PropTypes.string.isRequired,
  hideResultDetail: PropTypes.func.isRequired,
};

export default ResultDetails;
