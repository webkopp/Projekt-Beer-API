import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import axios from "axios"
import BeerCard from '../beerCard/BeerCard'


const BeerList = () => {

    const [beers, setBeers] = useState([])


    const api = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(api)
            console.log(resp)
            setBeers(resp.data)
        }
        fetchApi()
    }, [])

    return (
        <>
            <Nav />
            <div>BeerList</div>
            {beers.map((beer, index) => {
                return (
                    <div key={index}>
                        <BeerCard
                            beer={beer}
                        />
                    </div>
                )
            })}
        </>
  )
}

export default BeerList
