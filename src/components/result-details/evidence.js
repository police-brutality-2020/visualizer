import React from 'react';
import PropTypes from 'prop-types';
import Video from './video';

import './evidence.css';

function Evidence({ data }) {
  const videos = data
    .filter(
      (item) =>
        // Ensure all videos have at least one stream
        item.video[0] && item.video[0].streams && item.video[0].streams[0],
    )
    .map((item) => {
      const video = item.video[0];
      const stream = video.streams[0];

      return (
        <Video
          key={item.id}
          type={video.site}
          date={video.created_at}
          description={video.description || video.title}
          linkUrl={video.url}
          videoUrl={stream.url}
          thumbnailUrl={video.thumbnail}
        />
      );
    });

  return (
    <div className="evidence">
      <h4>Evidence</h4>
      {videos.length === 0 ? (
        <p>
          Videos for this incident are not available yet. Visit the links above
          to learn more.
        </p>
      ) : (
        videos
      )}
    </div>
  );
}

Evidence.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Evidence;
