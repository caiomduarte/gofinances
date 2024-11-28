
//Importando os componentes do React Native
import {TouchableOpacity, Text, StyleSheet } from 'react-native';

//Importando o arquivo do Tema
import theme from '../../../global/styles/theme';

export default function Button(props) {
 return (
   <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor: theme.colors.secondary,
        padding:10,
        borderRadius:10,
        justifyContent: 'center',
        alignItems:'center'
        
    },

    ButtonText:{
      color: theme.colors.shape,
      fontSize:18,
      fontWeight:'bold'
    }
})