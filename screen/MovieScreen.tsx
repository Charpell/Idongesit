import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { HomeComponent } from '../components'
import { MovieTypes } from '../helper/Types'
import { requestMovieScreen as RequestMovieApi } from '../api/api'

export default function MovieScreen() {
    const [moviesData, setMoviesData] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        requestMovieScreen()
    },[])

    const requestMovieScreen = async () => {
        setIsRefreshing(true)
        await RequestMovieApi((data) => setMoviesData(data))
        setIsRefreshing(false)
    }
    
    return (
        <HomeComponent 
            type={"movie"}
            subTitle={MovieTypes}
            data={moviesData}
            onRefresh={requestMovieScreen}
            refreshing={isRefreshing}
        />
    )
}
