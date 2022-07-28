import React from 'react'
import './Home.scss'

// import About from '../../components/About'
import Banner from '../../components/HomePage/Banner'
import Contact from '../../components/HomePage/Contact'
import Footer from '../../components/HomePage/Footer'
import Header from '../../components/HomePage/Header'
import Service from '../../components/HomePage/Service'

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
