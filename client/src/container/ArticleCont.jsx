import React, {useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import Feed from '../components/Feed'
import CreateArt from '../components/CreateArt'
import SearchArt from '../components/SearchArt'
import BtnModal from '../components/BtnModal'
import Terms from '../components/Terms'
import TnCBtn from '../components/TnCBtn'

const ArticleCont = () => {
  return (
    <div className= 'flex flex-col grow'>
        <div className=''>
            
        </div>
        <div className=''>
            <Routes>
            <Route className path='/home' element={<TnCBtn/>}>
                </Route>
                <Route path='/invoices/*' element={
                <>
                  <Searchbar />
                  <Feed />
                </>
                }/>   
                {/* <Route path='/invoices/*' element={
                  <>
                  <Feed />
                  <BtnModal />
                  </>
                }/>  */}
                <Route path='invoices/create-article' element={
                <>
                  <Searchbar />
                  <CreateArt />
                </>
                
                }/>
                <Route path='/search' element={
                  <>
                  <Searchbar />
                  <SearchArt />
                </>
                }/>
            </Routes>
        </div>
    </div>
  )
}

export default ArticleCont
