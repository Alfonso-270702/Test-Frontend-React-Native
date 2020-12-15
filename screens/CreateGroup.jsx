import React,{useState,useEffect } from 'react'
import { View, TextInput,Text, StyleSheet, Button,Image, TouchableHighlight} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { addGroupAsync } from '../store/actions/groupActions'
import { useDispatch } from 'react-redux'

export default function CreateGroup() {
    const [name, setName] = useState('')
    const [jenjang, setJenjang] = useState('')
    const [image, setImage] = useState('')
    const [imageName, setImageName] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);

    async function handleChoosePhoto() {
       let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
       })

       if(!result.cancelled){
           setImage(result.uri)
           setImageName(result.fileName)
       }
    }

    function submitGroup(){
        if(name === '' || jenjang === '' || imageName === ''){
            alert('Tolong isi semua field yang disediakan')
        }
        else{
            dispatch(addGroupAsync({name,jenjang,imageName}))
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex:0, alignItems: 'center', marginBottom: 30}}>
                <TouchableHighlight onPress={() => handleChoosePhoto()}>
                    {image === '' ? 
                        <Image source={{uri: 'https://icons-for-free.com/iconfiles/png/512/camera-131965017355314519.png'}} style={{width:100, height: 100}} /> :
                        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                    }
                </TouchableHighlight>
                <Text style={{color: '#bbbbbb', marginTop: 10}}>Tambahkan foto grup</Text>
            </View>

            <View style={{marginLeft: 30, flex:0}}>
                <TextInput 
                value={name}
                placeholder="Nama Group" 
                onChangeText={(text) => setName(text)}
                style={{backgroundColor: '#f1f1f1', width: 300, height: 50, marginBottom: 10, textAlign: 'center'}}
                />
                <Picker 
                selectedValue={jenjang}
                onValueChange={(itemValue, itemIndex) => setJenjang(itemValue)}
                style={{ height: 50, width: 150, backgroundColor: '#f1f1f1', marginBottom: 10}}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
            </View>

            <View style={{alignSelf: 'center', width:300}}>
                <Button title='Buat Group' onPress={() => submitGroup()} style={{borderRadius: 10}} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})
