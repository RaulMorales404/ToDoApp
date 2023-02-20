import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'

const AddNewTodo = () => {
    const [state, setState] = useState({
        name: '',
        date: new Date(),
        isToday: false,
        open: false,
    })


    const getTime = () => {
        let formatTime = state.date.toLocaleTimeString('en-US').split(':');
        let getShift = formatTime.toString().split(' ')[1];
        let time = `${formatTime[0]}:${formatTime[1]} ${getShift}`;
        return time;
    }

    const showDatetIme = () => {

        if (Platform.OS == 'ios') {
            return (<DateTimePicker
                value={state.date}
                mode='time'
                is24Hour={true}
                onChange={(event, selectedData) => setState({ ...state, date: selectedData! })}
            />)
        } else {
            return (
                <>
                    <TouchableOpacity style={{ ...styles.buttonAndroiData }}
                        onPress={() => {
                            setState({ ...state, open: true })
                        }}
                        activeOpacity={0.8}
                    >
                        <Text style={{
                            ...styles.textAndroiDate,
                            color: state.open ? '#1c7ae2' : '#000'
                        }}> {getTime()}  </Text>
                    </TouchableOpacity >
                    <DatePicker
                        modal
                        title={' '}
                        open={state.open}
                        mode='time'
                        androidVariant='iosClone'
                        date={state.date}
                        onConfirm={(value) => {
                            setState({
                                ...state,
                                date: value!,
                                open: false,
                            });
                        }}
                        onCancel={() => setState({ ...state, open: false })} />
                </>
            )
        }

    }
    return (
        <View style={{ ...styles.container }}>
            <Text style={{ ...styles.title }}>
                Add Task
            </Text>
            <View style={{ ...styles.containerInput }}>
                <Text style={{ ...styles.inputTitel }}>Name</Text>
                <TextInput style={{ ...styles.input }}
                    placeholder='Task'
                    placeholderTextColor="00000030"
                    onChangeText={(value) => setState({ ...state, name: value })}
                />
            </View>
            <View style={{ ...styles.containerInput }}>
                <Text style={{ ...styles.inputTitel }}>Hour</Text>
                {showDatetIme()}
            </View>
            <View style={{ ...styles.containerInput }}>
                <Text style={{ ...styles.inputTitel }}>Today</Text>
                <Switch
                    value={state.isToday}
                    onValueChange={(value) => setState({ ...state, isToday: value })}
                />
            </View>
            <View style={{
                ...styles.containerInput,
                flexDirection: 'column',
            }}>
                <TouchableOpacity style={{ ...styles.btnDone }}
                    activeOpacity={0.8}
                >
                    <Text style={{ color: '#fff' }}>
                        Done
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: '#737373' }}>
                    If you disable today, the task will be considered as tomorrow</Text>
            </View>


            <Text> {JSON.stringify(state, null, 4)} </Text>

        </View>
    )
}

export default AddNewTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 35,
        color: '#000'
    },
    inputTitel: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        color: '#000'
    },
    input: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '80%',
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buttonAndroiData: {
        backgroundColor: '#e7e8eb',
        padding: 8,
        borderRadius: 8,
    },
    btnDone: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 15,
    },
    textAndroiDate: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400'
    }
})