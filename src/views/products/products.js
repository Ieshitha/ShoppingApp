
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Icon, ListItem, CheckBox, Header, Input } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { TextInput } from 'react-native-gesture-handler';
const DATA = [
  {
    id: 1,
    title: 'Group A',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product B",
        description: "text text ",
        isPurchased: true
      },
      {
        id: 2,
        name: "Product C",
        description: "text",
        isPurchased: false
      },
      {
        id: 3,
        name: "Product D",
        description: "text",
        isPurchased: false
      },
      {
        id: 4,
        name: "Product E",
        description: "text text text text",
        isPurchased: true
      },
      {
        id: 5,
        name: "Product F",
        description: "text",
        isPurchased: true
      },

    ]
  },
  {
    id: 2,
    title: 'Group A',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product G",
        description: "text text ",
        isPurchased: true
      },
      {
        id: 2,
        name: "Product F",
        description: "text",
        isPurchased: false
      },
      {
        id: 3,
        name: "Product D",
        description: "text",
        isPurchased: false
      },
      {
        id: 4,
        name: "Product C",
        description: "text",
        isPurchased: false
      },
    ]
  },
  {
    id: 3,
    title: 'Group A',
    created: '23/03/2021',
    productList: []
  },
  {
    id: 4,
    title: 'Group A',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product B",
        description: "text text ",
        isPurchased: true
      },
      {
        id: 2,
        name: "Product C",
        description: "text",
        isPurchased: false
      },

      {
        id: 3,
        name: "Product D",
        description: "text",
        isPurchased: false
      }
      ,
      {
        id: 4,
        name: "Product E",
        description: "text text text text",
        isPurchased: true
      },
      {
        id: 5,
        name: "Product F",
        description: "text",
        isPurchased: true
      },
    ]
  },
  {
    id: 5,
    title: 'Group A',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product B",
        description: "text text ",
        isPurchased: true
      }
    ]
  }, {
    id: 7,
    title: 'Group H',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product B",
        description: "text text ",
        isPurchased: true
      }
    ]
  },
  {
    id: 6,
    title: 'Group G',
    created: '23/03/2021',
    productList: [
      {
        id: 1,
        name: "Product B",
        description: "text text ",
        isPurchased: true
      }
    ]
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>

);

const App = ({navigation}) => {
  const renderItem = ({ item }) =>
  (<ListItem key={item} bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.name !== '' ?<CheckBox title={item.name} style={{ backgroundColor: 'white', border: '1px solid white', textDecorationLine: 'line-through' }} checked={item.isPurchased} />: <Input placeholder="TYPE..." /> }</ListItem.Title>
    </ListItem.Content>
    <Icon name='chevron-forward-outline' type='ionicon' />
    <ListItem.Chevron />
    {/* <ListItem.Content><ListItem.Title><Text>{"\n"}DDDDDDDDDDD</Text></ListItem.Title></ListItem.Content> */}
  </ListItem>);

  const addMore = () => {
    let obj = {
      id: 12,
      name:"",
      description: null,
      isPurchased: false
    }
    DATA[0].productList.push(obj)
    console.log(DATA,DATA[0].productList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftComponent={<Icon name="reply" type="material"  onPress={()=>navigation.navigate("shoppingList")} />}
        centerComponent={{ text: 'GROUP', style: { color: '#000', fontWeight: 'bold', fontSize: 16 } }}
        rightComponent={<Icon name="arrow-redo-circle-outline" type="ionicon" />}
        containerStyle={{ backgroundColor: "#fff" }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{ backgroundColor: "#fff", color: "#000", padding: 10, width: 100 }} onPress={addMore}>ADD MORE </Text>
      </TouchableOpacity>
      <FlatList
        data={DATA[0].productList}
        renderItem={renderItem}
        keyExtractor={v => v.id}
      />
      <TouchableOpacity style={styles.button} >
        <Text style={{ color: "#fff" }}>BANNER ADD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ff0000',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    alignItems: "center",
    padding: 10,
    height: 40,
    margin: 15,
    backgroundColor: '#ff0000',
  },
  title: {
    fontSize: 20,
  },
});

export default App;

