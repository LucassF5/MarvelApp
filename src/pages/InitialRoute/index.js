import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Slider from '../Slider/Slider'

export default function InitialRoute({ navigation }) {
    return (
        <View>
            <Slider />
        </View>
    )
}