import React, {useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import Feed from '../components/Feed'
import CreateArt from '../components/CreateArt'
import SearchArt from '../components/SearchArt'

const ArticleCont = () => {
  return (
    <div className= 'flex flex-col grow'>
        <div className=''>
            <Searchbar />
        </div>
        <div className=''>
            <Routes>
                <Route path='/items/invoices' element={<Feed />}/>   
                <Route path='/create-article' element={<CreateArt />}/>
                <Route path='/search' element={<SearchArt />}/>
            </Routes>
        </div>
    </div>
  )
}

export default ArticleCont
