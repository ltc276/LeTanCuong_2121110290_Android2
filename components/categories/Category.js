import {Dimensions,FlatList,ImageBackground,Text,TouchableOpacity,View,} from "react-native";
import Header from '../Header';
import { useEffect, useState } from "react";
import axios from "axios";
const height = Dimensions.get("screen").height;
const images = [
  {
    name: "Electricals",
    image: require("../../assets/components/Category/electronics.png"),
  },
  {
    name: "Jewelry",
    image: require("../../assets/components/Category/jewelry.png"),
  },
  {
    name: "Men",
    image: require("../../assets/components/Category/menclothing.jpg"),
  },
  {
    name: "Women",
    image: require("../../assets/components/Category/womenclothing.png"),
  },
];

export default function Category({ navigation }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function getData() {
      axios
        .get(`https://fakestoreapi.com/products/categories`)
        .then(function (response) {
          setCategories(response.data);
        })
        .catch(function (error) {
          alert(error.message);
        })
        .finally(function () {
          console.log("Finally called");
        });
    }
    getData();
  }, []);
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          height: height / (categories.length - 1),
        }}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("ProductCategory", { category: item })
        }
      >
        <ImageBackground
          source={images[index].image}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,.25)",
              paddingHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 30,
                textTransform: "capitalize",
              }}
            >
              {item}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header Title={"Category"} navigation={navigation} />
      <View style={{ flex: 1 }}>
        <FlatList
          renderItem={({ item, index }) => renderItem(item, index)}
          data={categories}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
      </View>
    </View>
  );
}
