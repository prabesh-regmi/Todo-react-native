import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export const Navbar = () => {
    return (
        <View style={styles.logoContainer}>
            <Text style={styles.logo}>TODO APP</Text>
            <Icon name="dots-three-vertical" size={16} />
        </View>
    )
}
const styles = StyleSheet.create({
    logoContainer: {
        padding: 20,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    //   elevation: 3,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottom:1,
      borderBottomColor:'#000'

    },
    logo: {
            fontFamily: 'Roboto',
            fontWeight: '700',
            fontSize: 16,
            color: "#BE263B",
            letterSpacing: 5,
            lineHeight: 16,
        },
    });
