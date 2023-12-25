import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className="w-full h-16 bg-slate-500 flex items-center px-4 justify-between">
          <h1 className="text-3xl text-white font-semibold">CRUD</h1>
          <Link to={"add-user"} className="w-48 bg-white text-blue-500  flex justify-center items-center font-semibold text-xl h-12 rounded-lg">
              Add User
          </Link>
        
    </div>
  )
}

export default NavBar
