import React, { useState } from 'react'
import { jsData } from '../../data/todoArray';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import CartList from './CartList';
import { List } from '../../interfaces/dataList';
interface Props {
    data: List[],
}
const ListTodos = ({ data }: Props) => {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                {data.length > 0 ? <FlatList
                    data={data}
                    renderItem={({ item }) => <CartList itemList={item} />}
                    keyExtractor={(item) => item.id.toString()}
                /> : <View style={{
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: '#4c4c4c34'
                    }}>
                        No tasks to be done
                    </Text>
                </View>}


            </View>
        </SafeAreaView >

    )
}

export default ListTodos;