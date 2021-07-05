import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        paddingHorizontal: 18,
        paddingVertical: 10
    },
});

export default Card;