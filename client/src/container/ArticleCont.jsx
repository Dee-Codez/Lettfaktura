import React, {useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import Feed from '../components/Feed'
import CreateArt from '../components/CreateArt'
import SearchArt from '../components/SearchArt'
import BtnModal from '../components/BtnModal'
import Terms from '../components/Terms'
import TnCBtn from '../components/TnCBtn'
import UserFeed from '../components/UserFeed'
import Profile from '../components/Profile'
import InProgress from './InProgress'

const ArticleCont = () => {

  const [Aterm, setAterm] = useState("");
  const [Pterm, setPterm] = useState("");

  return (
    <div className= 'flex flex-col grow'>
        <div className=''>
            
        </div>
        <div className=''>
            <Routes>
            < Route className path='/home' element={<TnCBtn/>}>
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
                <Route path='/create-article' element={
                <>
                  <Searchbar />
                  <CreateArt />
                </>
                
                }/>
                <Route path='/search' element={
                  <>
                  <Searchbar searchATerm={Aterm} setsearchATerm={setAterm} searchPTerm={Pterm} setsearchPTerm={setPterm}  />
                  <SearchArt ArticleTerm={Aterm} ProductTerm={Pterm} />
                </>
                }/>
                <Route path='/customer' element={
                  <UserFeed/>          
                }/>
                <Route path='/mybusiness' element={
                  <Profile/>
                } />
                <Route path='/terms' element={
                  <Terms/>
                } />
                <Route path="/dev/:component" element={
                  <InProgress/>
                } />
            </Routes>
        </div>
    </div>
  )
}

export default ArticleCont
