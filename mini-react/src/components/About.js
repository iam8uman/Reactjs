import { renderHook } from '@testing-library/react'
import React, { useState } from 'react'

export default function About() {

  const aboutCss={
    display:"flex",
    justifyContent:"center",
    alignItem:"center",

    

  }

  const aboutus={
    fontSize:'23px',
    margin:'10px',
    padding:'6px'
  }
  const imgcss={
    width:'250px',
    height:'250px'
  }

  const topcss={
    // backgroundColor:'black',
    // color:'White',
    textAlign:'center',
    borderRadius:'12px',
    marginTop:'20px'
  }

  const aboutmuni={
    fontSize:'27px',
    // fontFamily:'cursive',
    margin:'13px',

  }



  // tyo dark mode wala part 

  const [container,setContainer]=useState({
    color:'white',
    backgroundColor:'black',
    
  });

  // usestate hook for text inside buttion
  const[buttontext,setButtontext]=useState('Enable LightMode');






  const toggleLight=()=>{

    if(container.color==='white')
    {
      setContainer({

        color:'black',
        backgroundColor:'white',
      })
      setButtontext('Enable DarkMode')
    }
    else
    {
      // console.log(mode.color)
      // console.log("white")
      setContainer({
        color:'white',
        backgroundColor:'black',
      })
      setButtontext('Enable LightMode')
    }
  }

  return (
    <div className='container' style={container}>

        <div className="h1" style={topcss}>About Us</div> <hr/>
        <p className="aboutus" style={aboutmuni}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsa placeat inventore expedita omnis perspiciatis obcaecati dolore unde repudiandae molestias architecto numquam ratione, ut corporis explicabo quos quisquam, possimus nostrum.</p>
        <hr />
        <div className="imgtext" style={aboutCss}>
            <div className="item1" style={imgcss}>

            <img src="../../public/Carousel1.jpg" alt="LOad  AAyena" />
            </div>
            <div className="item2">
                <p className="aboutus" style={aboutus}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at, quo delectus harum, voluptas sapiente cupiditate suscipit, alias dolore eaque voluptatem vel expedita porro nam ipsam nulla repellendus illum et.</p>
            </div>
        </div>

      <button className="m-2 p-2 btn btn-light" onClick={toggleLight}>{buttontext}</button>
      
    </div>
  )
}
