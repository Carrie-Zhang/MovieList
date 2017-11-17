import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import Search from './components/search.jsx';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
      ]
    };
  }

  search(term) {
    console.log(`${term} was searched`);
    var temp = [];

    temp = this.state.movies.filter(movie => {
      return movie.title.toUpperCase().includes(term.toUpperCase());
    })

    this.setState({
      movies: temp
    })

    // if(count === 0) {
    //   alert('Not Found!');
    // }

    // $.ajax({
    //   url: '/',
    //   type: 'POST',
    //   data: JSON.stringify(term),
    //   contentType: 'application/json',
    //   success: data => {
    //     console.log('Client POST successful', data);
    //   },
    //   error: err => {
    //     console.log('Client POST error: ', err);
    //   }
    // });
  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <Search onSearch={this.search.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));