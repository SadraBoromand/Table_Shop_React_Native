import React from 'react'
import { ScrollView, Text, SafeAreaView, FlatList } from 'react-native';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { products } from '../../../data/products';
import styles from './styles';

const Favorites = ({ navigation }) => {

    const renderItem = ({ item, index }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return <FavoriteItem onPress={onProductPress} {...item} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favorites" />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => String(item?.id)}
            />
        </SafeAreaView>
    )
}

export default React.memo(Favorites)
