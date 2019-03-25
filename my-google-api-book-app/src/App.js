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
    const url = 'https://www.googleapis.com/books/v1/volumes?q=tim:keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=books'
    
    fetch(url)
    .then(res=>{if(!res.ok){
      
      res.json().then(resError=>{
        let error = resError.error.message
        console.log(error,'dd')
        this.setState({
          error:error
          })})
    }
    return res.json()
  })
  .then(
    data =>{
      console.log(data.items,'test data')
      this.setState({
        bookList:data.items,
        error:null
      })
    }
  ).catch(err=>{
    console.log('error testing final',err.message)
    
})
  }

  render() {
    console.log(this.state.bookList,'test state')
    return (
      <div className="App">
        <BookToolBar />
        <BookList books = {this.state.bookList}/>
        <span>{this.state.error}</span>
      </div>
    );
  }
}

export default App;
