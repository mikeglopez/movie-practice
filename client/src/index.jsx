import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:  [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }

  render() {
    return (<div>
    <h1 id="title">MovieList</h1>
    <MovieList movies={this.state.movies} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));