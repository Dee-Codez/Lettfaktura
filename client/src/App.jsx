import { useState } from 'react'
import { Routes,Route,BrowserRouter } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./container/Home"
import Login from "./components/Login"


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </>
  )
}

export default App
