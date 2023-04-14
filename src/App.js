import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import WelcomePage from './Components/WelcomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

export const AppContext = createContext();

export default function App() {

  const [dark, setDark] = useState(true);


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
