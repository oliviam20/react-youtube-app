import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../api/youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        // 'q' is from the youtube api documentation (so not query)
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const {
      videos,
      selectedVideo
    } = this.state;
  
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>Found {videos.length} videos</p>
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={videos}
        />
      </div>
    )
  }
}
