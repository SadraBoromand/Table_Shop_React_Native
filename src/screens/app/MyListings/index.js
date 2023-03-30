import React from 'react'
import { SafeAreaView, FlatList } from 'react-native';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { products } from '../../../data/products';
import styles from './styles';

const MyListings = ({ navigation }) => {

    const renderItem = ({ item, index }) => {
        const onProductPress = () => {
            navigation.navigate('My Listings', { product: item })
        }
        return <FavoriteItem
            icon={require('../../../assets/delete.png')}
            onPress={onProductPress}
            {...item} />
    }

    const goBack = () => navigation.goBack();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favorites" showBack onBackPress={goBack} />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => String(item?.id)}
            />
        </SafeAreaView>
    )
}

export default React.memo(MyListings)
