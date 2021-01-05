import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: ``
    };

    this._onSearchInputChange = this._onSearchInputChange.bind(this);
  }

  _onSearchInputChange(evt) {
    evt.preventDefault();

    const searchQuery = evt.target.value;
    this.setState({searchQuery});
    this.props.onSearchInputChange(searchQuery);
  }

  render() {
    return <input type='text' className='form-control search-input' placeholder='Type here to search' value={this.state.searchQuery} onChange={this._onSearchInputChange} />
  }
}
