"use client"
import { useState } from "react"
import { stuffs } from  "../data"

export default function Stuff() {
    const [title,setTitle] = useState(stuffs[0].title)
    const [image,setImage] = useState(stuffs[0].image)

    function handleClick(t,w){
        setTitle(t)
        setImage(w)
    }

    const stuffData = stuffs.map(stuff => (

    <div className={`border-blue-700 border-8 border-solid bg-cover cursor-pointer flex justify-center items-center font-bold`}  key={stuff.id} style={{backgroundImage: `url(${stuff.image})`}} onClick={()=>handleClick(stuff.title,stuff.image)}> 

        <h1 className="text-center uppercase font-bold bg-white">{stuff.title}</h1>
    </div>

  
))

    
    return (
        <div className={`m-auto my-5 w-4/5 grid grid-cols-4 grid-rows-[500px_150px]`} style={{backgroundImage: `url(${image})`}}>
        
        
        <div className={`border-red-700 border-8 border-solid col-span-4 bg-cover flex flex-col items-center justify-center text-3xl`}  >
        <h1 className="text-center uppercase font-bold bg-white">{title}</h1>
    </div>

        {stuffData}
        </div>
     
        
  )
}