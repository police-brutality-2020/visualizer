import React from 'react';

import './video.css';

function Video() {
  return (
    <div className="video">
      <a href="https://www.google.ca">
        <img
          src="https://pbs.twimg.com/ext_tw_video_thumb/1267647817297858562/pu/img/RY2Iu3AgQ2BAGXzj.jpg?name=orig"
          alt="thumbnail"
        />
        <div className="source">
          <div className="name">@username</div>
          <div className="type">Twitter &bull; June 9th, 2020</div>
        </div>
      </a>
      <p>This is a description of the video.</p>
      <video controls>
        <source
          type="video/mp4"
          src="https://video.twimg.com/ext_tw_video/1267647817297858562/pu/vid/720x1280/SWGuf5vA2eS3O0vJ.mp4?tag=10"
        />
        <track kind="captions" />
      </video>
    </div>
  );
}

export default Video;
