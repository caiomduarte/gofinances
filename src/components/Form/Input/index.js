
//Importando o componente de caixa de texto e o StyleSheet do React Native
import { TextInput, StyleSheet } from 'react-native';

//Importando o tema
import theme from '../../../global/styles/theme';

export default function Input(props) {
 return (
   <TextInput
      style={styles.TextInput}
      placeholder={props.descricao}
   />
  );
}

const styles = StyleSheet.create({
    TextInput:{
        width:'100%',
        padding: 16,
        fontSize: 14,
        color: 'grey',
        backgroundColor: theme.colors.shape,
        borderRadius:5,
        marginBottom:8
    }

})