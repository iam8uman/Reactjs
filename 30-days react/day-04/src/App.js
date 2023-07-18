import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
// import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Navbar/>
     <button><Sidebar/></button> 
     <br/>
     <button><Feed/></button> 
     <br/>
     <button><Rightbar/></button> 
    </div>
  )
}

export default App
