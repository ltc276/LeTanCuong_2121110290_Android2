import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const CartScreen = ({ navigation }) => {
    const [cart, setCart] = useState([]);
    const [itemIndex, setitemIndex] = useState(1);
    const navigateHome = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {cart.length === 0 && (
                        <Text>Cart: (empty)</Text>
                    )}
                    {cart.length > 0 && (
                        <Text>Cart: {JSON.stringify(cart)}</Text>
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        style={{ margin: 10 }}
                        onPress={() => {
                            setCart([...cart, ` item ${itemIndex}`]);
                            setitemIndex(itemIndex + 1);
                        }}
                    >
                        Add to Cart
                    </Button>
                </View>
            </Layout>
        </SafeAreaView>
    );
};