import Image from 'next/image'
import React from 'react'
import { Rating } from '@mui/material'

export default function MovieCard({title,type,rat,img}) {
  return (
    <div className='flex flex-col items-center'>
        <Image src={`/mv/${img}.jpg`} alt={title} width={'300'} height={'500'} className='rounded-md'/>
        <p>
        <Rating name="half-rating-read" defaultValue={rat} precision={0.5} max={5} readOnly/>
        </p>
        <h1>{title}</h1>
        <p>{type}</p>
    </div>
  )
}
