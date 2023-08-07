// for media query to make responsive in all devices

import { useState, useEffect } from "react";

const useMediaQuery=(query)=>{
    const [matches,setMatches]=useState(false)

    useEffect(()=>{
        const media=window.matchMedia(query); //window.matchMedia vanne kura media query jo css ko
        if(media.matches!==matches) //media ko matches mathi ko matches i.e useState wala snga 
        setMatches(media.matches)

        const listener= ()=>setMatches(media.matches);
        addEventListener("resize",listener)

        return ()=> window.removeEventListener("resize",listener)
    },[matches,query]) // we all know useEffect takes 2 argument 2nd one is array 
}

export default useMediaQuery