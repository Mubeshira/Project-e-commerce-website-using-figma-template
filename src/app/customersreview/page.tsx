// import React from 'react'

// function CustomersReview() {
//   return (
//     <div>
//     <div className='flex flex-col justify-center items-center'>
//       <h1 className='text-xl'><b> What customers say about </b> </h1>
//       <h1 className='text-xl'><b> GREENMIND? </b></h1>
//     </div>
//     <div className='flex justify-center gap-16'>
//     <div className='w-96 h-52 p-2 mt-10 border-2 bg-teal-300	   rounded-2xl'>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur assumenda quisquam harum eligendi sapiente 
//             nesciunt cum explicabo accusantium corrupti 
//             laudantium aliquam dignissimos, voluptas corporis! Maiores illum quod quae vero.</p>
//             <p className='text-2xl mt-4'>⭐⭐⭐⭐⭐Alex John👍</p>
//     </div>

//     <div className='w-96 h-52 p-2 mt-10 border-2 bg-teal-300	   rounded-2xl'>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur assumenda quisquam harum eligendi sapiente 
//             nesciunt cum explicabo accusantium corrupti 
//             laudantium aliquam dignissimos, voluptas corporis! Maiores illum quod quae vero.</p>
//             <p className='text-2xl mt-4'>⭐⭐⭐⭐⭐ Elizbeth 👍</p>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default CustomersReview



import React from 'react';

function CustomersReview() {
  return (
    <div className="mx-4 my-16">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-xl font-bold">What customers say about</h1>
        <h1 className="text-xl font-bold mt-1">GREENMIND?</h1>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-10">
        {/* Review 1 */}
        <div className="w-full lg:w-1/3 h-auto p-6 border-2 bg-teal-300 rounded-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur
            assumenda quisquam harum eligendi sapiente nesciunt cum explicabo
            accusantium corrupti laudantium aliquam dignissimos, voluptas corporis!
            Maiores illum quod quae vero.
          </p>
          <p className="text-2xl mt-4">⭐⭐⭐⭐⭐ Alex John 👍</p>
        </div>

        {/* Review 2 */}
        <div className="w-full lg:w-1/3 h-auto p-6 border-2 bg-teal-300 rounded-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur
            assumenda quisquam harum eligendi sapiente nesciunt cum explicabo
            accusantium corrupti laudantium aliquam dignissimos, voluptas corporis!
            Maiores illum quod quae vero.
          </p>
          <p className="text-2xl mt-4">⭐⭐⭐⭐⭐ Elizbeth 👍</p>
        </div>
      </div>
    </div>
  );
}

export default CustomersReview;
