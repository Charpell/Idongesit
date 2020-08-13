import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function HomeHeader({ type }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                <FastImage source={'../assets/open-menu.png'} style={{ width: 20, height: 20 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Search', { type: type })}>
                <Feather name={"search"} size={20} />
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
