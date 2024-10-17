// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaTwitter } from "react-icons/fa";



// function Footer() {
//   return (
//     <>
//     <div className='	bg-teal-300 mt-32  '>
//         <div className='flex space-x-36'>
//         <div>
//         <h2 className='text-3xl mt-11 ml-14'>GREENMIND</h2>
//         <p className='text-sm  ml-14'>We help you to find</p>
//         <p  className='text-sm  ml-14'>your dream plant</p>
//         <div className='flex space-x-8 mt-3 ml-14'>
//             <div>
//         <FaFacebookF />

//         </div>
//         <div>
//         <RiInstagramFill />

//         </div>
//         <div>
//         <FaTwitter />

//         </div>
//         </div>
//         </div>

//         <div >
//             <h3 className='text-xl mt-10'><b> Information </b></h3>

//             <a href="/about" >About</a>
//             <br />
//             <a href="/products" >Products</a>
//             <br />
//             <a href="/contact">Contact</a>
//         </div>
//         <div>
//             <h3 className='text-xl mt-10'><b>Company</b></h3>
//             <p>Community</p>
//             <p>Career</p>
//             <p>Our Story</p>
//         </div>
//         <div>
//             <h3 className='text-xl mt-10'><b> Contact </b></h3>
//             <p>Getting Started</p>
//             <p>Pricing</p>
//             <p>Resources</p>
//         </div>
//         </div>
//         <p className='mt-14 ml-8'>© 2023 all Right Reserved Term of use GREENMIND</p>
//     </div>
    
    
    
//     </>
//   )
// }

// export default Footer




import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-teal-300 mt-32 p-8">
      <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-36">
        {/* Greenmind Logo & Social Icons */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl mt-4 lg:mt-11">GREENMIND</h2>
          <p className="text-sm mt-2">We help you to find your dream plant</p>
          <div className="flex space-x-8 mt-3">
            <FaFacebookF />
            <RiInstagramFill />
            <FaTwitter />
          </div>
        </div>

        {/* Information Section */}
        <div className="lg:w-1/3">
          <h3 className="text-xl mt-4 lg:mt-10"><b>Information</b></h3>
          <a href="/about" className="block mt-2">About</a>
          <a href="/products" className="block">Products</a>
          <a href="/contact" className="block">Contact</a>
        </div>

        {/* Company Section */}
        <div className="lg:w-1/3">
          <h3 className="text-xl mt-4 lg:mt-10"><b>Company</b></h3>
          <p className="mt-2">Community</p>
          <p>Career</p>
          <p>Our Story</p>
        </div>

        {/* Contact Section */}
        <div className="lg:w-1/3">
          <h3 className="text-xl mt-4 lg:mt-10"><b>Contact</b></h3>
          <p className="mt-2">Getting Started</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p className="mt-14 text-center">© 2023 All Rights Reserved | Terms of Use | GREENMIND</p>
    </div>
  );
}

export default Footer;
