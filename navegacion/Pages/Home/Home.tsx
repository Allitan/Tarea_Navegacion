import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useContextTarea } from '../../Providers/ProviderTarea'

export default function Home() {

  const {tarea}= useContextTarea()

  return (
    <View>
      {
        tarea.map((item) => (
          <View key={item.id}>
            <Text>Id: {item.id}</Text>
            <Text>Nombre: {item.nombre}</Text>
          </View>
        ))
      }
    </View>
  )
}