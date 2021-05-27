import React, { useState } from 'react'
import { View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'


const BirthdayForm = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')

    const submitBirthday = () => {
        newBirthday = {
            name: name,
            birthday: birthday
        }
        dispatch({ type: "ADD_NEW_BIRTHDAY", payload: newBirthday })
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.mainTextStyle}>Add A New Birthday</Text>
                <Text style={styles.textStyle}>Name</Text>
                <TextInput
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#cccccc'
                    placeholder="Name"
                    onChangeText={name => setName(name)}
                ></TextInput>
                <Text style={styles.textStyle}>Birthday</Text>
                <TextInput
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#cccccc'
                    placeholder="Birthday"
                    onChangeText={birthday => setBirthday(birthday)}
                ></TextInput>
                <TouchableHighlight
                    underlayColor='transparent'
                    style={styles.buttonStyle}
                    onPress={submitBirthday}
                ></TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: "100%",
    height:"100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:"lightgray",
    //   paddingHorizontal:10,
    paddingBottom:50
    },
    mainView:{
    width:"100%",
    height:"50%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding:20,
    },
    textInputStyle:{
    width:"100%",
    height:40,
    backgroundColor:"white",
    paddingHorizontal:15,
    marginBottom:10,
    marginTop:10
    },
    textStyle:{
    width:"100%",
    height:20,
    //paddingHorizontal:15,
    textAlign:"left",
    marginTop:10,
    fontSize:15
    },
    mainTextStyle:{
    width:"100%",
    height:40,
    //paddingHorizontal:15,
    textAlign:"center",
    marginTop:10,
    marginBottom:10,
    fontSize:20
    },
    buttonStyle:{
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop:20
    },
    buttonTextStyle:{
    width:"100%",
    height:"100%",
    textAlign:"center",
    marginTop:10,
    fontSize:18
    },
    })

export default BirthdayForm