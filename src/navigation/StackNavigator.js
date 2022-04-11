import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerForceInset: {
          top: 'never',
          bottom: 'never',
        },
      }}
      screenOptions={{
        headerTransparent: true,
        title: '',
        headerBackVisible: false,
      }}>
      <Stack.Screen name="TransactionList" component={TransactionListScreen} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
