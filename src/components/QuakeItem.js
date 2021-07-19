import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Touchable from './Touchable';

function QuakeItem(props) {
  return (
    <Touchable {...props}>
      <View style={styles.container}>
        <Icon name={props.name} size={35} color={Colors.sari} />

        <View style={styles.textView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.detailText}>{props.detail}</Text>
        </View>

      </View>
    </Touchable >
  );
}

QuakeItem.defaultProps = {
  title: 'Deprem Başlığı',
  subtitle: 'Deprem Açıklaması',
}

export default QuakeItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    height: Dimensions.get('window').width / 2 - 40,
    width: Dimensions.get('window').width / 2 - 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
   borderRadius: 17,

  },
  textView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    color: Colors.white,

  },
  titleText: {
    fontWeight: 'bold',
    color: Colors.white,

    fontSize: 14,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.white,
    textAlign: 'center',
    marginTop: 10,
  }
});
