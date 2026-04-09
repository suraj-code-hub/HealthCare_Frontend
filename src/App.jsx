// import React from 'react'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Api from './services/Api'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

// <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//        <Footer />

//     </BrowserRouter>


// {/* <>
//      <Navbar />
//     <Home />
//     <Api />
//     <Footer />
//     </>
//   )
// } */}

// export default App


import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Contact from './pages/ContactUS'
import About from './pages/AboutUS'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
    
   
  );
};

export default App;