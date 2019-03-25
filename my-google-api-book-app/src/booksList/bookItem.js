import React from 'react'

const BookItem = function(props){
  //console.log((props.bookdata.saleInfo.retailPrice.amount))
  
  console.log((props.bookdata.saleInfo.retailPrice===undefined))
  const price = (props.bookdata.saleInfo.retailPrice)?
  <div className='book-price'>price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  .format(props.bookdata.saleInfo.retailPrice.amount)}</div>:<div>price not available</div>
  return(
    <li>
      <div className='book-cover'>
        <img alt ='bookcover' src={props.bookdata.volumeInfo.imageLinks.thumbnail }/>
      </div>
      <div>
      <h3 className='book-title'> {props.bookdata.volumeInfo.title}</h3>
      <div className='book-author'>{props.bookdata.volumeInfo.authors}</div>
      {price}
      <div className='book-description'>{props.bookdata.volumeInfo.description}</div>
      </div>
    </li>
  )
}

export default BookItem