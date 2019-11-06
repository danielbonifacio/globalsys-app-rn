import SectionListContacts from 'react-native-sectionlist-contacts'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const nameData = [
  { name: 'Daniel' },
  { name: 'Julio' },
  { name: 'Zenildo' },
  { name: 'Atena' },
  { name: 'Wilson' },
  { name: 'João' },
  { name: 'Adilson' },
  { name: 'Tião' },
  { name: 'Nina' },
]

export default class Example extends React.Component {
  state = {
    dataArray: nameData,
  }

  _renderItem(item: any) {
    return <View style={styles.item}>
      <Text>{ item.name }</Text>
      <Text style={styles.complementarInformation}>
        {'Another complementar information'}
      </Text>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionListContacts
          sectionListData={this.state.dataArray}
          sectionHeight={100}
          renderItem={this._renderItem}
          initialNumToRender={this.state.dataArray.length}
          SectionListClickCallback={(item: Object, index: Number) => {
            console.log('---SectionListClickCallback--:', item, index)
          }}
          otherAlphabet="#"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  item: {
    padding: 20,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  complementarInformation: {
    fontSize: 12,
    color: '#222'
  }
})