import React from 'react';
import { Stylesheet, Text, View } from 'react-native';

const Start = () => {
    return ( <
        View style = { styles.page } >
        <
        Text > Welcome to MTB App < /Text>{' '} <
        /View>
    );
};

export default Start;

const styles = Stylesheet.create({
    page: {
        flex: 1,
        backgroundColor: '#00E9B1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});