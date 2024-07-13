import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  title: string;
  containerStyle: string;
  textStyle: string;
  isLoading: boolean;
  handlePress: () => void;
}
const CutsomButton = ({
  title,
  handlePress,
  containerStyle,
  isLoading,
  textStyle,
  }: Partial<Props>) => {

    return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary-200 rounded-xl min-h-[35px] justify-center items-center ${containerStyle} ${
        isLoading && 'opacity-50'
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CutsomButton;
