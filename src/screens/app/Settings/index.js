import React, { useState } from 'react'
import { SafeAreaView, Text, ScrollView, Linking, Image, View, Pressable } from 'react-native';
import Button from '../../../components/Button';
import EditableBox from '../../../components/EditableBox';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import styles from './styles';

const Settings = ({ navigation }) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: 'user', email: "user@mail.com" });

    const onEditPress = () => {
        setEditing(!editing);
    }

    const onSave = () => {
        setEditing(false);
    }

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }))
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header showBack onBackPress={goBack} title="Settings" />

            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox label='User' onChangeText={v => onChange('name', v)} value={values.name} editable={editing} />
                <EditableBox label='Email' onChangeText={v => onChange('email', v)} value={values.email} editable={editing} />
                {editing && (
                    <Button style={styles.button} onPress={onSave} title='Save' />
                )}
                <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact US" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />

            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings)
