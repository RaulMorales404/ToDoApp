import React, { useState } from 'react';
import ListTodos from '../components/ListTodos'
import { View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import { jsData } from '../../data/todoArray';
import { List } from '../../interfaces/dataList';

function Home() {

    const [localData, setLocalData] = useState(
        jsData.sort((a: any, b: any) => a.isCompleted - b.isCompleted)
    )
    const [showComplited, setShowComplited] = useState(false)
    const changeShowComplit = () => {
        setShowComplited(!showComplited);
    }
    const validateShowTastComplit = (item: List) => {
        return showComplited ? !item.isToday && item.isCompleted : !item.isToday;
    }

    return (
        <View style={{
            flex: 1,
            marginTop: 70,
            paddingHorizontal: 15
        }}>
            <Header />
            <Title title='Today' showSeconTitle={true} action={changeShowComplit} />
            <ListTodos data={localData.filter((item) => validateShowTastComplit(item))} />
            <Title title='Tomorrow' />
            <ListTodos data={jsData.filter((item) => item.isToday)} />
        </View>



    )
}

export default Home