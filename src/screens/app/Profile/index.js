import React from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import styles from './styles';

const Profile = () => {
    const num = 10;

    const onLogout = () => {
        console.log('logout')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Profile" showLogout onLogout={onLogout} />

            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Hi Sadra</Text>
                    <Text style={styles.email}>sadrabroo@gmail.com</Text>

                    <ListItem title="My Listing" subtitle={`You have ${num} listing`} />
                    <ListItem title="Setting" subtitle="Account, FAQ, Contact" />
                </View>

                <Button style={{ flex: 0 }} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)
