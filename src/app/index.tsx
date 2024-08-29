import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Imagem, useImageService } from '../services/imagens';
import { router } from 'expo-router';

export interface ListarScreenProps {
}

export default function ListarScreen (props: ListarScreenProps) {

    const imageSrv = useImageService();
    const [ imagens, setImagens ] = React.useState<Imagem[]>([]);
    // --------------------------------------
    //Busca as imagens disponiveis no banco
    const buscarImagens = async () => {
        setImagens(await imageSrv.list())
    }
    // ----
    React.useEffect(() => {
        buscarImagens();
    }, [])
    // --------------------------------------
    return (
      <View>
         <Text>Imagens</Text>

        {/* LISTA IMAGENS  */}
        {imagens.map((imagem) => (
            <TouchableOpacity onPress={() => router.push({ pathname: '/imagem', params: { id: imagem.id }})} key={imagem.id}>
                <View style={styles.imgContainer}>
                    <Image source={{uri: imagem.url}} width={100} height={100}/>
                    <Text>{imagem.titulo}</Text>
                </View>
            </TouchableOpacity>
        ))}
      </View>
    );
}
// =============
const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1

    }
});