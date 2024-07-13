import SearchInput from '@/components/SearchInput';
import { images } from '@/constants';
import React from 'react';
import { FlatList, Image, Platform, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[
          { id: 1, name: 'Saddam' },
          { id: 2, name: 'Seraj' },
          { id: 3, name: 'Mohammed' },
        ]}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text className='text-white text-3xl'>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>

                <Text className='text-2xl font-psemibold text-white'>
                  Saddam
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput  />
            
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest Videos</Text>
            </View>
          </View>
        )}
      />
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'dark-content' : 'light-content'}
      />
    </SafeAreaView>
  );
};

export default Home;
