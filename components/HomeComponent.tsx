import React from 'react'
import { View, Text , ScrollView, RefreshControl, StyleSheet } from 'react-native'
import HomeHeader from './HomeHeader'
import Screen from './Screen'
import HomeRow from './HomeRow'
import { normalize } from '../helper/FontSize'
import { orange } from '../helper/Color'
import { useNavigation } from '@react-navigation/native'

export default function HomeComponent({ data, subTitle, type, onRefresh, refreshing }) {
    const title = type === "tv" ? "TV Shows" : "Movies"
    return (
        <Screen>
            <HomeHeader type={type} />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View>
                    <Text style={styles.screenTitle}>{title}</Text>
                    <View style={styles.titleBar} />
                </View>

                {
                    subTitle.map((title, index) => {
                        return (
                            <HomeRow key={index} data={{ ...data[index] }.results} title={title} type={type} />
                        )
                    })
                }
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screenTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: normalize(30),
        margin: 16,
        marginBottom: 0,
    },

    titleBar: {
      width: 30,
      height: 5,
      backgroundColor: orange,
      marginTop: 2,
      marginBottom: 12,
      marginLeft: 16,
    },
})
