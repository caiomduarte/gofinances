


//Importando os componentes do react native
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

//Importando o icone
import Feather from '@expo/vector-icons/Feather';

//Importando o arquivo do tema
import theme from '../../global/styles/theme';

//Importando o componente HighlightCard
import HighlightCard from '../../components/HighlightCard';

//Importando o componente TransactionCard
import TransactionCard from '../../components/TransactionCard';


export default function Dashboard() {

    const despesasDomesticas = [
        { id: 1, categoria: "entrada", descricao: "Salário", valor: 5000, data: "2024-10-01" },
        { id: 2, categoria: "entrada", descricao: "Freelance", valor: 800, data: "2024-10-10" },
        { id: 3, categoria: "entrada", descricao: "Reembolso", valor: 200, data: "2024-10-15" },
        { id: 4, categoria: "saida", descricao: "Aluguel", valor: 1500, data: "2024-10-05" },
        { id: 5, categoria: "saida", descricao: "Supermercado", valor: 600, data: "2024-10-08" },
        { id: 6, categoria: "saida", descricao: "Conta de Luz", valor: 150, data: "2024-10-09" },
        { id: 7, categoria: "saida", descricao: "Internet", valor: 120, data: "2024-10-12" },
        { id: 8, categoria: "saida", descricao: "Transporte", valor: 300, data: "2024-10-15" },
        { id: 9, categoria: "saida", descricao: "Lazer", valor: 250, data: "2024-10-20" },
        { id: 10, categoria: "saida", descricao: "Academia", valor: 100, data: "2024-10-22" }
    ];

  

    return (
        <View style={estilos.Container}>
            <View style={estilos.Header}>
                <View style={estilos.UserWrapper}>
                    <View style={estilos.UserInfo}>
                        <Image style={estilos.Photo} source={{ uri: 'https://randomuser.me/api/portraits/men/56.jpg' }} />

                        <View style={estilos.User}>
                            <Text style={estilos.UserGreeting}>Olá</Text>
                            <Text style={estilos.UserName}>Caio Malheiros</Text>
                        </View>

                    </View>

                    <TouchableOpacity>
                        <Feather style={estilos.Icon} name="power" size={30} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={estilos.ScrollView}
                horizontal

                contentContainerStyle={{ paddingHorizontal: 24 }}>
                <HighlightCard
                    title="Entradas"
                    amount="R$ 17.900,00"
                    lastTransaction="Útima entrada dia 13 de abril"
                />

                <HighlightCard
                    title="Entradas"
                    amount="R$ 17.900,00"
                    lastTransaction="Útima entrada dia 13 de abril"
                />

                <HighlightCard
                    title="Entradas"
                    amount="R$ 17.900,00"
                    lastTransaction="Útima entrada dia 13 de abril"
                />

            </ScrollView>

            <Text style={estilos.Listagem}>Listagem</Text>

            <FlatList style={estilos.FlatList}
                   
                    data={despesasDomesticas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <TransactionCard item={item} />}
            />
          


        </View>
    );
}

const estilos = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: theme.colors.background,        
        alignItems:'center'

    },

    Header: {
        width: '100%',
        height: '40%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },

    UserWrapper: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70
    },

    UserInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    Photo: {
        width: 48,
        height: 48,
        borderRadius: 10
    },

    User: {
        marginLeft: 20
    },

    UserGreeting: {
        color: theme.colors.shape,
        fontSize: 18,
    },

    UserName: {
        color: theme.colors.shape,
        fontSize: 18,
        fontWeight: 'bold'
    },

    Icon: {
        color: theme.colors.secondary,
    },

    ScrollView: {
        width: '100%',
        marginTop: -160,
    },
    
    FlatList:{
        marginTop:20,
        marginLeft:25,
        width:400,  
        marginBottom:40       
    },

    Listagem:{
        fontSize:24,
        marginLeft:-250,
        marginTop:20,
        fontWeight:'bold'
    }
})