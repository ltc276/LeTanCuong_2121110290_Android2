import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Input, IconElement, Button, Toggle } from '@ui-kitten/components';
import { ImageBackground, StyleSheet } from 'react-native';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const AlertIcon = (props) => (
    <Icon
        {...props}
        name='alert-circle-outline'
    />
);
const GoogleIcon = (props) => <Icon name="google" {...props} pack="fa5" />;
const FacebookIcon = (props) => <Icon name="facebook-square" {...props} pack="fa5" />;
const TwitterIcon = (props) => <Icon name="twitter" {...props} pack="fa5" />;


export const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [activeChecked, setActiveChecked] = React.useState(true);

    const onActiveCheckedChange = (isChecked) => {
        setActiveChecked(isChecked);
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );
    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>
                    Should contain at least 8 symbols
                </Text>
            </View>
        );
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, alignItems: 'center' }}>

                <ImageBackground
                    source={require('../../assets/images/loginbackground.jpg')}
                    style={{ width: 417, height: 150 }}
                />
                <Text
                    style={styles.text}
                    category='h1'
                >
                    Đăng nhập
                </Text>
                <Input
                    value={user}
                    label='Tài khoản'
                    placeholder='Nhập tài khoản'
                    onChangeText={nextValue => setUser(nextValue)}
                />
                <Input
                    value={password}
                    label='Password'
                    placeholder='Nhập mật khẩu'
                    caption={renderCaption}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={nextValue => setPassword(nextValue)}
                />

                <Button
                    style={styles.button}
                    appearance='filled'
                >
                    Đăng nhập
                </Button>
                <Toggle

                    checked={activeChecked}
                    onChange={onActiveCheckedChange}
                >
                    Active
                </Toggle>
                <Button
                    accessoryLeft={GoogleIcon}
                    status="danger"
                    style={styles.button}
                >
                    Login with Google
                </Button>
                <Button
                    accessoryLeft={FacebookIcon}
                    status="primary"
                    style={styles.button}
                >
                    Login with Facebook
                </Button>
                <Button
                    accessoryLeft={TwitterIcon}
                    status="basic"
                    style={styles.button}
                >
                    Login with Twitter
                </Button>
            </Layout>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#8F9BB3',
    },
    button: {
        margin: 2,
    },
    toggle: {
        margin: 2,
    },
});
