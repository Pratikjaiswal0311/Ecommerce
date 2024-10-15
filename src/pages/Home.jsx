import React from 'react'
import BestSeller from '../component/BestSeller'
import Hero from '../component/Hero'
import LatestCollection from '../component/LatestCollection'
import NewsLetterBox from '../component/NewsLetterBox'
import OurPolicy from '../component/OurPolicy'
const Home = () => {
  return (
    <div>

      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home