import React, { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export interface IContact {
  id: number;
  avatar: string;
  name: string;
}

export const CONTACT_ITEM_HEIGHT = 70;

const ContactItem: FC<any> = function ({ item, last }) {
  return (
    <View key={item.id} style={[styles.container, { borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth }]}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.body}>
        <Text style={styles.name}>
          {`${item.name}`}
        </Text>
      </View>
    </View>
  )
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: CONTACT_ITEM_HEIGHT,
    padding: 15,
    borderColor: '#E5E5E5'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  body: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#333'
  }
});