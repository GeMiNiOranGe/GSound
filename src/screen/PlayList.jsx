// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'

// Create a component
class PlayList extends React.Component {
  render() {
	return (
		<SafeAreaView style={styles.container}>
        <Text style={{ color: 'black' }}>Song play list</Text>


      </SafeAreaView>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// Make this component available to the app
export default PlayList