

export function validarNovoFilme (filmeObj){
    if(!filmeObj.nome){
       throw new Error('Nome do Filme obrigatorio!!')
    }
    if(!filmeObj.sinopse){
        throw new Error('Sinopse do Filme obrigatorio!!')
     }
     if(!filmeObj.avaliacao){
        throw new Error('Avaliação do Filme obrigatorio!!')
     }
     if(isNaN(!filmeObj.avaliacao)){
        throw new Error('Avaliação do Filme invalida!!')
     }
     if(!filmeObj.lancamento){
        throw new Error('Data de lançamento do Filme obrigatorio!!')
     }
     if(filmeObj.disponivel == undefined){
        throw new Error('Estado do Filme obrigatorio!!')
     }

}

export function valorFilmeunico(registros){
   if(registros.length == 0){
      throw new Error('Filme não encontrado')
   }
}

export function validarFilmeIgual(registros){
   if(registros.length > 0){
      throw new Error('Filme ja existente')
   }
}