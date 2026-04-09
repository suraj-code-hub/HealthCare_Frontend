import React from 'react'
import Cards from '../pages/Cards'
import {Link} from 'react-router-dom'
import Api from '../services/Api'
// import ContactUS from './ContactUS'
// import AboutUS from './AboutUS'
const Home = () => {
  return (
    <div>
      {/* <AboutUS /> */}
      {/* <ContactUS */}
        <Cards />
         <Api />
    </div>
  )
}

export default Home