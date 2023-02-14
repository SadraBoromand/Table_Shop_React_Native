import React, { memo } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const ListItem = ({ title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
        </View>
    )
}

export default React.memo(ListItem)
