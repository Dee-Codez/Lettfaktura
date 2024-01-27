import { useState } from 'react'
import { Routes,Route, useNavigate } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./container/Home"
import Login from "./components/Login"


import './App.css'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
