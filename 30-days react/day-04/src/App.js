import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
  )
}

export default App
