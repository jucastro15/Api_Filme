import { consultarFilmesporNome, salvarFilmes } from "../../repository/filmeRepository.js";
import { validarFilmeIgual, validarNovoFilme } from "../../validation/filme/filmeValidation.js";

export default async function salvarfilmeService(filmeObj) {
    validarNovoFilme(filmeObj)
    let id = await salvarFilmes(filmeObj);

    let registros = await consultarFilmesporNome(filmeObj.nome);
    validarFilmeIgual(registros)


    return id;

}