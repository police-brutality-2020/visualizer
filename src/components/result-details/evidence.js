import React from 'react';
import PropTypes from 'prop-types';
import Video from './video';

import './evidence.css';

function Evidence({ data }) {
  const videos = data.map((item) => {
    // Ensure the item has at least one video
    const video = item.video[0];
    if (!video) return null;

    // Ensure the video has at least one stream
    const stream = video.streams[0];
    if (!stream) return null;

    return (
      <Video
        key={item.id}
        name={video.id}
        type={video.site}
        date={video.created_at}
        description={video.title}
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
