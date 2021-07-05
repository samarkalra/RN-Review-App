import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({addReview}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Formik
          validationSchema={reviewSchema}
          initialValues={{title: '', body: '', rating: ''}}
          onSubmit={(values, actions) => {
            addReview(values);
            actions.resetForm();
          }}>
          {formikProps => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                value={formikProps.values.title}
                onChangeText={formikProps.handleChange('title')}
                onBlur={formikProps.handleBlur('title')}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.title && formikProps.errors.title}
              </Text>
              <TextInput
                multiline
                minHeight={60}
                style={globalStyles.input}
                placeholder="Review body"
                value={formikProps.values.body}
                onChangeText={formikProps.handleChange('body')}
                onBlur={formikProps.handleBlur('body')}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.body && formikProps.errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                value={formikProps.values.rating}
                keyboardType="numeric"
                onChangeText={formikProps.handleChange('rating')}
                onBlur={formikProps.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.rating && formikProps.errors.rating}
              </Text>
              <Button
                title="Submit"
                color="maroon"
                onPress={formikProps.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ReviewForm;
