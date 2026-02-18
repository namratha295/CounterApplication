import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterCard from '../components/CounterCard'
import CounterButton from '../components/CounterButton'

const Home = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterTitle}>Counter Application</Text>
            <CounterCard count={count} />
            <View style={styles.counterBtnContainer}>
                <CounterButton title="+"
                    onPress={handleIncrement}
                />
                <CounterButton title="-"
                    onPress={handleDecrement}
                />
                <CounterButton title="Reset"
                    onPress={handleReset}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    counterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        width: '80%'
    },
    counterTitle: {
        fontSize: 28,
        marginBottom: 35
    }
})