import React from 'react'
import Header from '../Components/Header'
import MoviesCart from '../Components/MoviesCart'
import Trailers from '../Components/Trailers'

const Home = () => {
  return (
    <div>
       <Header/>
       <MoviesCart/>
       <Trailers/>
    </div>
  )
}

export default Home
