import { FlatList, StyleSheet, Text, View, StatusBar ,SafeAreaView, ScrollView} from 'react-native';
import { ListNoticias } from './services/noticiasService';
import { useEffect, useState } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Noticia from './components/Noticia'
import Navbar from './components/Navbar';
const Item = ({title}) => (
  <View style = {styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default function App() {
  const [ listnoticias , setListNoticias ] = useState([])

  useEffect( () => {
    
    ListNoticias().then((data)=> {
      const titles =data.map( item => item)
      setListNoticias(titles)
    })
    
    
      
  }, []);

  
  return (
    <SafeAreaProvider>
    <Navbar/>
    <View style={styles.container}>
      
      <FlatList
        data={listnoticias}
        renderItem={({item}) => (
          <>
          <Noticia style={styles.item} title={item.author} content={item.title}/>
          </>
        )}
        keyExtractor={(item, index ) => index}
      />
      
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: '#6096B4',

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    
  },
});
