import React, { Component } from 'react';
import Chart from '../components/Chart';
import TitleBar from '../components/TitleBar';

class ChartBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }

  componentDidMount() {
    this.loadSongs(this.props.genres[0].url)
  }

  loadSongs(url) {
    fetch(url)
      .then(res => res.json())
      .then(songsList => this.setState({ songs: songsList.feed.entry }))
      .catch(err => console.error);
  }

  

  handleSelectChange(event) {
    this.loadSongs(event.target.value);
  }

  render() {
    return (
      <div>
        <TitleBar
          handleSelectChange={this.handleSelectChange}
          genres={this.props.genres}
        />
        <Chart
          songs={this.state.songs}
          url={this.props.genres[0].url}
          handleSelectChange={this.handleSelectChange}

        />
      </div>
    )
  }
}

export default ChartBox;
