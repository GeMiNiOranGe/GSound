import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native'
import { songURI } from '../SongURI'
import SongItem from '../srcComponent/SongItem'

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songURI}
        renderItem={({ item, index }) => <SongItem
          item={item}
          index={index}
        />} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home