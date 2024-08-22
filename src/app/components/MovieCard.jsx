import Image from 'next/image'
import React from 'react'

export default function MovieCard({title,type,rat}) {
  return (
    <div className='flex flex-col items-center'>
        <Image src={`/mv/${title.split(' ').join('')}.jpg`} alt={title} width={'300'} height={'500'} className='rounded-md'/>
        <p>{rat}</p>
        <h1>{title}</h1>
        <p>{type}</p>
    </div>
  )
}
