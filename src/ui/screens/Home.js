import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import ReviewForm from './ReviewForm';

const Home = ({navigation}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: 1,
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 2,
      body: 'lorem ipsum',
      key: 2,
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3},
  ]);

  const addReview = newReview => {
    newReview.key = reviews.length + 1;
    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Icon
            name="close"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setIsModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>
      <Icon
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setIsModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});

export default Home;
