import React from 'react'
import FilterTool from '../filterTool/filterTool'
import BookSearchTool from '../searchTool/bookSearchTool'

class BookToolBar extends React.Component{
  render(){
    return(
      <div className='book-tool-bar'>
        <BookSearchTool/>
        <FilterTool />      
      </div>
    )
  }
}

export default BookToolBar