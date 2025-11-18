import { faFacebook, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='p-10 bg-violet-900 md: px-20 grid grid-cols-[2fr_1fr_1fr_2fr] text-white'>
        <div>
          <h3 className="text-2xl"><FontAwesomeIcon icon={faCartShopping}/>E-CART</h3>
          <p className="mt-4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellat alias incidunt repudiandae ipsa magnam accusamus ab. Eius cum labore aliquid nihil, et vitae sed saepe quos! Nihil, sunt quis!</p>
        </div>
        <div className='flex justify-center'>
          <div>
            <h3 className='text-2xl'>Links</h3>
            <Link to={'/'}><p>Home</p></Link>
            <Link to={'/wishlist'}><p>Wishlist</p></Link>
            <Link to={'/cart'}><p>Cart</p></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h3 className='text-2xl'>Guides</h3>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div>
          <h3 className='text-2xl'>Contact Us</h3>
          <div className='flex justify-between mt-4'>
            <input type="text" placeholder='Email Id' className='rounded bg-white placeholder:text-gray-400 p-3 w-full' />
            <button className='rounded bg-orange-400 text-white px-4 py-3 ms-2'>Subscribe</button>
          </div>

          <div className='flex justify-between mt-3'>
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
          </div>
        </div>
    </div>
  )
}

export default Footer