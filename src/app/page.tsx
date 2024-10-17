import React from 'react'
import Hero from './hero/page'
import About from './about/page'
import Footer from './footer'
import Categories from './categories/page'
import CustomersReview from './customersreview/page'

function Home() {
  return (
    <main>
    
      <Hero/>
      <br /><br /><br /><br /><br /><br />
      <About/>
      <Categories/>
      <CustomersReview/>

      <Footer/>


  
    </main>
  )
}

export default Home
