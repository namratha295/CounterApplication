import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CounterButton = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.counterBtn}>
            <Text style={{ fontSize: 20 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CounterButton

const styles = StyleSheet.create({
    counterBtn: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        backgroundColor: '#F2F2F2',
        borderColor: '#f3f2f2',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    }
})