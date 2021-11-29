import React from "react";
import { StyleSheet, View } from 'react-native';

import Subheading from './Subheading';
import Text from './Text';
import Tag from './Tag';
import Avatar from "./Avatar";

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    width: 250
  },
  avatar: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  mainInfo: {
    padding: 10,
    flexDirection: 'column'
  },
});

const MainInfo = ({ item }) => {
  return (
    <View style={styles.mainInfo}>
        
      <View style={styles.header}>
        <Subheading>{item.fullName}</Subheading>
        <Text >{item.description}</Text>
      </View>
    
      <View>
        <Tag>{item.language}</Tag>      
      </View>
        
    </View>
  );
};

const ProfileInfo = ({ item, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Avatar containerStyle={styles.avatar} imageUri={item.ownerAvatarUrl} />
      <MainInfo item={ item }/>
    </View> 
  );    
};

export default ProfileInfo;