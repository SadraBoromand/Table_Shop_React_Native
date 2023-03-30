import React, { useState } from 'react'
import {
    SafeAreaView, Text, ScrollView,
    TouchableOpacity, Pressable, ActivityIndicator,
    Image, View, KeyboardAvoidingView
} from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input';
import { categories } from '../../../data/categories';
import Button from '../../../components/Button';

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    console.log('values', values)

    const goBack = () => {
        navigation.goBack();
    }

    const UploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary({ mediaType: 'photo' });
        console.log('result', result);
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]));
            setLoading(false);
        }
    }

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    }

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='height'>

                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={UploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View style={styles.imageCont} key={image?.fileName}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/close.png')} />
                                </Pressable>
                            </View>
                        ))}

                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input placeholder="Listing Title" lable='Title' value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                    <Input placeholder="Select the Category" lable='Category' value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories} />
                    <Input placeholder="Enter price in USD" lable='Price' value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType='numeric' />
                    <Input style={styles.textarea} placeholder="Tell us more..." lable='Description' value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline />

                    <Button title="Submit" style={styles.button} />

                </KeyboardAvoidingView>
            </ScrollView>


        </SafeAreaView>
    )
}

export default React.memo(CreateListing)
