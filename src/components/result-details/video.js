import React from 'react';
import PropTypes from 'prop-types';

import './video.css';

function Video({
  name,
  type,
  date,
  description,
  videoUrl,
  linkUrl,
  thumbnailUrl,
}) {
  return (
    <div className="video">
      <a href={linkUrl}>
        <img src={thumbnailUrl} alt="thumbnail" />
        <div className="source">
          <div className="name">{name}</div>
          <div className="type">
            {type} &bull; {date}
          </div>
        </div>
      </a>
      <p>{description}</p>
      <video controls>
        <source type="video/mp4" src={videoUrl} />
        <track kind="captions" />
      </video>
    </div>
  );
}

Video.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default Video;
