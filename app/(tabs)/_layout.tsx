import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffa001',
        // tabBarShowLabel: false,
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopColor: '#232533',
          height: 70,
          borderTopWidth: 1,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={28} name='cog' focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              focused={focused}
              size={28}
              name='user-plus'
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              className='border rounded'
              focused={focused}
              size={38}
              name='home'
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={28}
              focused={focused}
              name='user'
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={28}
              focused={focused}
              name='bookmark'
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
