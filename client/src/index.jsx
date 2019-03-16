import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';

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
      ],
      displayed: []
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.setState({ displayed: this.state.movies });
  }

  search(title) {
    console.log(`${title} was searched`);

    const match = [];
    const movies = this.state.movies;

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title.toLowerCase().includes(title.toLowerCase())) {
        match.push(movies[i]);
      }
    }
    if (match.length > 0) {
      this.setState({ displayed: match });
    } else {
      alert('No movie by that name found.');
    }
  }

  render() {
    return (<div>
    <h1 id="title">MovieList</h1>
    <Search search={this.search} />
    <MovieList movies={this.state.displayed} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));