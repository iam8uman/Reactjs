import React, { useEffect, useState } from 'react'

const TitlecountUpwithFunc = () => {
    const [count,setCount]=useState(0)

    const titleCountup=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        document.title=`you enter ${count} times`
    })


  return (
    <div>
      <button className="btn btn-primary p-4 m-4 text-3xl text-black bg-purple-500 border-2 border-black rounded-md" onClick={titleCountup}>Titile {count} Up</button>
      Hello world
    </div>
  )
}

export default TitlecountUpwithFunc
