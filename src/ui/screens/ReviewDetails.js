import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {globalStyles, images} from '../../styles/global';
import Card from '../components/Card';

const ReviewDetails = ({route}) => {
  const {title, body, rating} = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 16,
    paddingTop: 16,
  },
});

export default ReviewDetails;
