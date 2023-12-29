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
            <View style={styles.group47}>
                <View style={styles.group51}>
                    <View style={styles.rectangle126} />
                    <Text style={styles.buynow}>
                        {`Buy now`}
                    </Text>
                </View>
                <Svg style={styles.vector} width="18" height="13" viewBox="0 0 18 13" fill="none" >
                    <Path d="M9.2236 2.3096L8.89798 2.03016C8.13901 1.37884 6.82964 0.5 5.34186 0.5C3.9938 0.5 2.88952 0.885048 2.13246 1.50458C1.38238 2.11839 0.950195 2.9785 0.950195 4.00256C0.950195 5.12195 1.48312 6.072 2.35849 6.96678C3.24213 7.87003 4.42423 8.66663 5.64302 9.4854L5.64322 9.48554L5.68077 9.51079C6.80129 10.2643 8.00592 11.0744 8.93928 11.9805L8.591 12.3393M9.2236 2.3096L5.36419 9.90044C2.94788 8.27718 0.450195 6.59899 0.450195 4.00256C0.450195 1.64615 2.46127 0 5.34186 0C7.0131 0 8.43864 0.977095 9.2236 1.65073C10.0086 0.977095 11.4373 0 13.1093 0C15.9891 0 18.0002 1.64615 18.0002 4.00256C18.0002 6.59897 15.5022 8.27697 13.0873 9.89918L13.0854 9.90044M9.2236 2.3096L9.54922 2.03016C10.3078 1.37915 11.6205 0.5 13.1093 0.5C14.457 0.5 15.561 0.885031 16.318 1.50456C17.068 2.11837 17.5002 2.9785 17.5002 4.00256C17.5002 5.12221 16.9669 6.07241 16.0913 6.96722C15.2073 7.87046 14.0251 8.66689 12.8067 9.48534L13.0854 9.90044M9.2236 2.3096L12.8066 9.48539L13.0854 9.90044M8.591 12.3393L8.93835 11.9796C8.98721 12.0268 9.08128 12.0714 9.20126 12.0714H9.24753C9.3672 12.0714 9.4606 12.0269 9.50927 11.98C9.50935 11.9799 9.50943 11.9798 9.50951 11.9797L9.85699 12.3393M8.591 12.3393C8.74337 12.4864 8.96673 12.5714 9.20126 12.5714H9.24753C9.48286 12.5714 9.70543 12.4858 9.85699 12.3393M8.591 12.3393H9.85699M9.85699 12.3393C10.764 11.4603 11.9438 10.6669 13.0854 9.90044" stroke="black" />
                </Svg>

                <Text style={styles.artsy}>
                {props.product.title}
                </Text>
                <Text style={styles.walletwithchainStyle362520YK0G1000}>
                    {`Wallet with chain\n`}<Text style={{  "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "lineHeight": 18, "color": "rgba(132, 132, 132, 1)" }}>{`Style #36252 0YK0G 1000\n`}</Text><Text style={{ "fontFamily": "Work Sans", "fontSize": 14, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "lineHeight": 21, "color": "rgba(0, 0, 0, 1)" }}>{`\n`}</Text>
                </Text>
                <ImageBackground style={styles.image1} source={{ uri: /* dummy image */props.product.image }} />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    group47: {
        flexShrink: 0,
        height: 162,
        width: 351
    },
    group51: {
        position: "absolute",
        flexShrink: 0,
        top: 131,
        height: 31,
        left: 192,
        width: 97
    },
    rectangle126: {
        position: "absolute",
        flexShrink: 0,
        width: 97,
        height: 31,
        backgroundColor: "rgba(0, 0, 0, 1)"
    },
    buynow: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        left: 6,
        width: 84,
        height: 16,
        textAlign: "center",
        color: "rgba(251, 251, 251, 1)",
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 0
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        left: 333,
        width: 18,
        height: 13,
        overflow: "visible"
    },
    artsy: {
        position: "absolute",
        flexShrink: 0,
        top: 11,
        left: 185,
        width: 70,
        height: 29,
        textAlign: "center",
        color: "rgba(0, 0, 0, 1)",
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 0
    },
    walletwithchainStyle362520YK0G1000: {
        position: "absolute",
        flexShrink: 0,
        top: 44,
        left: 191,
        width: 151,
        height: 40,
        textAlign: "left",
        color: "rgba(0, 0, 0, 1)",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 21
    },
    image1: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        width: 170,
        height: 155
    }

});

export default ProductDetail;
