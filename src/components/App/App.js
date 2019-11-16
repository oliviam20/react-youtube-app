import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../api/youtube';

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        // 'q' is from the youtube api documentation (so not query)
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>Found {this.state.videos.length} videos</p>
      </div>
    )
  }
}