import React from 'react';
import { SafeAreaView, View, ScrollView, ImageBackground } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { Image, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Svg, Path } from 'react-native-svg';
import Product from '../funcion/home/Product';
import { TopNavigationImageTitleShowcase } from '../funcion/home/TopNavigationImageTitle';
import axios from 'axios';

export const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
          console.log(products);
        } catch (error) {
        }
      } fetchItems();
    }, 0);
    return () => clearTimeout(delayDebounceFn)
  }, []);

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationImageTitleShowcase />
      <Divider />
      <Layout style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.frame5}>
          <View style={styles.icbaselinesearch}>
            <Svg style={styles.vector} width="24" height="24" viewBox="0 0 24 24" fill="none" >
              <Path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5918 12.7387 17.3348 10.7369 17.3333 8.66667C17.3333 6.95257 16.825 5.27696 15.8727 3.85173C14.9204 2.4265 13.5669 1.31567 11.9833 0.659715C10.3996 0.00375513 8.65706 -0.167874 6.97589 0.166531C5.29472 0.500937 3.75047 1.32636 2.53841 2.53841C1.32636 3.75047 0.500937 5.29472 0.166531 6.97589C-0.167874 8.65706 0.00375513 10.3996 0.659715 11.9833C1.31567 13.5669 2.4265 14.9204 3.85173 15.8727C5.27696 16.825 6.95257 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" fill="#4ECB71" />
            </Svg>

          </View>
          <View style={styles.materialsymbolsmicoutline}>
            <Svg style={styles._vector} width="20" height="26" viewBox="0 0 20 26" fill="none" >
              <Path d="M10 16.6667C8.88889 16.6667 7.94445 16.2778 7.16667 15.5C6.38889 14.7222 6.00001 13.7778 6.00001 12.6667V4.66666C6.00001 3.55555 6.38889 2.6111 7.16667 1.83332C7.94445 1.05555 8.88889 0.666656 10 0.666656C11.1111 0.666656 12.0556 1.05555 12.8333 1.83332C13.6111 2.6111 14 3.55555 14 4.66666V12.6667C14 13.7778 13.6111 14.7222 12.8333 15.5C12.0556 16.2778 11.1111 16.6667 10 16.6667ZM8.66667 26V21.9C6.35556 21.5889 4.44445 20.5555 2.93334 18.8C1.42223 17.0444 0.666672 15 0.666672 12.6667H3.33334C3.33334 14.5111 3.98356 16.0835 5.28401 17.384C6.58445 18.6844 8.15645 19.3342 10 19.3333C11.8444 19.3333 13.4169 18.6831 14.7173 17.3827C16.0178 16.0822 16.6676 14.5102 16.6667 12.6667H19.3333C19.3333 15 18.5778 17.0444 17.0667 18.8C15.5556 20.5555 13.6445 21.5889 11.3333 21.9V26H8.66667ZM10 14C10.3778 14 10.6947 13.872 10.9507 13.616C11.2067 13.36 11.3342 13.0435 11.3333 12.6667V4.66666C11.3333 4.28888 11.2053 3.97243 10.9493 3.71732C10.6933 3.46221 10.3769 3.33421 10 3.33332C9.62223 3.33332 9.30578 3.46132 9.05067 3.71732C8.79556 3.97332 8.66756 4.28977 8.66667 4.66666V12.6667C8.66667 13.0444 8.79467 13.3613 9.05067 13.6173C9.30667 13.8733 9.62312 14.0009 10 14Z" fill="#4ECB71" />
            </Svg>

          </View>
          <View style={styles.icroundmenu}>
            <Svg style={styles.__vector} width="24" height="16" viewBox="0 0 24 16" fill="none" >
              <Path d="M1.33333 16H22.6667C23.4 16 24 15.4 24 14.6667C24 13.9333 23.4 13.3333 22.6667 13.3333H1.33333C0.6 13.3333 0 13.9333 0 14.6667C0 15.4 0.6 16 1.33333 16ZM1.33333 9.33333H22.6667C23.4 9.33333 24 8.73333 24 8C24 7.26667 23.4 6.66667 22.6667 6.66667H1.33333C0.6 6.66667 0 7.26667 0 8C0 8.73333 0.6 9.33333 1.33333 9.33333ZM0 1.33333C0 2.06667 0.6 2.66667 1.33333 2.66667H22.6667C23.4 2.66667 24 2.06667 24 1.33333C24 0.6 23.4 0 22.6667 0H1.33333C0.6 0 0 0.6 0 1.33333Z" fill="#4ECB71" />
            </Svg>

          </View>
          <Text style={styles.giaoNGAYtrong1giờ247}>
            {`Giao NGAY trong 1 giờ (24/7)\n`}
          </Text>
        </View>


        <ScrollView>


          <View style={styles.alternativeContainer}>
            <Text
              style={styles.text}
              appearance='alternative'
            >
              New Product
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}
          >

            {products.map((item, index) => {
              return (
                <Product item={item} key={index} />)
            })}
          </View>
          <View style={styles.alternativeContainer}>
            <Text
              style={styles.text}
              appearance='alternative'
            >
              Sale
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}
          >
            {products.map((item, index) => {
              return <Product item={item} key={index} />
            })}
          </View>
        </ScrollView>


      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 390, height: 260
  },
  alternativeContainer: {
    borderRadius: 4,
    marginVertical: 2,
    backgroundColor: '#3366FF',
    alignItems: 'center'
  },
  frame5: {
    flexShrink: 0,
    height: 57,
    width: 362,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 5
  },
  icbaselinesearch: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    height: 32,
    left: 281,
    width: 32,
    alignItems: "flex-start",
    rowGap: 0
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 5,
    bottom: 5,
    left: 4,
    overflow: "visible"
  },
  materialsymbolsmicoutline: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    height: 32,
    left: 318,
    width: 32,
    alignItems: "flex-start",
    rowGap: 0
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 7,
    bottom: 4,
    left: 7,
    overflow: "visible"
  },
  icroundmenu: {
    position: "absolute",
    flexShrink: 0,
    top: 11,
    height: 32,
    left: 19,
    width: 32,
    alignItems: "flex-start",
    rowGap: 0
  },
  __vector: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 4,
    bottom: 8,
    left: 4,
    overflow: "visible"
  },
  giaoNGAYtrong1giờ247: {
    position: "absolute",
    flexShrink: 0,
    top: 22,
    left: 30,
    width: 209,
    height: 27,
    textAlign: "center",
    color: "rgba(193, 196, 209, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: -0.24,
    lineHeight: 12
  }
});