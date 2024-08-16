import Image from "next/image";
import pop from './corn.jpg'


export default function Home() {
  return (
    
    <>
      <h1>This is our movie home</h1>
      <div className="flex justify-around">
        <Image src={'/cinema.jpg'} alt="movie room" width={'500'} height={'500'}/>
        <Image src={pop} alt="movie room" width={'500'} height={'500'}/>
      </div>
  
      <div  className="flex justify-around pt-2">
        <Image src={'https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="bookshelf" width={'500'} height={'500'} />
       
        <Image src={'https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="bookshelf" width={'500'} height={'500'} />
      </div>
    </>
  )
}
