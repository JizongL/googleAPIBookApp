import React from 'react'

class BookSearchTool extends React.Component{
  render(){
    return(
      <div className='search-tool'>
        <form className='search-book-form'>
          <label htmlFor='search'>Search:  
          <input 
          type='text' 
          name='search' 
          id='search-tool' 
          placeholder='Search..' 
          
          />

          </label>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default BookSearchTool 