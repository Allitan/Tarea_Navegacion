import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { useContextTarea } from '../../Providers/ProviderTarea'
import { Tarea } from '../../Modelos/Tarea';

export default function Buscador() {

  const { tarea } = useContextTarea();
  const [id, setId] = useState<string>('');
  const [resultado, setResultado] = useState<Tarea[]>([]);

  function buscarTarea(){
    const encontrada = tarea.find(t => t.id.toString() === id)

    if(!encontrada){
      Alert.alert("No se encontro la Tarea")
      setResultado([])
    } else {
      setResultado([encontrada])
    }
  }
  return (
    <View>
      <Text>Buscar Tarea por Id</Text>

      <TextInput placeholder='Ingrese Id' value={id} onChangeText={setId}></TextInput>

      <Button title='Buscar' onPress={buscarTarea}/>

      {
        resultado.map((item) => (
          <View key={item.id}>
            <Text>Id: {item.id}</Text>
            <Text>Nombre: {item.nombre}</Text>
          </View>
        ))
      }
    </View>
  )
}