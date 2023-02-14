import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import CategoryBox from '../../../components/CategoryBox';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({ navigation }) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter(product => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);

        } else if (selectedCategory && keyword) {
            const updatedProducts = products
                .filter(product => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);

        } else if (!selectedCategory && keyword) {
            const updatedProducts = products
                .filter(product => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);

        } else if (!selectedCategory && !keyword) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image} />
        )
    }

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product });
        }

        return (
            <ProductHomeItem
                onPress={() => onProductPress(item)}
                {...item} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onSearch={setKeyword} keyword={keyword} showSearch title='Find All You Need' />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.productsList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 24 }}>Not Found Item</Text>}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />

        </SafeAreaView>
    )
}

export default React.memo(Home)
