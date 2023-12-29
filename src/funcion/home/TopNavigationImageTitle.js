import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Avatar,
    Icon,
    IconElement,
    MenuItem,
    OverflowMenu,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';


const MenuIcon = (props) => (
    <Icon
        {...props}
        name='more-vertical'
    />
);

const InfoIcon = (props) => (
    <Icon
        {...props}
        name='info'
    />
);

const LogoutIcon = (props) => (
    <Icon
        {...props}
        name='log-out'
    />
);

export const TopNavigationImageTitleShowcase = () => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={toggleMenu}
        />
    );

    const renderOverflowMenuAction = () => (
        <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}
        >
            <MenuItem
                accessoryLeft={InfoIcon}
                title='About'
            />
            <MenuItem
                accessoryLeft={LogoutIcon}
                title='Logout'
            />
        </OverflowMenu>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Avatar
                style={styles.logo}
                source={require('../../../assets/images/blackswan.jpg')}
            />
            <Text {...props}>
                Black Swan
            </Text>
        </View>
    );

    return (
        <TopNavigation
            title={renderTitle}
            accessoryRight={renderOverflowMenuAction}
        />
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginHorizontal: 16,
    },
});