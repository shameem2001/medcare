import React from 'react'
// import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Service from './components/Service'

export default function Home() {
  return (
    <>

        <Header />
        <Banner />
        <Service />
        {/* <About /> */}
        <Contact />
        <Footer />
    </>
  )
}
