import { alterarFilmes } from "../../repository/filmeRepository.js";


export default async function alterarFilmeService(filmeObj, id) {
    
    let linhasAfetadas = await alterarFilmes(filmeObj,id);
    if(linhasAfetadas == 0){
        throw new Error('Não ocorreu nenhuma mudança')
    }

}