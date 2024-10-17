import React from 'react'
import { RiPlantLine } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { FiPhoneOutgoing } from "react-icons/fi";




// function About() {
//   return (
//     <>
//     <div className='mt-28'>
//       <div className=' flex justify-center text-3xl font-bold mt-10'>About Us 
//       </div>
//       <div className='text-xl flex justify-center text-stone-600	'>
//       <p>Order now and appreciate the beauty of nature</p>
//        </div>

//        <div className='flex justify-between mt-14 mb-14'>
//         <div>
      
  
//         <RiPlantLine className='text-4xl  p-1 bg-teal-300 '/>
//         <p className='text-xl'><b> Large Assortment </b></p>
//         <p className='text-sm	'>we offer many different types of products</p>
//         <p className='text-sm	'>with fewer variations in each category</p>

        
//         </div>
//         <div>
//         <BsBox className='text-4xl  p-1 bg-teal-300 flex justify-center ' />
//         <p className='text-xl'><b> Fast & Free Shipping </b></p>
//         <p className='text-sm	'>4-day or less delivery time free shipping</p>
//         <p className='text-sm	'>and an expedited delivery option.</p>


//         </div>
//         <div>
//         <FiPhoneOutgoing  className='text-4xl    bg-teal-300 flex justify-center '/>
//         <p className='text-xl'><b> 24/7 Support </b></p>
//         <p className='text-sm	'>answers to any business related inquiry</p>
//         <p className='text-sm	'>24/7 and in real time.</p>

//         </div>
//        </div>
       
//     </div>
//     </>
//   )
// }

// export default About


// import { RiPlantLine } from 'react-icons/ri';
// import { BsBox } from 'react-icons/bs';
// import { FiPhoneOutgoing } from 'react-icons/fi';

function About() {
  return (
    <>
      <div className="mt-20">
        {/* Title Section */}
        <div className="flex justify-center text-3xl font-bold mt-10">
          About Us
        </div>
        <div className="text-xl flex justify-center text-stone-600 mt-4 text-center px-4 lg:px-0">
          <p>Order now and appreciate the beauty of nature</p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-14 mb-14 space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0">
          {/* Large Assortment */}
          <div className="flex flex-col items-center text-center lg:text-left">
            <RiPlantLine className="text-4xl p-1 bg-teal-300 rounded-full mb-4" />
            <p className="text-xl font-bold">Large Assortment</p>
            <p className="text-sm text-stone-600 mt-2">
              We offer many different types of products
            </p>
            <p className="text-sm text-stone-600">
              with fewer variations in each category.
            </p>
          </div>

          {/* Fast & Free Shipping */}
          <div className="flex flex-col items-center text-center lg:text-left">
            <BsBox className="text-4xl p-1 bg-teal-300 rounded-full mb-4" />
            <p className="text-xl font-bold">Fast & Free Shipping</p>
            <p className="text-sm text-stone-600 mt-2">
              4-day or less delivery time with free shipping
            </p>
            <p className="text-sm text-stone-600">
              and an expedited delivery option.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center lg:text-left">
            <FiPhoneOutgoing className="text-4xl p-1 bg-teal-300 rounded-full mb-4" />
            <p className="text-xl font-bold">24/7 Support</p>
            <p className="text-sm text-stone-600 mt-2">
              Answers to any business-related inquiry
            </p>
            <p className="text-sm text-stone-600">24/7 and in real-time.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
