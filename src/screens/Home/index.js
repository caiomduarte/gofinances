
//Importando os componentes necessários para construir a interface
import { View, Text, StyleSheet, Image } from 'react-native';

//Importando o tema da aplicação
import theme from '../../global/styles/theme';

//Importando o componente SignInSocialButton
import SignInSocialButton from '../../components/SignInSocialButton';

export default function Home() {
    return (

        <View style={estilos.Container}>

            <View style={estilos.Header}>
                <View style={estilos.TituloWrapper}>

                    <Image source={require('../../../assets/logotipo.png')}
                        style={estilos.Logotipo} />

                    <Text style={estilos.Title}>Controle suas finanças de forma muito simples</Text>
                    <Text style={estilos.SignInTitle}>Faça seu login com uma das contas abaixo</Text>

                </View>
            </View>

            <View style={estilos.Footer}>
                <View style={estilos.FooterWrapper}>
                    
                    <SignInSocialButton
                        textoBotao="Entre com a conta google"
                        imagem={require("../../../assets/google.png")}
                    />

                    <SignInSocialButton
                        textoBotao="Entre com a conta Apple"
                        imagem={require("../../../assets/apple.png")}
                    />
                </View>
            </View>
        </View>

    );
}

//Criando o estilo
estilos = StyleSheet.create({
    container: {
        flex: 1,
    },

    Header: {
        width: '100%',
        height: '70%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-end',
    },

    TituloWrapper: {
        alignItems: 'center'
    },

    Title: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45
    },

    SignInTitle: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 67
    },

    Footer: {
        width: '100%',
        height: '30%',
        backgroundColor: theme.colors.secondary,
    },
    FooterWrapper: {
        marginTop: -4,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    },
    Logtipo: {
        width: 120,
        height: 68
    }
})