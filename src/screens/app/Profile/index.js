import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';

const Profile = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Text>Profile</Text>

            <TouchableOpacity activeOpacity={0.6} style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'black',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 10,
                right: 15,
                elevation: 3
            }}
                onPress={() => console.log('click')}
            >
                <Text style={{ color: 'white', fontSize: 32 }}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default React.memo(Profile)
