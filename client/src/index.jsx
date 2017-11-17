import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import Search from './components/search.jsx';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : [],
      title : ''
    };
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
  }

  search(term) {
    console.log(`${term} was searched`);
    var temp = [];

    temp = this.state.movies.filter(movie => {
      return movie.title.toUpperCase().includes(term.toUpperCase());
    })

    if(temp.length !== 0) {
      this.setState({
        movies: temp
      });
    }
    if(temp.length === 0) {
      alert('Not Found!');
    }

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

  update(e) {
    this.setState({
      title : e.target.value
    });
  }

  add() {
    this.state.movies.push({title: this.state.title});
    this.setState({
      movies: this.state.movies,
      title: ''
    });
  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <input type='text' onChange={this.update} value={this.state.title} placeholder='Add movie title here' />
        <button style='color:green' style={{backgroundColor:'green'}} onClick={this.add}>Add</button>
        <Search onSearch={this.search.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
/*
user enter a new movie title
get the val of title
user clicks
get the val, use the val to add to the movie list
*/

      // {title: 'Mean Girls'},
      // {title: 'Hackers'},
      // {title: 'The Grey'},
      // {title: 'Sunshine'},
      // {title: 'Ex Machina'}