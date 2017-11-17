import React from 'react';

class Search extends React.Component {
  constructor(props) {
    console.log('in Component Search props: ', props);
    super(props);
    this.state ={
      term: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.term} onChange={this.onChange}></input>
        <button onClick={this.search}>Go!</button>
      </div>
    )
  }
}

export default Search;