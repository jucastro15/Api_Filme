import {alterarImg} from "../repository/filmeRepository.js";

export default async function alterarListaFilme(id, caminho) {

      
        let linhasAfetadas = await alterarImg(id, caminho);

       
        if (linhasAfetadas === 0) {
            throw new Error('Não ocorreu nenhuma mudança');
        }

 };