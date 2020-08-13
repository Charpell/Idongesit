import React from 'react'
import { View, Text, FlatList, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { normalize } from '../helper/FontSize'
import { orange } from '../helper/Color'
import { useNavigation } from '@react-navigation/native'
import MoviePoster from './MoviePoster'

export default function HomeRow({ data, title, type }) {
    const navigation = useNavigation()
    
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.text}>{title}</Text>
                <TouchableNativeFeedback onPress={() => navigation.navigate("Movielist", { data, type, title })}>
                <Text style={styles.textMore}>More</Text>
                </TouchableNativeFeedback>
            </View>
            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => <MoviePoster item={item} navigation={navigation} type={type} />}
                keyExtractor={(item) => item.id.toString()}
                style={{ margin: 8, marginTop: 4 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: normalize(15),
        margin: 16,
        marginBottom: 0,
        fontFamily: "Montserrat-SemiBold",
      },
    
      textMore: {
        fontSize: normalize(12),
        margin: 16,
        marginBottom: 0,
        fontFamily: "Montserrat-SemiBold",
        alignSelf: "flex-end",
        color: orange,
      },
})

