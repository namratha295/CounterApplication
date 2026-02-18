import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const CounterCard = ({ count }: any) => {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const gradientColors = ['#ffd268', '#f8eb59', '#d7fb57'];
    return (
        <LinearGradient colors={gradientColors} style={{ width: width * 0.85, height: height * 0.45, ...styles.card }}>
            <Text style={{ fontSize: 100 }}>{count}</Text>
        </LinearGradient>
    )
}

export default CounterCard

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#f3f2f2',
        borderWidth: 1,
        shadowColor: '#a7a6a6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    }
})