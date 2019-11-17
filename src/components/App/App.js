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

  componentDidMount() {
    // setting a default search term for the app to mount the first time
    this.onTermSubmit('puppy');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        // 'q' is from the youtube api documentation (so not query)
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
