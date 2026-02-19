import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const CounterCard = ({ count, isDarkModeEnabled }: any) => {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const gradientColors = isDarkModeEnabled ? ['#c5c6f2', '#7a70e3', '#5e4d89'] : ['#ffd268', '#f8eb59', '#d7fb57'];
    const lightTheme = {
        gradientColors: ['#ffd268', '#f8eb59', '#d7fb57'],
        text: '#000'
    }
    const darkTheme = {
        gradientColors: ['#c5c6f2', '#7a70e3', '#5e4d89'],
        text: '#fff'
    }
    return (
        <LinearGradient colors={gradientColors} style={{ width: width * 0.85, height: height * 0.45, ...styles.card }}>
            <Text style={{ fontSize: 100, color: isDarkModeEnabled ? darkTheme.text : lightTheme.text }}>{count}</Text>
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