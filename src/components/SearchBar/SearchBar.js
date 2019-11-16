import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}