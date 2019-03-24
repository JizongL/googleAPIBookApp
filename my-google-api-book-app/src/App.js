import React, { Component } from 'react';
import BookToolBar from './bookToolBar/bookToolBar'
import BookList from './booksList/bookList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookToolBar />
        <BookList />
      </div>
    );
  }
}

export default App;
