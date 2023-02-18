import React from 'react'
import { jsData } from '../../data/todoArray';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import CartList from './CartList';

const ListTodos = () => {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={jsData}
                    renderItem={({ item }) => <CartList itemList={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View>
        </SafeAreaView >

    )
}

export default ListTodos;