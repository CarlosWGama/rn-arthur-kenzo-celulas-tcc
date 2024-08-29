
export type Imagem = {
    id: string,
    titulo: string,
    url: string
}

/**
 * Objeto que realiza acesso ao banco de dados
 */
const ImageService = {

    /**
     * Retorna a lista de imagens do "Firebase"
     */
    list: async (): Promise<Imagem[]> => {
        return [
            {id: '1', titulo: 'Imagem 1', url: 'https://anatpat.unicamp.br/DSCN32442+.JPG'},
            {id: '2', titulo: 'Imagem 2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvdK32-n_Xc3FxmvidKo6OWmaN3qMp8iqkWpGj9yKdblp23akbNF2qHdDs6_fH0WLHDA&usqp=CAU'},
        ]
    },

    /**
     * Retorna os dado da imagem em si
     * @param id da iamgem
     */
    get: async(id: string) => {
        const imagens = [
            {id: '1', titulo: 'Imagem 1', url: 'https://anatpat.unicamp.br/DSCN32442+.JPG'},
            {id: '2', titulo: 'Imagem 2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvdK32-n_Xc3FxmvidKo6OWmaN3qMp8iqkWpGj9yKdblp23akbNF2qHdDs6_fH0WLHDA&usqp=CAU'},
        ]

        return imagens[imagens.map(imagem => imagem.id).indexOf(id)]
    }
}

export const useImageService = () => ImageService