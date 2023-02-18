import React, { useState } from 'react';
import ListTodos from '../components/ListTodos'
import { View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import { useHome } from '../../hooks/useHome';


const Home = () => {
    const { localData,
        changeShowComplit,
        showComplited,
        jsData,
        validateShowTastComplit } = useHome();

    return (
        <View style={{
            flex: 1,
            marginTop: 70,
            paddingHorizontal: 15
        }}>
            <Header />
            <Title title='Today' message={showComplited} showSeconTitle={true} action={changeShowComplit} />
            <ListTodos data={localData.filter((item) => validateShowTastComplit(item))} />
            <Title title='Tomorrow' />
            <ListTodos data={jsData.filter((item) => item.isToday)} />
        </View>



    )
}

export default Home