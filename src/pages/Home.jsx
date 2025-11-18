import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  
  return (
    <div className='grid grid-cols-4 px-10 my-10 '>
      
      {
        data?.length > 0?
        data?.map((item)=>(
        <div className='shadow p-3'>
        <img src={item?.thumbnail} alt="no image" className='w-full'/>
        <p className='mt-3'> {item?.description.slice(0,60)}...</p>
        <p className='text-violet-900 text-2xl mt-3 font-semibold'>Price: $ {item.price}</p>
        <div className='flex justify-between mt-4'>
          <button className='p-3 bg-red-600 text-white rounded hover:border hover:border-red-600 hover:text-red-600 hover:bg-white'><FontAwesomeIcon icon={faHeart}/></button>
          <button className='p-3 bg-green-600 text-white rounded hover:border hover:border-green-600 hover:text-green-600 hover:bg-white'><FontAwesomeIcon icon={faHeart}/></button>
        </div>
      </div>
      ))
      :
      <p>Loading...</p>
      }
    </div>
  )
}

export default Home