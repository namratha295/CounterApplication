import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterCard from '../components/CounterCard'
import CounterButton from '../components/CounterButton'

const Home = () => {
    const [count, setCount] = useState(0);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const toggleSwitch = () => setIsDarkModeEnabled(!isDarkModeEnabled);
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
        <View style={[styles.counterContainer, { backgroundColor: isDarkModeEnabled ? '#646464' : '#fff' }]}>
            <Text style={[styles.counterTitle, { color: isDarkModeEnabled ? '#fff' : '#000' }]}>Counter Application</Text>
            <View style={styles.themeContainer}>
                <Text style={[styles.themeFont, { color: isDarkModeEnabled ? '#fff' : '#000' }]}>
                    {isDarkModeEnabled ? "Dark Mode" : "Light Mode"}
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isDarkModeEnabled}
                />
            </View>
            <CounterCard count={count} isDarkModeEnabled={isDarkModeEnabled} />
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
        alignItems: 'center',
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
    },
    themeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20
    },
    themeFont: {
        fontSize: 22
    }
})