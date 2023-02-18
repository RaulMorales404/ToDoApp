import React from 'react'
import { List } from '../../interfaces/dataList';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from './CheckBox';

interface Props {
    itemList: List,
}
const CartList = ({ itemList, itemList: { text, hours, isCompleted } }: Props) => {
    return (
        <View style={{ ...styles.container }}>
            <CheckBox item={itemList} />
            <View>
                <Text style={{
                    ...styles.text,
                    textDecorationLine: isCompleted ? 'line-through' : 'none',
                    color: isCompleted ? '#73737330' : '737373'
                }}>
                    {text}
                </Text>
                <Text style={{
                    ...styles.time,
                    textDecorationLine: isCompleted ? 'line-through' : 'none',
                    color: isCompleted ? '#73737330' : '737373'
                }}>{hours}</Text>
            </View>

        </View>
    )
}

export default CartList;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        color: '#a3a3a3',
        fontWeight: '500'
    }
})