import React from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import styles from './styles';

const Profile = ({ navigation }) => {
    const num = 10;

    const onLogout = () => {
        console.log('logout')
    }

    const onSettingPress = () => {
        navigation.navigate("Settings");
    }

    const onNewListingPress = () => {
        navigation.navigate("CreateListing");
    }

    const onMyListingsPress = () => {
        navigation.navigate("MyListings");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Profile" showLogout onLogout={onLogout} />

            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Hi Sadra</Text>
                    <Text style={styles.email}>sadrabroo@gmail.com</Text>

                    <ListItem onPress={onMyListingsPress} title="My Listing" subtitle={`You have ${num} listing`} />
                    <ListItem onPress={onSettingPress} title="Setting" subtitle="Account, FAQ, Contact" />
                </View>

                <Button onPress={onNewListingPress} style={{ flex: 0 }} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)
