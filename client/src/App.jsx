import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='body-container'>
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
