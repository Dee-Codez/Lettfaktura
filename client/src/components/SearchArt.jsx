import React from 'react'

const SearchArt = ({ArticleTerm,ProductTerm}) => {
  return (
    <div className='text-black'>
      Searching 
      <br />
      Article No. : {ArticleTerm}
      <br />
      Product/Service : {ProductTerm}
    </div>
  )
}

export default SearchArt
