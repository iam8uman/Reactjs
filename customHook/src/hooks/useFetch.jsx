import { useEffect,useState } from 'react'


const useFetch = (url) => {
    // const [state, setstate] = useState({data:null,loading:true,error:null})
    const [data,setData]=useState(null);
    
   useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
},[url]);

console.log(data)

  return [data]
}

export default useFetch
