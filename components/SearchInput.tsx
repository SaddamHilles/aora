import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
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
const SearchInput = ({
  title,
  onChangeText,
  otherStyle,
  placeholder,
  value,
  ...rest
}: Partial<Props>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className='w-full h-16 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary-100 px-4 items-center flex-row space-x-4'>
      <TextInput
        className='text-base text-white mt-0.5  flex-1 font-pregular'
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#7b7b8b'
        onChange={e => onChangeText?.(e.nativeEvent.text)}
        secureTextEntry={title === 'Password' && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
