import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Generator from './components/Generator'

function App() {

  return (
    <BrowserRouter>
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Manager/>}/>
      <Route path="/generator" element={<Generator/>}/>
    </Routes>
    <Footer/>
    </>
    </BrowserRouter>
  ) 
}

export default App
