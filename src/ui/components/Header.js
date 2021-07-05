import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/game_bg.png')}
      style={styles.header}>
      <Icon
        style={styles.icon}
        name="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/heart_logo.png')}
        />
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  icon: {
    position: 'absolute',
    left: 18,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default Header;
