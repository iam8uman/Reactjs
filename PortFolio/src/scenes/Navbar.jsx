import  { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({selectedPage,setSelectedPage}) => {
    const [isMenuToggled,setIsMenuToggled]=useState(false)
    const isAboveSmallScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className={`z-40 w-full fixed top-0 py-6`}>
      This Is navbar
    </div>
  )
}

export default Navbar
