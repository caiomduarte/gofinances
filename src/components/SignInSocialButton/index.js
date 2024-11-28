
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native'

import theme from '../../global/styles/theme';
import { View } from 'react-native';

export default function SignInSocialButton(props) {
 return(
   <TouchableOpacity style={styles.Button} >
        
        <View style={styles.ImageContainer}>
             <Image 
                source={props.imagem}
                style={{width:22, height:22}}
                 /> 
          </View>

         <Text style={styles.ButtonText}>{props.textoBotao}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({   
    Button:{
        backgroundColor: theme.colors.shape,
        borderRadius:5,
        height:56,     
        marginBottom:16,
        flexDirection:'row',
        alignItems:'center'
    },

    ImageContainer:{
        backgroundColor:theme.colors.background,
        height:'100%',
        width: 60,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        borderColor: theme.colors.background,
        borderRightWidth: 1
    },

    ButtonText:{
        textAlign:'center',
        fontSize:18,
        textAlign:'center',
        marginLeft:20     
    }
})