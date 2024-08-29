# Projeto prototipo contagem de Celula

- O aplicativo deverá selecionar uma imagem, podendo dar zoom e realizar a contagem de celulas. 

------

## Aplicativo

- O aplicativo é feito em Expo e pode ser testado pelo QRCode abaixo


[]

## Código

Para usar o código, basta baixar, instalar primeiro as dependencias e executar:

```
    npm install
    npm start
```

O projeto utiliza a biblitoeca do react-native-zoom-reanimated, para animar as imagens, como é demonstrado no exemplo abaixo do arquivo /src/app/imagem/index.tsx:

```ts
    <GestureHandlerRootView style={{flex: 1}}>
        {/** É necessário que a raiz do projeto seja usado o GestureHandlerRootView */}
        
        {/** ... */}

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

        {/** ... */}
    </GestureHandlerRootView>
```

Também possui um componente para controlar as ações da contagem dos usuários, no arquivo /src/app/iamgem/contador.tsx:

(./documentacao/contador.jpg)

```ts
    //Define a estrutura da pontuação e quantas celulas existem
    const [ contador, setContador ] = React.useState<Contador>({
        pontos: 0,
        celula1: 0,
        celula2: 0,
        celula3: 0
    })
    
    // ... 

    // -----------------------------------------------
    //Define o calculo assim que for  clicado na opção da contagem de celulas
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
```