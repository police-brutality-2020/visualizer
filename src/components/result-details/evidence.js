import React from 'react';
import Video from './video';

import './evidence.css';

function Evidence() {
  return (
    <div className="evidence">
      <h4>Evidence</h4>
      <Video
        name="@username"
        type="Twitter"
        date="June 9th, 2020"
        description="This is a description for the video."
        linkUrl="https://www.google.ca"
        videoUrl="https://video.twimg.com/ext_tw_video/1267647817297858562/pu/vid/720x1280/SWGuf5vA2eS3O0vJ.mp4?tag=10"
        thumbnailUrl="https://pbs.twimg.com/ext_tw_video_thumb/1267647817297858562/pu/img/RY2Iu3AgQ2BAGXzj.jpg?name=orig"
      />
      <Video
        name="@username"
        type="Twitter"
        date="June 9th, 2020"
        description="This is a description for the video."
        linkUrl="https://www.google.ca"
        videoUrl="https://video.twimg.com/ext_tw_video/1267647817297858562/pu/vid/720x1280/SWGuf5vA2eS3O0vJ.mp4?tag=10"
        thumbnailUrl="https://pbs.twimg.com/ext_tw_video_thumb/1267647817297858562/pu/img/RY2Iu3AgQ2BAGXzj.jpg?name=orig"
      />
      <Video
        name="@username"
        type="Twitter"
        date="June 9th, 2020"
        description="This is a description for the video."
        linkUrl="https://www.google.ca"
        videoUrl="https://video.twimg.com/ext_tw_video/1267647817297858562/pu/vid/720x1280/SWGuf5vA2eS3O0vJ.mp4?tag=10"
        thumbnailUrl="https://pbs.twimg.com/ext_tw_video_thumb/1267647817297858562/pu/img/RY2Iu3AgQ2BAGXzj.jpg?name=orig"
      />
    </div>
  );
}

export default Evidence;
