import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Switch, ScrollView} from 'react-native';
import Theme from '../utils/theme';
import DetailHome from './DetailHome';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import SvgBookmark from '../components/icons/Bookmark';
import SvgLogoshadow from '../components/icons/Logoshadow';
import SvgLogopress from '../components/icons/Logopress';
import SvgMenu from '../components/icons/Menu';
import RadioButtonRN from 'radio-buttons-react-native';

import RBSheet from 'react-native-raw-bottom-sheet';

import RadialGradient from 'react-native-radial-gradient';
import {useEffect, useRef, useState} from 'react';
import WebView from 'react-native-webview';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator /* headerMode='none'*/>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailHome}
        options={() => {
          return {
            title: 'sdadad',
            headerStyle: {
              backgroundColor: 'white',
              shadowColor: 'transparent',
            },
            headerLeft: () => <SvgBookmark />,
            headerRight: () => <SvgBookmark />,
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  const [isPlaying, setisPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [song, setSong] = useState('dog');
  const [activeSections, setactiveSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const refim = useRef();

  const tones = [
    {
      label: 'dog',
    },
    {
      label: 'cat',
    },
    {
      label: 'alert',
    },
    {
      label: 'whistle',
    },
    {
      label: 'police',
    },
    {
      label: 'ambulance',
    },
  ];

  const modes = [
    {
      label: 'continuous',
    },
    {
      label: 'timer',
    },
  ];

  useEffect(() => {
    fetch('https://aboutreact.herokuapp.com/demosearchables.php')
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const refRBSheet = useRef();
  return (
    <Box
      as={RadialGradient}
      flex={1}
      justifyContent="space-around"
      alignItems="center"
      colors={['#6b6b6b', '#e6cf67']}
      stops={[0.1, 1.0]}
      center={[200, 300]}
      radius={350}>
      <Text
        mt="28%"
        color="white"
        opacity={isPlaying ? 0 : 1}
        fontWeight="bold"
        fontSize={16}>
        Press alert button to bell.
      </Text>

      <Button
        onPress={() => {
          if (isPlaying) {
            refim.current.injectJavaScript(
              'document.getElementById("audio").pause();void(0);',
            );
          } else {
            refim.current.injectJavaScript(
              'document.getElementById("audio").play();void(0);',
            );
          }
          setisPlaying(!isPlaying);
        }}>
        {isPlaying ? <SvgLogopress /> : <SvgLogoshadow />}
      </Button>

      <Box width="75%" opacity={isPlaying ? 0 : 1}>
        <Text color="white" fontWeight="400" fontSize={16} textAlign="center">
          Or press the menu button to customize the alert sound.
        </Text>
      </Box>

      <Button
        alignSelf="flex-end"
        mr="12%"
        mb="5%"
        onPress={() => refRBSheet.current.open()}>
        <SvgMenu opacity={isPlaying ? 0 : 1} color="white" width={34} />
      </Button>

      <RBSheet
        ref={refRBSheet}
        animationType="slide"
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
          },
          draggableIcon: {
            backgroundColor: 'transparent',
          },
          container: {
            paddingVertical: 5,
            paddingHorizontal: 24,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: '50%',
          },
        }}>
        <Text fontWeight="bold" fontSize={15}>
          Alert Settings
        </Text>

        <Box flexDirection="row" justifyContent="space-between" mt={30}>
          <Text fontSize={16}>SMS Sending</Text>
          <Switch
            trackColor={{false: '#767577', true: Theme.colors.oneRed}}
            thumbColor={isEnabled ? '#FFFFFF' : '#EFEFEF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Box>

        <Text fontSize={14} mt={24} fontWeight="bold">
          Alert Tone
        </Text>

        <Box pt={4}>
          <RadioButtonRN
            data={tones}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            boxStyle={{width: '45%', marginRight: 12, borderRadius: 10}}
            textStyle={{fontSize: 14, marginLeft: 8, color: 'black'}}
            circleSize={8}
            activeColor="#E53641"
            boxActiveBgColor="transparent"
            boxDeactiveBgColor="transparent"
            selectedBtn={(e) => {
              setSong(e.label);
              console.log(e.label);
            }}
          />
        </Box>
      </RBSheet>
      <WebView
        containerStyle={{flex: 0, height: 0}}
        ref={refim}
        originWhitelist={['*']}
        mediaPlaybackRequiresUserAction={false}
        useWebKit={true}
        source={{
          html: `<audio id="audio" loop> <source src='file:///android_asset/${song}.mp3' type="audio/mp3" /> </audio>`,
        }}
      />
    </Box>
  );
}

export default HomeStackScreen;
