import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './res/pages/telaPrincial';





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name="Tela Principal" 
            component={TelaPrincipal}  
            options={
            { 
              title: 'Home' ,
              headerStyle: {
                backgroundColor: '#41B85F',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center' 
              },
            }
          }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

