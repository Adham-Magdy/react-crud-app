import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import User from './pages/user/User'
import AddUser from './pages/user/AddUser'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path='add-user' element={ <AddUser/>} />
    </Routes>
    </>
  )
}

export default App
