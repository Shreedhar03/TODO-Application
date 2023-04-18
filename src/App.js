import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import WelcomePage from './Components/WelcomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

export const AppContext = createContext();

const getDark = ()=>{
  return JSON.parse(localStorage.getItem("dark")) || false ;
}

export default function App() {

  const [dark,setDark] = useState(getDark());

  useEffect(()=>{

    localStorage.setItem("dark" , dark)
    if(dark){
      document.body.classList.add('bg-black')
      document.body.classList.add('text-white')
    }
    else{
      document.body.classList.remove('bg-black')
      document.body.classList.remove('text-white')
      document.body.classList.add("text-black")
    }
  },[dark])
  return (
    <>

      <AppContext.Provider value={{ dark, setDark }}>

        <BrowserRouter>

            <Navbar />

            <Routes>

              <Route path='/' element={<WelcomePage />}></Route>
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>

        </BrowserRouter>

      </AppContext.Provider>
    </>
  )
}
