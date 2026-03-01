import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h2>Home</h2>}/>
    </Routes>
  )
}

export default AppRoutes