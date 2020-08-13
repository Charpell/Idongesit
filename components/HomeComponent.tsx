import React from 'react'
import { View, Text } from 'react-native'
import HomeHeader from './HomeHeader'
import Screen from './Screen'
import HomeRow from './HomeRow'

export default function HomeComponent() {
    return (
        <Screen>
            <HomeHeader />
            <HomeRow data={[
    { id: 1, data: "1" },
    { id: 2, data: "2" },
    { id: 3, data: "3" },
    { id: 4, data: "4" },
  ]}  />
        </Screen>
    )
}
