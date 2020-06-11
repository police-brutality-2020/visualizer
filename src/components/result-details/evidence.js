import React from 'react';
import PropTypes from 'prop-types';
import Video from './video';

import './evidence.css';

function Evidence({ data }) {
  const videos = data.map((item) => {
    // Ensure the item has video
    if (!item.video[0] || !item.video[0].streams) return null;
    const video = item.video[0];
    const stream = video.streams[0];

    return (
      <Video
        key={item.id}
        type={video.site}
        date={video.created_at}
        description={video.description}
        linkUrl={video.url}
        videoUrl={stream.url}
        thumbnailUrl={video.thumbnail}
      />
    );
  });

  return (
    <div className="evidence">
      <h4>Evidence</h4>
      {videos}
    </div>
  );
}

Evidence.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Evidence;
