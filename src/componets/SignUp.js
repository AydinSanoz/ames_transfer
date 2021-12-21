import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from './CustomInput';
import {styles} from './styles';

const SignUp = () => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });
  return (
    <View style={styles.loginContainer}>
      <Text>Sign Up Screen</Text>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid}) => (
          <>
            <Field
              component={CustomInput}
              name="fullName"
              placeholder="Full Name"
            />
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={CustomInput}
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <Field
              component={CustomInput}
              name="passowrd"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />

            <Button
              onPress={handleSubmit}
              title="SIGN UP"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
