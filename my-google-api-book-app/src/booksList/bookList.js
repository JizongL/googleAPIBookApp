import React from 'react'
import BookItem from './bookItem'

class BookList extends React.Component{
  render(){
    console.log(this.props.books,'test booklist current')
    return(
      <ul className='book-list'>
        {this.props.books.map((book,index)=>
        <BookItem bookdata={book} key={index}/>
        )}
      </ul>
    )
  }
}

export default BookList 