import { deletarFilmes } from "../../repository/filmeRepository.js";


export default async function deletarFilmesService(id) {
   
    let linhasDeletadas = await deletarFilmes(id);
    if(linhasDeletadas == 0){
        throw new Error('Nenhuma linha deletada')
    }
    return linhasDeletadas;

}