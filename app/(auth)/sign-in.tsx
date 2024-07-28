import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Signin = () => {
  return (
    <View>
      <Text> Signin</Text>
      <Pressable onPress={() => router.push('sign-up')}>
        <Text>signup</Text>
      </Pressable>
    </View>
  );
};

export default Signin;
