import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:  [],
      displayed: []
    };
    this.search = this.search.bind(this);
    this.add = this.add.bind(this);
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/movies',
      success: (data) => {
        this.setState({
          movies: data,
          displayed: data
         })
      }
    });
  }

  display() {
    $.ajax({
      method: 'GET',
      url: '/movies',
      success: (data) => {
        this.setState({ displayed: data })
      }
    });
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

  add(movieTitle) {
    $.ajax({
      method: 'POST',
      url: '/movies',
      data: {
        title: movieTitle
      },
      success: (data) => {
        console.log('Success:', data)
        this.display();
      }
    });
  }

  render() {
    return (<div>
    <h1 id="title">MovieList</h1>
    <Add add={this.add} />
    <Search search={this.search} />
    <MovieList movies={this.state.displayed} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));