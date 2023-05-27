import {BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Home from './components/Home'
import AboutGrassroot from './components/AboutGrassroot'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
        <Routes>
          <Route index element={<Home /> } />
          <Route path='/about-grassroot' element={<AboutGrassroot /> } />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
