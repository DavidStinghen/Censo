import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import List from './pages/List';
import Add from './pages/Add';

export default () =>
  createAppContainer(
    createSwitchNavigator(
      {
        App: createBottomTabNavigator(
          {
            List,
            Add,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#000',
              inactiveTintColor: 'rgba(000, 000, 000, 0.6)',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: 'App',
      },
    ),
  );
