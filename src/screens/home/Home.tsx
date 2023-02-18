import React, { useState } from 'react';
import ListTodos from '../components/ListTodos'
import { TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import { useHome } from '../../hooks/useHome';

import Icon from 'react-native-vector-icons/Ionicons';


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
            <View style={{
                backgroundColor: '#ffffff',
                position: 'absolute',
                bottom: 20,
                right: 10,
                borderRadius: 100,
                width: 57,
                height: 57,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: .3,
                shadowRadius: 5,
                elevation: 10,


            }}>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',


                    }}
                    activeOpacity={0.8}
                >

                    <Icon
                        style={{
                            position: 'absolute',
                            top: -10,
                            left: -5,
                        }}
                        name="add-circle" size={72} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>



    )
}

export default Home