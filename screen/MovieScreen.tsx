import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { HomeComponent } from '../components'
import { MovieTypes } from '../helper/Types'
import { requestMovieScreen as RequestMovieApi } from '../api/api'

export default function MovieScreen() {
    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        requestMovieScreen()
    },[])

    const requestMovieScreen = async () => {
        await RequestMovieApi((data) => setMoviesData(data))
    }
    
    return (
        <HomeComponent 
            type={"movie"}
            subTitle={MovieTypes}
            data={moviesData}
            onRefresh={requestMovieScreen}
        />
    )
}
