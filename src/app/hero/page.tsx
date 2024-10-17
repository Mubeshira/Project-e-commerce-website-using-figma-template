// import Image from 'next/image'
// import React from 'react'

// export default function Hero() {
//   return (
//     <>
//     <div className='  h-screen	mb-16	  ml-14  mr-14'>
//       <div className='max-w-6xl border-2  h-80 mt-12	bg-teal-300	   rounded-2xl'>
//         <section className='  flex justify-between'>
//             {/* left */}
//             <div className='text-5xl mt-11 ml-14'> 
//                 <p> <b>Buy your </b></p>
//                 <p> <b> dream plants</b></p>
//                 <div className='flex space-x-28 mt-3'>
//                 <p className='text-3xl'> 50+ </p>
//                 <p className='text-3xl'> 50+ </p>
//                 </div>
//                 <div className='flex space-x-12 mt-3'>
//                     <p className='text-xl'>Plant Species</p>
//                     <p className='text-xl'>Customers</p>
//                 </div>
//                 <div className='mt-3 '>
//                 <input className='h-8 text-xl w-96 rounded' type="search" placeholder='What are you looking for?' />
//                 </div>
            

//              </div>


//             {/* right */}

//             <div className='text-5xl  mr-20  rounded-b-full	bg-black w-96 h-80'>
//                 <Image className='rounded-l-full 	'
//                     src="/plant1.jpg"
//                     alt="Picture of the author"
//                     width={200}
//                     height={10}
//                 />
//             </div>
//         </section>
//       </div>
      
//       <div className='flex justify-between mt-20 '>
//      <div className='mt-8 '>
//         <p className='text-xl'><b> Best Selling</b></p>
//         <p className='text-xl'><b> Plants</b></p>
//         <p className='text-stone-500	'>Easiest way to</p>
//         <p className='text-stone-500	'>healthy life by buying</p>
//         <p className='text-stone-500	'>your favorite plants</p>
//        <a href="/products"> <button className='bg-teal-300	 mt-3 p-1 rounded'>See more </button></a>
//      </div>

//      <div className='mt-8 '>
//       <Image src={"/plant011.jpg"} width={220} height={400} alt='picture'/>
//       <br />
//       <a href="/products"><p>Indoor Plant</p></a>
//       <p>$30</p>
//      </div>
//      <div className='mt-8'>
//       <Image className='mb-8' src={"/plant7.jpeg"} width={220} height={400} alt='picture'/>
//       <a href="/products"><p>Natural Plant</p></a>
//       <p>$20</p>

//      </div>
//      <div className='mt-8'>
//       <Image className='mb-8' src={"/plant008.webp"} width={220} height={400} alt='picture'/>
//       <a href="/products"><p>Hanging Plants</p></a> 
//       <p>$15 each</p><a href="/products"></a>
//      </div>
//      </div>

//     </div>
//     </>
//   )
// }




// export default function Hero() {
//   return (
//     <>
//       <div className="h-screen mb-16 mx-5 lg:mx-14">
//         <div className="max-w-6xl border-2 h-auto lg:h-80 mt-12 bg-teal-300 rounded-2xl mx-auto p-4 lg:p-0">
//           <section className="flex flex-col lg:flex-row justify-between">
//             {/* Left Section */}
//             <div className="text-center lg:text-left lg:text-5xl mt-6 lg:mt-11 lg:ml-14">
//               <p><b>Buy your</b></p>
//               <p><b>dream plants</b></p>

//               {/* Plant Species and Customers Count */}
//               <div className="flex justify-center lg:justify-start space-x-12 lg:space-x-28 mt-3">
//                 <p className="text-2xl lg:text-3xl">50+</p>
//                 <p className="text-2xl lg:text-3xl">50+</p>
//               </div>

//               {/* Plant Species and Customers Label */}
//               <div className="flex justify-center lg:justify-start space-x-8 lg:space-x-12 mt-3">
//                 <p className="text-lg lg:text-xl">Plant Species</p>
//                 <p className="text-lg lg:text-xl">Customers</p>
//               </div>

//               {/* Search Input */}
//               <div className="mt-4 flex justify-center lg:justify-start">
//                 <input
//                   className="h-10 w-full lg:w-96 rounded-lg text-lg p-2"
//                   type="search"
//                   placeholder="What are you looking for?"
//                 />
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end rounded-b-full	bg-black w-96 h-80 lg:mr-20">
//               <div className="relative w-64 h-64 lg:w-72 lg:h-80 rounded-l-full overflow-hidden">
//                 <Image
//                   className="rounded-l-full"
//                   src="/plant1.jpg"
//                   alt="Picture of plant"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Best Selling Section */}
//         <div className="flex flex-col lg:flex-row justify-between mt-20 lg:space-x-10">
//           <div className="mt-8 text-center lg:text-left">
//             <p className="text-xl"><b>Best Selling</b></p>
//             <p className="text-xl"><b>Plants</b></p>
//             <p className="text-stone-500">Easiest way to</p>
//             <p className="text-stone-500">a healthy life by buying</p>
//             <p className="text-stone-500">your favorite plants</p>
//             <a href="/products">
//               <button className="bg-teal-300 mt-3 p-2 rounded">See more</button>
//             </a>
//           </div>

//           {/* Plant Cards Section */}
//           <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8 justify-center lg:justify-start">
//             <div className="mb-8 lg:mb-0">
//               <Image src="/plant011.jpg" width={220} height={400} alt="Indoor Plant" />
//               <a href="/products"><p>Indoor Plant</p></a>
//               <p>$30</p>
//             </div>
            

//             <div className="mb-8 lg:mb-0">
//               <Image src="/plant7.jpeg" width={220} height={400} alt="Natural Plant" />
//               <a href="/products"><p>Natural Plant</p></a>
//               <p>$20</p>
//             </div>
          

//             <div className="mb-8 lg:mb-0">
//               <Image src="/plant008.webp" width={220} height={400} alt="Hanging Plants" />
//               <a href="/products"><p>Hanging Plants</p></a>
//               <p>$15 each</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="mb-16 ml-4 mr-4 lg:ml-14 lg:mr-14">
      {/* Hero Section */}
      <div className="max-w-6xl border-2 h-auto lg:h-80 mt-12 bg-teal-300 rounded-2xl">
        <section className="flex flex-col lg:flex-row justify-between">
          {/* Left Side */}
          <div className="text-center lg:text-left text-3xl lg:text-5xl mt-6 lg:mt-11 lg:ml-14 p-4">
            <p><b>Buy your</b></p>
            <p><b>dream plants</b></p>
            <div className="flex justify-center lg:justify-start space-x-12 lg:space-x-28 mt-3">
              <p className="text-xl lg:text-3xl">50+</p>
              <p className="text-xl lg:text-3xl">50+</p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 lg:space-x-12 mt-2 lg:mt-3">
              <p className="text-sm lg:text-xl">Plant Species</p>
              <p className="text-sm lg:text-xl">Customers</p>
            </div>
            <div className="mt-3 flex justify-center lg:justify-start">
              <input
                className="h-10 text-lg lg:text-xl w-full lg:w-96 rounded px-3"
                type="search"
                placeholder="What are you looking for?"
              />
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="mt-6 lg:mt-0 lg:mr-20 flex justify-center rounded-b-full	bg-black w-96 h-80 lg:justify-end">
            <Image
              className="rounded-l-full"
              src="/plant1.jpg"
              alt="Plant Image"
              width={300}
              height={300}
            />
          </div>
        </section>
      </div>

      {/* Best Selling Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-20 space-y-10 lg:space-y-0">
        <div className="text-center lg:text-left">
          <p className="text-xl"><b>Best Selling</b></p>
          <p className="text-xl"><b>Plants</b></p>
          <p className="text-stone-500">Easiest way to</p>
          <p className="text-stone-500">a healthy life by buying</p>
          <p className="text-stone-500">your favorite plants</p>
          <a href="/products">
            <button className="bg-teal-300 mt-3 p-2 rounded">See more</button>
          </a>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <Image src="/plant011.jpg" width={220} height={300} alt="Indoor Plant" />
            <a href="/products"><p>Indoor Plant</p></a>
            <p>$30</p>
          </div>
          <div className="text-center">
            <Image src="/plant7.jpeg" width={220} height={300} alt="Natural Plant" />
            <a href="/products"><p>Natural Plant</p></a>
            <p>$20</p>
          </div>
          <div className="text-center">
            <Image src="/plant008.webp" width={220} height={300} alt="Hanging Plants" />
            <a href="/products"><p>Hanging Plants</p></a>
            <p>$15 each</p>
          </div>
        </div>
      </div>
    </div>
  );
}


