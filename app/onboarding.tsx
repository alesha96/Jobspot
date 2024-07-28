import React from 'react';
import { Container } from '~/components/Container';
import { Image, XStack, Text, YStack, Circle } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';

const OnboardingPage = () => {
  return (
    <Container>
      <XStack justifyContent="flex-end" paddingVertical={'22%'}>
        <Text fontSize={18} fontWeight={'700'}>
          jobspot
        </Text>
      </XStack>
      <XStack>
        <Image source={require('../assets/onBoarding.png')} />
      </XStack>
      <YStack flex={1} paddingVertical={'20%'}>
        <YStack>
          <Text fontSize={40} fontWeight={'700'}>
            Find Your
          </Text>
          <Text fontSize={40} fontWeight={'700'} textDecorationLine="underline" color={'#FCA34D'}>
            Dream Jobs
          </Text>
          <Text fontSize={40} fontWeight={'700'}>
            Here!
          </Text>
        </YStack>
        <YStack paddingVertical={'2%'}>
          <Text fontSize={14} fontWeight={'400'}>
            {'Explore all the most exciting job roles based \non your interest and study major.'}
          </Text>
        </YStack>
      </YStack>
      <XStack justifyContent="flex-end">
        <Circle size={60} backgroundColor="#130160" elevation="$4">
          <Ionicons name="arrow-forward" size={35} color="white" />
        </Circle>
      </XStack>
    </Container>
  );
};

export default OnboardingPage;
