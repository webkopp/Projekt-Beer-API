import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const BeerDetails = () => {
    const beerId = useParams()
    console.log(beerId)

    const [beer, setBeer] = useState([])

    const einBeerApi = `https://ih-beers-api2.herokuapp.com/beers/${beerId.ichBinEinId}`
    console.log(einBeerApi)
    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(einBeerApi)
            console.log(resp)
            setBeer(resp.data)
        }
        fetchApi()


    },[beerId])
    
    console.log(beer)

  return (
    <>
        <section>
            {
                beer ?
                (
                    <div>
                        <h2>{beer.name}</h2>
                        <img src={beer.image_url} />
                        <h3>{beer.tagline}</h3>
                        <p>{beer.contributed_by}, {beer.first_brewed}</p>
                        <h4>{beer.brewers_tips}</h4>
                    </div>
                ) : (
                    <p>
                    Loadings.....
                    </p>
                )
            }
        </section>
        <Link to="/bearlist"><button>Go Back</button></Link>
        <Link to="/"><button>Go to Beers</button></Link>
    </>
  )
}

export default BeerDetails
