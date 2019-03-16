import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ term: e.target.value });
  }

  add() {
    this.props.add(this.state.term);
  }

  render() {
    return (
      <div>
        <div id="addInput">
          <input type="text" onChange={this.onChange} value={this.state.term} placeholder="Add movie title here" />
        </div>
        <button id="addBtn" onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default Add;