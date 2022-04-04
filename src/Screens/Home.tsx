import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Dikirim ke</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text>{'{{address_name}}'}</Text>
              <Ionicons name="chevron-down" color="red" size={16} />
            </TouchableOpacity>
            <Text>30 Menit</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="logo-apple-appstore" color="black" size={24} />
          <Text>Dapatkan 25.000</Text>
        </View>
      </View>
      <View style={{paddingVertical: 12, paddingHorizontal: 16}}>
        <Text>Hey {'{{user_name}}'}</Text>
      </View>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Feather name="search" color="black" size={24} />
          <TextInput
            placeholder="Cari produk disini"
            style={{lineHeight: 24, height: 38}}
          />
        </View>
        <View>
          <Ionicons name="heart-outline" color="black" size={24} />
        </View>
      </View>
      <View
        style={{
          height: 120,
          width: Dimensions.get('window').width - 48,
          backgroundColor: 'grey',
          alignSelf: 'center',
        }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
