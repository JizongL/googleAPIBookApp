import React from 'react'

function PrintType(props){
  return(
    <div>
      <label>Print Type:
      <select>
      <option value='book'>all</option>
        <option value='book'>book</option>
        <option value='magazine'>magazine</option>
      </select>
    </label>
    
    </div>
  )
}

export default PrintType