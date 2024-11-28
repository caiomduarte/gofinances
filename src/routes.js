
//Importando os componentes para navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importando os icones
import { MaterialIcons } from '@expo/vector-icons';

//Importando as telas
import Dashboard from './screens/Dashboard';

//importando a tela de Cadastro
import Register from './screens/Cadastro';

//importando o tema
import theme from './global/styles/theme';



const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.secondary,
                    tabBarInactiveTintColor: theme.colors.text,
                    tabBarLabelPosition: 'beside-icon', // Muda a posição do label
                    tabBarStyle: {
                        flexDirection: 'row',
                    },
                    style: {
                        size: 20,
                        height: 88
                    },
                    tabBarLabelStyle: {

                        fontSize: 16,
                        fontWeight: 'bold',

                    }

                })}
            >
                <Tab.Screen name="Listagem" component={Dashboard}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={24}
                                color={color}
                            />
                        ))
                    }}
                />
                <Tab.Screen name="Cadastrar" component={Register}

                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="attach-money"
                                size={size}
                                color={color}
                            />
                        ))
                    }}

                />
                <Tab.Screen name="Resumo" component={Dashboard}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="pie-chart"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}