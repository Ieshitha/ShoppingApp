
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Icon, ListItem, Input, Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 2,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 3,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 4,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 5,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 6,
    title: 'Group A',
    created : '23/03/2021'
  },
  {
    id: 7,
    title: 'Group A',
    created : '23/03/2021'
  },

];

const DATAs = [
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
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider onPress={text != null && onPress}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <Text>{item.created}</Text>
      <Icon
        name='open-outline' type='ionicon' onPress={()=>navigation.navigate("products")}/>
      <ListItem.Chevron />
    </ListItem>

  );
  // const [text, onChangeText] = React.useState("TYPE...");
  // const addMoreButtonSubmit= () => {
  //   <TextInput style={styles.input} onChangeText={onChangeText} value={text}></TextInput>
  // }
  const [text, onChangeText] = React.useState();
  const [isAddMore, setAddmore] = React.useState(true)
  let currentdate = new Date();
  const onPress = () => {
    setAddmore(true)
    let obj = { id: DATA.length + 1, title: text, created: `${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()}` }
    DATA.push(obj)
    onChangeText(null)
  }
  

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container} keyboardShouldPersistTaps='handled' >

        <Header
          leftComponent={<Icon name="undo" type="material" />}
          centerComponent={{ text: 'GROUP', style: { color: '#000', fontWeight: 'bold', fontSize: 16 } }}
          containerStyle={{ backgroundColor: "#fff" }}
        />
        <TouchableOpacity style={styles.button} onPress={() => { setAddmore(false) }}>
          {isAddMore ? <Text style={{ backgroundColor: "#fff", color: "#000", padding: 10, width: 100 }}>ADD MORE </Text> :
            <><Input style={{ backgroundColor: "#fff", color: "#000", }} onChangeText={value => {
              onChangeText(value)
              //  let obj ={id : DATA.length+1, title: value}
              //  DATA.push(obj)
              //  console.log(DATA)
            }} value={text} placeholder="TYPE..."></Input><Text style={{ color: '#fff' }}>{`${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()}`}</Text></>}

        </TouchableOpacity>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          style={styles.container}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={{ color: "#fff" }}>BANNER ADD</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
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
    backgroundColor: "#ff0000",
    padding: 10
  },
  title: {
    fontSize: 20,
  },
});

export default App;

