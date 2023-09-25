import { useParams } from "react-router-dom"

// import React from 'react'

const User = () => {
    const {id }=useParams();
  return (
    <div>
        <div className="text-5xl bg-slate-500 text-center text-white">USER-ID:{id} </div>
    </div>
  )
}

export default User
