// this component is to ensure that the reanimated library is working properly
import React from 'react';
import {Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function Animations() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {backgroundColor: 'red', borderRadius: 10, width: 100, height: 100},
          animatedStyles,
        ]}
      />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

export default Animations;
