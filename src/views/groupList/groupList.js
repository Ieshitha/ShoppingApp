import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Text, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Icon, ListItem } from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Group A',
  },
  {
    id: '2',
    title: 'Group A',
  },
  {
    id: '3',
    title: 'Group A',
  },
  {
    id: '4',
    title: 'Group A',
  },
  {
    id: '5',
    title: 'Group A',
  },
  {
    id: '6',
    title: 'Group A',
  },
  {
    id: '7',
    title: 'Group A',
  },
];

const Item = ({ title }) => (
   

  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
  
);

const App = () => {
  const renderItem = ({ item }) => (
    <ListItem key={item} bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <Icon
    name='open-outline' type='ionicon' />
    <ListItem.Chevron />
  </ListItem>
  
  );
  const [text, onChangeText] = React.useState("TYPE...");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text}></TextInput>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
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
    padding: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.4,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
  },
});

export default App;

