import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Home";
import Pesquisa from "./Pesquisa";
import RotasBotao from "./RotasBotao";

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        

        <Tab.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>

        <Tab.Screen
            name="Pesquisa"
            component={Pesquisa}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="magnify" color=
                {'black'} size={size}/>}}
        />

        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color=
                {'black'} size={size}/>}}
        />

        <Tab.Screen
        
            name="Frutas"
            component={RotasBotao}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="apple" color=
                {'black'} size={size}/>}}
            
        />



        </Tab.Navigator>
    );
}