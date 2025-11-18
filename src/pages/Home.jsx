import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  
  return (
    <div className='md:grid grid-cols-4 px-10 my-10 '>
      
      {
        data?.length > 0?
        data?.map((item, index)=>(
        <div className='shadow p-3' key={index+1}>
        <img src={item?.thumbnail} alt="no image" className='w-full'/>
        <p className='mt-3'> {item?.description.slice(0,60)}...</p>
        <p className='text-violet-900 text-2xl mt-3 font-semibold'>Price: ${item.price}</p>
        <div className='flex justify-between mt-4'>
          <button className='p-3 bg-red-600 text-white rounded border border-transparent hover:border-red-600 hover:text-red-600 hover:bg-white'><FontAwesomeIcon icon={faHeart}/></button>
          <button className='p-3 bg-green-600 text-white rounded border border-transparent hover:border-green-600 hover:text-green-600 hover:bg-white'><FontAwesomeIcon icon={faCartShopping}/></button>
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