import React from 'react';
import { View, Text } from 'react-native';
import estilos from './estilos';

export default function TelaInicial() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Adega Preferida</Text>
      <Text style={estilos.subtitulo}>
        Aqui você encontra os melhores e mais saborosos vinhos.
      </Text>
    </View>
  );
}