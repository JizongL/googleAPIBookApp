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
      bookType:'books',
      error:'',
      loading:false
    }
  }

  

  componentDidMount(){
    this.setState({loading:true})
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}:keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=${this.state.bookType}`
    console.log(url,'test url')
    fetch(url)
    .then(res=>{if(!res.ok){
      
     return res.json().then(resError=>{
        let error = resError.error.message
       return Promise.reject(error)
        })
    }
    return res.json()
  })
  .then(
    data =>{
      
      this.setState({
        bookList:data.items,
        error:null,
        loading:false
      })
    }
  ).catch(err=>{
    console.log('error testing final',err)
    this.setState({
      error:err,
      loading:false
      })
    
})
  
}

doFetch(){
    
  
  
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}:keyes&key=AIzaSyAUoZApaq9eRmbV9OaTTHFzrLSoeXCDbsA&printType=${this.state.printType}`
    
    fetch(url)
    .then(res=>{if(!res.ok){
      
      return res.json().then(resError=>{
        let error = resError.error.message
        return Promise.reject(error)
        })
    }
    return res.json()
  })
  .then(
    data =>{
      
      this.setState({
        bookList:data.items,
        error:null,
        loading:false
      },console.log(this.state.bookList,'test inside setstate of searchhandle'))
      
    }
  ).catch(err=>{
    console.log('error testing final',err)
    this.setState({
      error:err
      })
    
})
}

searchTermHandle=(e)=>{
  e.preventDefault()
  this.setState({
    searchTerm:e.target['search-tool'].value
    
  },()=>this.doFetch())
  
  
}

printTypeFilterHandle=(e)=>{
  e.preventDefault()
  console.log('test event current target',e.currentTarget.value)
  this.setState({
    printType:e.currentTarget.value
  },()=>this.doFetch())
}
  render() {
    console.log(this.state.bookList,'test booklist')
    const error = (this.state.error)?<span>{this.state.error}</span>:(this.state.loading)?
    <span>Loading...</span>:<span></span>
    return (
      <div className="App">
        <BookToolBar 
        searchHandle={this.searchTermHandle}
        printTypeHandle={this.printTypeFilterHandle}/>
        <BookList books = {this.state.bookList}/>
        {error}
      </div>
    );
  }
}

export default App;
