import { consultarFilmesporId } from '../../repository/filmeRepository.js';
import { valorFilmeunico } from '../../validation/filme/filmeValidation.js';

export default async function consultarIdService(id) {
    
    let registros = await consultarFilmesporId(id);
    valorFilmeunico(registros)
    let filme = registros[0]
    return filme;
}