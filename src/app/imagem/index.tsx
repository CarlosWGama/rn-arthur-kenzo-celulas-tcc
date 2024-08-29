import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Alert } from 'react-native';
import { Imagem, useImageService } from '../../services/imagens';
import { useLocalSearchParams } from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Contador } from './contador';


export default function ImagemScreen ({params}: any) {

    const [ imagem, setImagem ] = React.useState<Imagem|null>(null);
    const imageSrv = useImageService();
    //Recupera o id passando pela rota
    const { id } = useLocalSearchParams<{id: string}>();
    // ---------------------------------------------
    const buscarImagem = async () => setImagem(await imageSrv.get(id))
    // ---------
    //Função que pega os dados do contador quando finalizado
    const handleFinish = (contador: Contador) => {
        Alert.alert('Resultado', `
            Pontos: ${contador.pontos}
            Celula 1: ${contador.celula1}
            Celula 2: ${contador.celula2}
            Celula 3: ${contador.celula3}
            `)
    }
    // ---------
    React.useEffect(() => {
        buscarImagem()
    }, []);
    // ---------------------------------------------
    return (
        <GestureHandlerRootView style={{flex: 1}}>
        {/** É necessário que a raiz do projeto seja usado o GestureHandlerRootView */}
        
        {imagem && <>
            <Text style={styles.h1}>Imagem Selecionada: {imagem.titulo}</Text>
            <Text style={{margin: 5}}>Use seus dados para dar zoom na imagem</Text>

            {/* IMAGEM */}
            <Zoom>
                <Image
                    source={{uri: imagem.url}}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').width * 0.75, //Usa 75% da altura da tela
                        resizeMode: 'contain'
                    }}
                />
            </Zoom>

            {/* OPÇÕES */}
            <Contador onFinish={handleFinish}/>
        </>}
      </GestureHandlerRootView>
    );
}
// ======================================
const styles = StyleSheet.create({
    h1: {
        margin: 5,
        fontSize: 20
    }
});