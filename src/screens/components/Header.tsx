import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <Image
                source={{ uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg' }}
                style={{
                    width: 80,
                    height: 80,
                    alignSelf: 'flex-end',
                    borderRadius: 100,
                }}
            />
        </View>
    )
}

export default Header