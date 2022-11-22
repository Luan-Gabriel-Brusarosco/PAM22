import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaAntDesign from "./components/TelaAntDesing";
import TelaEntypo from "./components/TelaEntypo";
import TelaOcticons from "./components/TelaOcticons";

const menu = createBottomTabNavigator().Navigator;
const itenMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <itenMenu name ="Ant-Desing" componet={ TelaAntDesign }/>
        <itenMenu name ="Entypo" componet={ TelaEntypo }/>
        <itenMenu name ="Octicons" componet={ TelaOcticons }/>
      </Menu>
    </NavigationContainer>
  );
}