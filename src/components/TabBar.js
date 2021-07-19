import React from 'react';
import {View} from 'react-native';
import Button from './Button';
import SvgHome from './icons/Home';
import SvgBookmark from './icons/Bookmark';
import SvgUser from './icons/User';
import Box from './Box';
import Theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 12,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button
            key={label}
            height={65}
            flex={1}
            pt={8}
            flexDirection="column"
            justifyContent="center"
            onPress={onPress}>
            {label === 'Home' && (
              <SvgHome
                stroke={isFocused ? Theme.colors.oneRed : Theme.colors.gray}
              />
            )}
            {label === 'Search' && (
              <SvgBookmark
                stroke={isFocused ? Theme.colors.oneRed : Theme.colors.gray}
              />
            )}
            {label === 'Profile' && (
              <SvgUser
                stroke={isFocused ? Theme.colors.oneRed : Theme.colors.gray}
              />
            )}
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
