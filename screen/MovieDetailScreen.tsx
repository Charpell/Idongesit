import React, { useState , useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { BackIcon, MovieBackdrop, MovieRating, MovieGenres, MovieOverview, MovieCast, MovieImages, MovieRecommendations, MoviePlayButton } from '../components'

import { requestMovieDetailScreen } from '../api/api'
import { white, yellow, black } from '../helper/Color'
import { FontAwesome } from '@expo/vector-icons'

export default function MovieDetailScreen({ navigation, route }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [movieData, setMovieData] = useState({})
    const [credit, setCredit] = useState({})
    const [images, setImages] = useState({})
    const [videos, setVideos] = useState({})
    const [recommendations, setRecommendations] = useState({})

    useEffect(() => {
        requestInfoDetail()
    }, [])

    const requestInfoDetail = async () => {
        await requestMovieDetailScreen(route.params.id, callbackRequest)
    }

    const callbackRequest = (response) => {
        const [movieData, credit, images, videos, recommendations] = response
        setMovieData(movieData)
        setCredit(credit)
        setImages(images)
        setVideos(videos)
        setRecommendations(recommendations)
        setIsLoaded(true)
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <StatusBar translucent backgroundColor={"transparent"} />
                <MovieBackdrop backdrop={movieData.backdrop_path}>
                    {
                        isLoaded && (
                            <View>
                                <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 24, color: white}}>{movieData.title}</Text>
                                <MovieRating rating={movieData.vote_average} />
                            </View>
                        )
                    }
                </MovieBackdrop>
                <View style={styles.movieDetailWrapper}>
                    <View style={styles.movieDetail}>
                        {
                            isLoaded && (
                                <>
                                    <MovieGenres genre={movieData.genres} />
                                    <MovieOverview overview={movieData.overview} />
                                    <MovieCast credit={credit} />
                                    <MovieImages images={images} />
                                    <MovieRecommendations recommendations={recommendations} />
                                </>
                            )
                        }
                    </View>
                    <MoviePlayButton videoData={videos} navigation={navigation} />
                </View>
            </ScrollView>
            <BackIcon style={{ marginLeft: 5, position: "absolute", top: 40 }} color={white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    scrollview: {
        backgroundColor: "#ffffff",
        flexGrow: 1
    },
    movieDetailWrapper: {
        flex: 1,
        backgroundColor: black,
      },
  movieDetail: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: white,
  },
})
