import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContextTarea } from '../../Providers/ProviderTarea'
import { Tarea } from '../../Modelos/Tarea'

export default function AddTodo() {

  const {agregarTareas, tarea}=useContextTarea()
  const [valueText, setValueText]=useState<string>('')

  function agregarListaTarea(texto:string){
    let tarea:Tarea = {
      id:Date.now(),
      nombre:texto
    }

    agregarTareas(tarea);

    Alert.alert('Tarea agregada con exito')
  }

  return (
    <View>
      <TextInput placeholder='Agregar Nombre Tarea' value={valueText} onChangeText={setValueText}></TextInput>

      <Button title='Agregar Tarea' onPress={()=>agregarListaTarea(valueText)}></Button>
    </View>
    
  )
}