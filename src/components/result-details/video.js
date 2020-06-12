import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import parseUrl from '../../util/parseUrl';

import './video.css';

function Video({ type, date, description, videoUrl, linkUrl, thumbnailUrl }) {
  const [, label] = parseUrl(linkUrl);

  // When the thumbnail or video fails to load, remove the element
  const onThumbnailError = (e) => e.target.remove();
  const onVideoError = (e) => e.target.parentElement.remove();

  return (
    <div className="video">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailUrl} alt="thumbnail" onError={onThumbnailError} />
        <div className="source">
          <div className="label">{label}</div>
          <div className="type">
            {type} &bull; {format(new Date(date), 'LLLL do, yyyy')}
          </div>
        </div>
      </a>
      <p>{description}</p>
      <video controls onError={onVideoError}>
        <source type="video/mp4" src={videoUrl} />
        <track kind="captions" />
      </video>
    </div>
  );
}

Video.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default Video;
