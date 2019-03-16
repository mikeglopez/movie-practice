import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({ term: e.target.value });
  }

  search() {
    this.props.search(this.state.term);
  }

  render() {
    return (
      <div>
        <div id="searchBar">
          <input type="text" placeholder="search..." value={this.state.value} onChange={this.onChange}></input>
        </div>
        <div id="go" onClick={this.search}>Go!</div>
      </div>
    )
  }
}

export default Search;