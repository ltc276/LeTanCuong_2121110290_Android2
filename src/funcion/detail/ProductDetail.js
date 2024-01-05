import { Icon, Text } from "@ui-kitten/components";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View, ScrollView,
    ImageBackground,
} from "react-native";
import { Svg, Path } from 'react-native-svg';


const images =
    "https://fjallraven.co.nz/cdn/shop/products/kanken_23510-228_a_main_fjr_1100x.png?v=1695770263";

function ProductDetail(props) {
    return (
        <ScrollView>
            <View style={styles.detail}>
                <ImageBackground style={styles.image1} source={{ uri: /* dummy image */props.product.image }} resizeMode="contain" />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detail: {
        flexShrink: 0,
        height: 262,
        width: 351
    },
    image1: {
        position: "absolute",
        flexShrink: 0,
        width: 343,
        height: 213,
        backgroundColor: "rgba(196, 196, 196, 1)",
        borderRadius: 32
    }

});

export default ProductDetail;
