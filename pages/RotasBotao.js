import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const navBotao = createStackNavigator();

import ListarFrutas from '../pages/Frutas/ListarFrutas';
import CadastrarFruta from '../pages/Frutas/CadastrarFruta';
import AlterarFruta from '../pages/Frutas/AlterarFruta';

export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={ListarFrutas} options={{headerShown:false}} />
            <navBotao.Screen name="Cadastrar" component={CadastrarFruta} options={{headerShown:false}} />
            <navBotao.Screen name="Alterar" component={AlterarFruta} options={{headerShown:false}} />
        </navBotao.Navigator>
    );
}