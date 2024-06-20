import './App.css'
import CharactersPage from './pages/CharactersPage/CharactersPage'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import CharactersDetailPage from './pages/CharactersDetailPage/CharactersDetailPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<  HomePage />} />
          <Route path='/characters' element={<  CharactersPage />} />
          <Route path='/characters/:id' element={<  CharactersDetailPage />} />
          <Route path='/contact' element={<  ContactPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
