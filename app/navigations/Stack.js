import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigation.navigate('profile')}>
      <Text>Home Screen</Text>
    </TouchableOpacity>
  );
}
function Profile({navigation}) {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigation.navigate('settings')}>
      <Text>Profile Screen</Text>
    </TouchableOpacity>
  );
}
function Settings({navigation}) {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigation.navigate('Home')}>
      <Text>Settings Screen</Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
