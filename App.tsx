import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

// import { Restaurant, OrderDelivery } from './src/screens'
import Tabs from './src/navigation/tabs'
import PartDiscription from './src/screens/PartDescription';
import TestingPart from './src/screens/TestingPart';
import route from './src/constants/route';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={route.HOME}
            >
                <Stack.Screen name={route.HOME} component={Tabs} />
                <Stack.Screen name={route.PART_DES} component={PartDiscription} />
                <Stack.Screen name={route.TESTING_PART} component={TestingPart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;