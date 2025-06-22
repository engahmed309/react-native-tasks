import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
// import { FlatList, TextInput } from 'react-native-web';
import { FlatList, TextInput } from 'react-native';


      const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export default function App() {
  return (


    <View style={styles.container}>
      <TextInput placeholder='Enter Title' style={styles.input}></TextInput>

      <TextInput placeholder='Enter Description' style={styles.input}></TextInput>

      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7}>
       <Text style={{...styles.text,fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine}></View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={{...styles.filterBtn}} activeOpacity={0.7} >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

     <FlatList
     data={DATA}
     keyExtractor={(item)=>item.id}
     renderItem={({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
)}>
     </FlatList>

   
    </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
