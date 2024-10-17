import React from 'react'
import Image from 'next/image'


function Products() {
  return (
    <div>
      {/* first row */}
      <div className='flex justify-between'>
        <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
        <Image width={200} height={150} src="/plant1.jpg" alt="Picture of the author"  />
        <p><u>small plant </u></p>
        <p>$10</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4 '>Add to cart
        </button>

      </div>
      <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
      <Image width={200} height={150} src="/plant11.jpg" alt="Picture of the author"  />
        <p><u>Indoor plant </u></p>
        <p>$20</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>
      </div>
      <div className='ml-14 mt-14 mr-14 border-2 border-gray-300 rounded'>
        
      <Image width={200} height={200} src="/plant5.webp" alt="Picture of the author"  />
        <p><u>Plant pot </u></p>
        <p>$15</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>
      </div>
      </div>

    {/* second row */}
      <div className='flex justify-between'>
        <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
        <Image width={200} height={150} src="/plant08.jpg" alt="Picture of the author"  />
        <p><u>small plant </u></p>
        <p>$10</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-8'>Add to cart</button>
        
      </div>
      <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
      <Image width={200} height={150} src="/plant008.webp" alt="Picture of the author"  />
        <p><u>Indoor plant </u></p>
        <p>$20</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-8'>Add to cart</button>
      </div>
      <div className='ml-14 mt-14 mr-14 border-2 border-gray-300 rounded'>
        
      <Image width={220} height={280} src="/plant8.webp" alt="Picture of the author"  />
        <p><u>Plant pot </u></p>
        <p>$15</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>
      </div>
      </div>

   {/* third row */}
      <div className='flex justify-between'>
        <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
        <Image width={240} height={100} src="/plant12.jpg" alt="Picture of the author"  />
        <p><u>small plant </u></p>
        <p>$10</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>

      </div>
      <div className='ml-14 mt-14 border-2 border-gray-300 rounded'>
      <Image width={240} height={240} src="/plant01.jpg" alt="Picture of the author"  />
        <p><u>Indoor plant </u></p>
        <p>$20</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>
      </div>
      <div className='ml-14 mt-14 mr-14 border-2 border-gray-300 rounded'>
        
      <Image width={200} height={400} src="/plant2.webp" alt="Picture of the author"  />
        <p><u>Plant pot </u></p>
        <p>$15</p>
        <button className='bg-teal-300 hover:bg-blue-700 text-black  py-2 px-4 rounded mt-4'>Add to cart</button>
      </div>
      </div>

    </div>
  )
}

export default Products
