import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { List } from '../../interfaces/dataList'

interface Props {
    item: List,
}

const CheckBox = ({ item: { isCompleted, isToday } }: Props) => {
    if (isToday) return <View style={{ ...styles.check, ...styles.checkTomorrow }} />

    return (
        <TouchableOpacity style={{
            ...styles.check,
            backgroundColor: isCompleted ? '#000' : '#fff',
        }}
            activeOpacity={0.6}
        >

            <Text style={{ ...styles.text }}>{
                isCompleted ? '1' : '0'
            }</Text>

        </TouchableOpacity >
    )
}

export default CheckBox
const styles = StyleSheet.create({
    check: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        color: '#ffffff'
    },
    checkTomorrow: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 100,
    }


})