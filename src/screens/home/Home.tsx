import React from 'react';
import ListTodos from '../components/ListTodos'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import { useHome } from '../../hooks/useHome';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

const Home = ({ navigation }: Props) => {
    const { localData,
        changeShowComplit,
        showComplited,
        jsData,
        validateShowTastComplit } = useHome();

    const addNewTask = () => {
        navigation.navigate('AddNewTodo');
    }

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
            <View style={{ ...styles.container }}>
                <TouchableOpacity style={{ ...styles.buttonAdd }}
                    activeOpacity={0.8}
                    onPress={addNewTask}
                >
                    <Icon
                        style={{ ...styles.icon }}
                        name="add-circle" size={72} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>



    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 20,
        right: 10,
        borderRadius: 100,
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 10,
    },
    buttonAdd: {
        // position: 'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',
        // zIndex: 9999,
        // backgroundColor: 'red',
        // width:50,
    },
    icon: {
        // position: 'absolute',
        // top: -10,
        // left: -5,
    }
})