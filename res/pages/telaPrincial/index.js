import React from 'react';
import { Text, View , Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const menuPrincipal = [
    {
        name: 'Biblioteca',
        description: 'Saiba os benefícios de cada planta disponível na biblioteca.',
        id: 'Biblioteca',
        image: require('../../../assets/icon-natural.png')
    },
    {
        name: 'Receitas',
        description: 'Aprenda receitas caseiras para auxiliar no tratamento de seus sintomas de forma natural.',
        id: 'Receitas',
        image: require('../../../assets/icon-natural.png')
    },
]

export default function TelaPrincipal() {
    return (
        <Card>
        {/* <Card.Title>{u.name}</Card.Title> */}
        <Card.Divider/>
        {
            menuPrincipal.map((u, i) => {
                return (
              <View key={i}>
                <Image
                  
                  resizeMode="cover"
                  source={ u.image }
                />
                <Text>{u.name}</Text>
              </View>
            );
          })
        }
      </Card>
    );
  }