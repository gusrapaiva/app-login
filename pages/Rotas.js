import {createStackNavigator} from "@react-navigation/stack";

import Home from './home';
import Login from './login';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options ={{headerShown:false, title:"Login"}} />
    <Stack.Screen name="home" component={Home} options={{headerShown:true, title:"Home"}}/>
    </Stack.Navigator>
  );
}