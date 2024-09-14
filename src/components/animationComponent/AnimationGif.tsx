import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';

interface AnimationLottieProps {
  source: string;
  width?: number;
  height?: number;
  marginTop?: number;
}

export const AnimationLottie = ({
  source,
  width = 250,
  height = 250,
  marginTop = 50,
}: AnimationLottieProps): React.ReactElement => (
  <View>
    <LottieView
      source={{uri: source}}
      autoPlay
      loop
      style={{width, height, marginTop}}
    />
  </View>
);
