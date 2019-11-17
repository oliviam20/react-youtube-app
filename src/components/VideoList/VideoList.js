import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = props => {
  const {
    videos,
    onVideoSelect
  } = props;

  const renderedList = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />);

  return (
    <div className="ui relaxed divided list">{renderedList}</div>
  )
};

export default VideoList;