import { View, Text, StyleSheet } from 'react-native'

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const DrawerIcon = ({navigation}) => {
  return (
    <View style={styles.container}>
            <View style={styles.text}>
            <Icon name="bars" size={30} color="black"  onPress={() => {navigation.navigate("Drawer")}} />
            </View>
        </View>
  )
}

const styles =  StyleSheet.create({
	container: {
		marginLeft: 5,
        marginRight: 8,
		height: 39,
		padding: 1,
		borderRadius: 32,
        borderColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	}
	})

export default DrawerIcon