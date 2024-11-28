
//Importando os componentes utilizado
import React from "react";

//importando a lista de despesas
import despesasDomesticas from "../../utils/despesas";

//Importando o icone
import Feather from '@expo/vector-icons/Feather';

//Importando o arquivo de tema;
import theme from "../../global/styles/theme";

import { View, Text, StyleSheet } from 'react-native';

export default function HighlightCard(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{props.title}</Text>
                <Feather name="arrow-up-circle" size={24} style={styles.Icon} />
            </View>


            <View style={styles.Footer}>
                <Text style={styles.Amount}>{props.amount}</Text>
                <Text style={styles.LastTransaction}>{props.lastTransaction}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        backgroundColor: theme.colors.shape,
        width: 300,
        height: 430,
        borderRadius: 5,
        paddingTop: 19,
        paddingRight: 23,
        paddingBottom: 42,
        marginRight: 16
    },

    Header: {
        flexDirection: 'row',
        fontSize: 14,
        paddingHorizontal: 20,
        marginLeft: 10,
        color: theme.colors.text
    },

    Title: {
        color: theme.colors.text,
        marginRight: 140,
        fontSize: 19,
        fontWeight: 'bold'
    },

    Icon: {
        color: theme.colors.success,
    },

    Footer: {
        paddingHorizontal:20
    },

    Amount: {
        fontSize: 38,
        color: '#363F5F',
        marginTop: 38,
        marginBottom:15,
        fontWeight:'bold'
    },
    LastTransaction: {
        fontSize: 17,
        color: '#363F5F',
    },

})

