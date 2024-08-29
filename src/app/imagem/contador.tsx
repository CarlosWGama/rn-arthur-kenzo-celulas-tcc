import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// DEFINE A ESTRUTURA DO CONTADOR
export type Contador = {
    pontos: number,
    celula1: number,
    celula2: number,
    celula3: number,
}

//AO FINALIZAR A CONTAGEM RETORNA OS DADOS
export interface ContadorProps {
    onFinish: (contador: Contador) => void
}

export function Contador ({onFinish}: ContadorProps) {

    const [ contador, setContador ] = React.useState<Contador>({
        pontos: 0,
        celula1: 0,
        celula2: 0,
        celula3: 0
    })
    // -----------------------------------------------
    const adicionar = async (celula:'tipo1'|'tipo2'|'tipo3') => {
        //Busca os valores atuais do estado
        let { pontos, celula1, celula2, celula3 } = contador;

        if (celula == 'tipo1') {
            pontos += 5 //Esse tipo aumenta por exemplo 5 pontos
            celula1++
        } else if (celula == 'tipo2') {
            pontos += 10 //Esse tipo aumenta por exemplo 10 pontos
            celula2++
        } else {
            pontos += 20 //Esse tipo aumenta por exemplo 20 pontos
            celula3++
        }

        //Atualiza os valores
        setContador({ pontos, celula1, celula2, celula3 })
    }
    // --------
    const resetar = () => setContador({pontos: 0, celula1: 0, celula2: 0, celula3: 0})

    // -----------------------------------------------
    return (
      <View style={styles.container}>
        {/* CONTAGEM CELULAS */}
         <Text style={styles.textPontos}><Text style={{fontWeight: 'bold'}}>Total:</Text> {contador.pontos} pontos</Text>
         
         {/* BOTÔES CELULAS */}
         <Text>Celulas</Text>
         <View style={styles.btns}>
                <Button  title={`Celula 1 (${contador.celula1})`} onPress={() => adicionar('tipo1')} disabled={contador.pontos > 100}/>
                <Button  title={`Celula 2 (${contador.celula2})`} onPress={() => adicionar('tipo2')} disabled={contador.pontos > 100}/>
                <Button  title={`Celula 3 (${contador.celula3})`} onPress={() => adicionar('tipo3')} disabled={contador.pontos > 100}/>
                
         </View>
         
         {/* BOTÔES RESETAR CONCLUIR */}
         <Text>Operações</Text>
         <View style={styles.btns}>
            <Button title='Resetar' color='red' onPress={resetar}/>
            {/* BOTÃO FICA DESABILITADO SE A PONTUAÇÃO FOR MENOR QUE 100 */}
            <Button title='Finalizar' color='green' onPress={() => onFinish(contador)} disabled={contador.pontos < 100}/>
         </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'lightgrey',
        padding: 10
    }, 
    textPontos: {
        fontSize: 15,
        textAlign: 'center'
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});