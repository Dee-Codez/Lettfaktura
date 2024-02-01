import { useState, useEffect } from 'react'
import { Routes,Route, useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./container/Home"
import Login from "./components/Login"


import './App.css'
import Term from './components/Term'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [])

  return (
    <>
    <Routes>
        <Route path="/terms" element={
        <>
        <Term />
        </>
        
        
        } />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
