import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { DetailsScreen } from "../screens/details.component";
import { HomeScreen } from "../screens/home.component";
import { LoginScreen } from "../screens/login.component";
import { CartScreen } from "../screens/cart.component";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name="home" pack="material" />;
const UserIcon = (props) => <Icon {...props} name="user" pack="fa5" />;

const DetailIcon = (props) => (
  <Icon {...props} name="alert-circle-outline" pack="eva" />
);
const CartIcon = (props) => (
  <Icon {...props} name="shopping-bag-outline" pack="eva" />
);


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={DetailIcon} />
    <BottomNavigationTab icon={CartIcon} />
    <BottomNavigationTab icon={UserIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="Cart" component={CartScreen} />
    <Screen name="Login" component={LoginScreen} />

  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
