import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
// import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Nav/> */}
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
  )
}

export default App