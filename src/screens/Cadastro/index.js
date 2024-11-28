
//Importando o React
import React, { useState } from 'react';

//Importando os compoentes do react native
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Importando o tema
import theme from '../../global/styles/theme';

//Importando o componente TextInput
import Input from '../../components/Form/Input';

//Importando o Picker
import { Picker } from '@react-native-picker/picker';

//Importando o componente Button
import Button from '../../components/Form/Button';

export default function Register() {

    //Criando o array de opções
    const options = ['Entrada', 'Saída'];

    //Adicionando os states para controlar a opção selecionada no combo
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedOption, setSelectedOption] = useState(null);


    function handleTransactionTypeSelect(tipoTransacao) {
        console.log(tipoTransacao)
        SetTipoTransacao(tipoTransacao)
    }


    return (
        <View style={styles.Container}>

            <View style={styles.Header}>
                <Text style={styles.Title}>Cadastro</Text>
            </View>

            <View style={styles.Form}>
                <View style={styles.Fields}>
                    <Input descricao='Nome' />

                    <Input descricao='Preço' />

                    <View style={styles.TransactionTypes}>

                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.radioContainer}
                                onPress={() => setSelectedOption(option)}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedOption === option && <View style={styles.selectedCircle} />}
                                </View>
                                <Text style={styles.radioText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ background: 'red' }}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Compras" value="1" style={styles.ItemPicker} />
                            <Picker.Item label="Alimentação" value="2" style={styles.ItemPicker} />
                            <Picker.Item label="Salário" value="2" style={styles.ItemPicker} />
                            <Picker.Item label="Lazer" value="2" style={styles.ItemPicker} />
                      </Picker>
                    </View>
                </View>
                
                <Button texto="Enviar" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },

    Header: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 113,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 19
    },

    Form: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        padding: 24
    },

    Title: {
        fontSize: 18,
        color: theme.colors.shape
    },

    Fields: {
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 16
    },

    TransactionTypes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 16
    },

    radioContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: theme.colors.primary,
    },
    radioText: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    pickerContainer: {
        borderWidth: 2,
        borderColor: theme.colors.primary, 
        borderRadius: 5, 
        overflow: 'hidden'
      },

    ItemPicker: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

})