import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ( { beer }) => {
  // console.log(beer)
  return (
    <>
        <h2>{beer.name}</h2>
            <img src={beer.image_url} alt="" />
            {/* Durch Link wird das Product.id an meinem URL vo Browser weitergegeben */}
            <Link to={`/beerlist/${beer._id}`} >Read More</Link>
    </>
  )
}

export default BeerCard