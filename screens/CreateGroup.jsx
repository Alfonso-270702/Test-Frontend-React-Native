import React,{useState,useEffect } from 'react'
import { View, TextInput,Text, StyleSheet, Button,Image, TouchableHighlight, AsyncStorage} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { addGroupAsync } from '../store/actions/groupActions'
import { useDispatch } from 'react-redux'

export default function CreateGroup({navigation}) {
    const [name, setName] = useState('')
    const [jenjang, setJenjang] = useState('')
    const [image, setImage] = useState('')

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
       }
    }

    async function submitGroup(){
        try {
            if(name === '' || jenjang === '' || image === ''){
                alert('Tolong isi semua field yang disediakan')
            }
            else{
                let token = await AsyncStorage.getItem('user_token')
                await dispatch(addGroupAsync({name,jenjang,image}, token))
                await navigation.navigate('Diskusi')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight onPress={() => handleChoosePhoto()} style={{marginTop: 10}}>
                        {image === '' ? 
                            <Image
                            source={{uri: 'https://icons-for-free.com/iconfiles/png/512/camera-131965017355314519.png'}} style={{width:100, height: 100}}
                            /> :
                            <Image 
                            source={{ uri: image }} style={{ width: 100, height: 100 }} 
                            />
                        }
                    </TouchableHighlight>
                    <Text style={{color: '#bbbbbb', marginTop: 10}}>Tambahkan foto grup</Text>
                </View>
            </View>

            <View style={{marginLeft: 30, flex:0}}>
                <TextInput 
                value={name}
                placeholder="Nama Group" 
                onChangeText={(text) => setName(text)}
                style={{backgroundColor: '#f1f1f1', width: 300, height: 50, marginBottom: 10, textAlign: 'center', borderRadius: 10}}
                />
                <Picker 
                selectedValue={jenjang}
                onValueChange={(itemValue, itemIndex) => setJenjang(itemValue)}
                style={{ height: 50, width: 150, backgroundColor: '#f1f1f1', marginBottom: 10, borderRadius: 10}}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
            </View>

            <View 
            style={{alignSelf: 'center', width:300}}
            >
                <Button 
                title='Buat Group' onPress={() => submitGroup()} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#769fcd',
        justifyContent: 'center'
    },
    subContainer: {
        flex:0, 
        alignSelf: 'center', 
        marginBottom: 20, 
        backgroundColor: '#f1f1f1', 
        width:200, 
        height:150, 
        borderRadius: 10,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
    }
})
