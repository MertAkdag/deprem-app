import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Touchable from './Touchable';

function ListItem(props) {
  return (
    <Touchable {...props}>
      <View style={styles.container}>
        <View style= {styles.depremrenk}>

        </View>
        <Icon name="pulse" size={43} color={Colors.sari} />
        <View style={styles.textView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.subtitleText}>Şiddet:
            <Text style={styles.detailText}>{props.mag}</Text>
          </Text>
          <Text style={styles.subtitleText}>Tarih:
            <Text style={styles.detailText}>{props.date}</Text>
          </Text>
        </View>
      </View>
    </Touchable>
  );
}

ListItem.defaultProps = {
  title: 'Deprem Başlığı',
  subtitle: 'Deprem Açıklaması',
}

export default ListItem;

const styles = StyleSheet.create({

  depremrenk:{
    color: Colors.white,

  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.black,
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 15,
    shadowColor: '#fff',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    color: Colors.white,
    marginLeft: 10,
  },
  titleText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitleText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: 2,
  },
  detailText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'normal',
  }
});
