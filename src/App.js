import React from 'react';
import ChartBox from './containers/ChartBox';

class App extends React.Component {
  render() {
    const genres = [
      {name: "All Songs", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
      {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"}
      ]

    return (
      <ChartBox genres={genres} />
    );
  }
}

export default App;
