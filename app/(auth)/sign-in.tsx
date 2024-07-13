import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CutsomButton from '@/components/CutsomButton';
import FormField from '@/components/FormField';
import { images } from '@/constants';
import { Link, router } from 'expo-router';
import { SignInInfo } from '@/types/types';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState<SignInInfo>({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit() {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
    }

    setIsSubmitting(true);

    try {
      await signIn(form);

      // set it to global state...
      router.replace('/home');
    } catch (err) {
      Alert.alert('Error', (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white mt-10 font-semibold font-psemibold'>
            Log in to Aora
          </Text>
          <FormField
            title='Email'
            value={form.email}
            onChangeText={value => setForm({ ...form, email: value })}
            otherStyle='mt-7'
            keyboardType='email-address'
            placeholder='Email'
          />

          <FormField
            title='Password'
            value={form.password}
            onChangeText={value => setForm({ ...form, password: value })}
            otherStyle='mt-7'
            placeholder='Password'
          />

          <CutsomButton
            title='Sign In'
            handlePress={submit}
            containerStyle='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center flex-row gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have account?
            </Text>
            <Link href={'/sign-up'} className='text-lg font-psemibold text-secondary-100'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
