import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

interface Props {
  title: string;
  value: string;
  onChangeText: (value: string) => void;
  otherStyle: string;
  placeholder?: string;
  keyboardType?: string;
}
const FormField = ({
  title,
  onChangeText,
  otherStyle,
  placeholder,
  value,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full h-16 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary-100 px-4 items-center flex-row'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChange={(e) => onChangeText(e.nativeEvent.text)}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image  source={showPassword ? icons.eyeHide : icons.eye} className='w-6 h-6' resizeMode='contain' /></TouchableOpacity>}
      </View>
    </View>
  );
};

export default FormField;
