import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import ProductDetail from '../funcion/detail/ProductDetail';
import { TopNavigationImageTitleShowcase } from '../funcion/home/TopNavigationImageTitle';
import axios from 'axios';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);
  const [product, setProduct] = useState({}); 
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
          console.log(product);
        } catch (error) {
        }
      } fetchItems();
    }, 0);
    return () => clearTimeout(delayDebounceFn)
  }, [id]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />


  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={product.title} alignment='center' accessoryLeft={BackAction} />
      <TopNavigationImageTitleShowcase />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ProductDetail product={product}/>
      </Layout>
    </SafeAreaView>
  );
};