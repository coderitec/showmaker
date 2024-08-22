import React from 'react'

export default function Header() {
  return (
    <div className='grid md:grid-cols-6 md:grid-rows-[300px_300px_300px] grid-cols-1 grid-rows-[200px_200px_200px]'>
        <div className='bg-[url(/cinema.jpg)] md:col-span-4 md:row-span-3'></div>
        <div className='bg-[url(/corn.jpg)] bg-cover md:row-span-2 md:col-span-2'></div>
        <div className='bg-orange-500'></div>
        <div className='bg-blue-800'></div>
    </div>
  )
}
