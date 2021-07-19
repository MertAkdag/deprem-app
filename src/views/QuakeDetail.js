import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { IconButton, QuakeItem, Touchable } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';

function QuakeDetail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
     
     
        <Text style={styles.titleText}>deprem detay</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>

      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentView}>
        <QuakeItem
          name="map-marker-outline"
          title="Deprem Konumu"
          detail={route.params.item.lokasyon}
        />
        <QuakeItem
          name="pulse"
          title="Deprem Şiddeti"
          detail={route.params.item.mag}
        />
        <QuakeItem
          name="calendar-clock"
          title="Deprem Zamanı"
          detail={route.params.item.date}
        />
        <QuakeItem
          name="arrow-down"
          title="Deprem Derinliği"
          detail={route.params.item.depth}
        />
        <QuakeItem
          name="arrow-split-vertical"
          title="Deprem Enlemi"
          detail={route.params.item.lat}
        />
        <QuakeItem
          name="arrow-split-horizontal"
          title="Deprem Boylamı"
          detail={route.params.item.lng}
        />
      </ScrollView>
    </View>
  );
}

export default QuakeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.acikbeyaz,

    borderBottomLeftRadius: 15,
    borderRadius: 99,

    borderBottomRightRadius: 15,
    zIndex: 2,
    },
  headerView: {
    backgroundColor: Colors.primary,
    height: 115,
    justifyContent: 'center',

    borderBottomLeftRadius: 15,
    
    borderBottomRightRadius: 15,
  },
 
  titleText: {
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    top: 40,
    left: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.white,
  },
  subtitleText: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
    left: 25,
    fontSize: 16,
    color: Colors.white,
  },

  buttonView: {
    flexDirection: 'row',
    backgroundColor: Colors.black,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: -40,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    
    zIndex: 1,
  },
  contentView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: Colors.acikbeyaz,
    zIndex: -1,
    paddingTop: 60,
    
  },
  scrollView: {
    zIndex: -1,
    backgroundColor: Colors.primary
  },
});