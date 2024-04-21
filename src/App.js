import React from 'react'
import { useRoutes } from "react-router-dom"
import routes from './routes'
import Profile from './Profile/Profile'

export default function App() {

  const router = useRoutes(routes)
  
  return (
    <div className="App bg-bg h-screen">
      <div className='container'>
        <Profile />
      </div>
    </div>
  )
}
