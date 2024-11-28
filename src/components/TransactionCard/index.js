
//Importando os componentes utilizado
import React from "react";

//importando a lista de despesas
import despesasDomesticas from "../../utils/despesas";

//Importando o icone
import Feather from '@expo/vector-icons/Feather';

//Importando o arquivo de tema;
import theme from "../../global/styles/theme";

import { View, Text, StyleSheet } from 'react-native';

export default function TransactionCard({ item }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Category}>
                <Text style={styles.TituloFluxo}>Desenvolvimento de Site</Text>
                <Text style={styles.Balance}>R$ 17.400,00</Text>
            </View>

            <View style={styles.Footer}>
                <Text style={styles.CategoryName}>Vendas</Text>
                <Text style={styles.CategoryName}>13/04/2020</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: 370,
        height: 200,
        backgroundColor: theme.colors.shape,
        borderRadius: 5,
        paddingTop: 17,
       
        marginTop: 16
    },

    Category: {
        flexDirection: 'column',

    },

    TituloFluxo: {
        fontSize: 16,
        color: 'black',
        marginLeft: 17,
        marginVertical:10
        
    },

    Balance: {
        fontSize: 35,
        color: theme.colors.success,
        marginTop: 20,
        marginLeft:17
    },

    Footer: {
    
        height:50,
        flexDirection: 'row',        
        justifyContent: 'space-evenly', 
        marginTop: 40,
        marginLeft: -17
    },

      CategoryName: {
        fontSize: 20,
        marginLeft:-28,        
        color: theme.colors.text
    }
})