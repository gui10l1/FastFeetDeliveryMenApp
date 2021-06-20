import React, { FC, useEffect, useRef } from 'react';

import { Animated } from 'react-native';

import fastFeetBrand from '../../assets/img/fastFeetBrand.png';
import { Container } from './styles';

const SplashScreen: FC = () => {
  const initialAnimatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(initialAnimatedValue, {
          toValue: 1.3,
          useNativeDriver: true,
          duration: 1000,
        }),
        Animated.timing(initialAnimatedValue, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }),
      ]),
    ).start();
  }, [initialAnimatedValue]);

  return (
    <Container>
      <Animated.Image
        source={fastFeetBrand}
        style={{ transform: [{ scale: initialAnimatedValue }] }}
      />
    </Container>
  );
};

export { SplashScreen };
