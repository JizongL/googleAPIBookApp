import React from 'react'

function BookType(props){
  return(
    <div>
      <label>Book Type:
      <select>
      <option value='ebooks'>ebooks</option>
        <option value='free-ebooks'>fre ebooks</option>
        <option value='paid-ebooks'>paid ebooks</option>
      </select>
    </label>
    
    </div>
  )
}

export default BookType