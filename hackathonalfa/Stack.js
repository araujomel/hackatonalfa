/* Imports para o navigation */
import { createStackNavigator } from '@react-navigation/stack';

/* Pages */
import Login from './pages/Login';

import InitialPage from './pages/Initial';
import RDO from './pages/RDO'
import RegisterRDC from './pages/RegisterRDC';
import RegisterRDC2 from './pages/RegisterRDC2';

const Stack = createStackNavigator();

export default function Pilha(){
  return(
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>

      <Stack.Screen
      name="Login"
      component={Login}
      
      />

    <Stack.Screen
      name="InitialPage"
      component={InitialPage}
      
      />
      

    <Stack.Screen
      name="RDO"
      component={RDO}

    />

    <Stack.Screen
      name="RegisterRDC"
      component={RegisterRDC}

    />

    <Stack.Screen
      name="RegisterRDC2"
      component={RegisterRDC2}

    />

    </Stack.Navigator>
  );
}