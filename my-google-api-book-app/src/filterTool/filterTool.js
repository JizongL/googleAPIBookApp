import React from 'react'
import PrintType from './printType'
import BookType from './bookType'
class FilterTool extends React.Component{
render(){
  return(
    <div className='filter-tools'>
      <PrintType printTypeHandle={this.props.printTypeHandle}/>
      <BookType />

    </div>
  )
}
}

export default FilterTool