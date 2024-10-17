import React from 'react'
import Image from 'next/image'

// function Categories() {
//   return (
//     <div className=' h-screen	mb-16	 mt-20  ml-14  mr-14'>
//     <div className='flex justify-center items-center flex-col'>
        
//       <h1 className='text-3xl font-bold mt-10'>Categories</h1>
//       <p className='mt-4'>Find what you are looking for.</p>
//     </div>

//     <div className='max-w-6xl border-2  h-96 mt-12	bg-teal-300	   rounded-2xl flex justify-between'>
//         <div className='ml-20  '>
//             <Image width={200} height={150} src="/plant0000.jpg" alt="Picture of the author"  />
//            <a  href="../products"> <p className='ml-10'><b> Natural Plants </b></p> </a>
//         </div>
//         <div className='mt-20'>
//             <Image width={200} height={150} src="/plantacc.jpg" alt="Picture of the author"  />
//             <a href="../products"><p className='ml-10'><b>Plants Accessories </b></p></a>

//         </div>
//         <div className='mr-20'>
//             <Image width={200} height={150} src="/artificialplants.webp" alt="Picture of the author"  />
//             <a href="../products"> <p className='ml-10'><b> Artificial Plants </b></p></a>
//         </div>

//     </div>
//     </div>
//   )
// }

// export default Categories






function Categories() {
  return (
    <div className="h-auto mb-16 mt-20 mx-5 lg:mx-14">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mt-10">Categories</h1>
        <p className="mt-4 text-gray-600">Find what you are looking for.</p>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl border-2 h-auto lg:h-96 mt-12 bg-teal-300 rounded-2xl flex flex-col lg:flex-row justify-between items-center p-8 space-y-8 lg:space-y-0 lg:space-x-8 mx-auto">
        {/* Natural Plants */}
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={150}
            src="/plant0000.jpg"
            alt="Natural Plants"
            className="rounded-lg"
          />
          <a href="../products">
            <p className="mt-4 font-bold">Natural Plants</p>
          </a>
        </div>

        {/* Plants Accessories */}
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={150}
            src="/plantacc.jpg"
            alt="Plants Accessories"
            className="rounded-lg"
          />
          <a href="../products">
            <p className="mt-4 font-bold">Plants Accessories</p>
          </a>
        </div>

        {/* Artificial Plants */}
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={150}
            src="/artificialplants.webp"
            alt="Artificial Plants"
            className="rounded-lg"
          />
          <a href="../products">
            <p className="mt-4 font-bold">Artificial Plants</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
