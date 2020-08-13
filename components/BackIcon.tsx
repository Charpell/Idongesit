import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { black } from "../helper/Color";

const BackIcon = ({ style, color }) => {
    const navigation = useNavigation()
  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Ionicons name={"md-arrow-back"} size={32} color={color} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BackIcon;