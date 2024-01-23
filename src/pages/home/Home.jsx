import React from 'react'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>Home Beer-Page</div>
        <Nav />
        <Link to="/beerlist"><button>Our Beers</button></Link>

    </>
  )
}

export default Home
