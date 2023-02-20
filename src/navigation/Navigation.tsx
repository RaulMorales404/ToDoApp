import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import AddNewTodo from '../screens/addNewTodo/AddNewTodo';
const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen
                options={
                    {
                        headerShown: false,
                    }
                }
                name="Home" component={Home} />
            <Stack.Screen name="AddNewTodo" component={AddNewTodo}
                options={{ presentation: 'modal',
            title:'New Task' }}
            />
        </Stack.Navigator>
    )
}

export default Navigation