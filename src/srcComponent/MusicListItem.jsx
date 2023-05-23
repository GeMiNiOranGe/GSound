import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

function MusicListItem({item}) {
  return (
    <TouchableOpacity>
      <Text>MusicListItem</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MusicListItem