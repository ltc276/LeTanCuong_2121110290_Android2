import { Icon, Text, Button } from "@ui-kitten/components";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
    StyleSheet,
    View
} from "react-native";

function AddCart(props) {
    const [cart, setCart] = useState([]);
    const [itemIndex, setitemIndex] = useState(1);
    return (
        <View style={{ flex: 1 }}>
            {cart.length === 0 && (
                <Text>Cart: (empty)</Text>
            )}
            {cart.length > 0 && (
                <Text>Cart: {JSON.stringify(cart)}</Text>
            )}
            <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => {
                    setCart([...cart, ` item ${itemIndex}`]);
                    setitemIndex(itemIndex + 1);
                }}
            >
                Add to Cart
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default AddCart;
