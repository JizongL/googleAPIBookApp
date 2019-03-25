import React, { Component } from 'react';
import BookToolBar from './bookToolBar/bookToolBar'
import BookList from './booksList/bookList'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      bookList:[],
      searchTerm:'',
      printType:'',
      bookType:'',
      error:''
    }
  }



  componentDidMount(){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=time:keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=magazines'
    
    fetch(url)
    .then(res=>{if(!res.ok){
      throw new Error(res.statusText)
    }
    return res.json()
  })
  .then(
    data =>{
      this.setState({
        bookmarks:data,
        error:null
      })
    }
  ).catch(err=>this.setState({
    error:err.message
  }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <BookToolBar />
        <BookList />
      </div>
    );
  }
}

export default App;
