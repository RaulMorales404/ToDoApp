import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    showSeconTitle?: boolean,
    action?: () => void,
    message?: boolean,
}
const Title = ({ title, message, showSeconTitle = false, action }: Props) => {


    return (
        <View style={{
            marginBottom: 30,
            justifyContent: 'space-between',
            flexDirection: 'row',
        }}>
            <Text style={{
                fontSize: 60,
                color: '#000',
                fontWeight: '600',
            }}>
                {title}
            </Text>
            {showSeconTitle &&
                <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                    onPress={action}
                >
                    <Text style={{ fontSize: 17, color: '#4c8ef7' }}>
                        {message ? 'Hide Completed' : 'Show Completed'}
                    </Text>
                </TouchableOpacity>}

        </View>

    )
}

export default Title