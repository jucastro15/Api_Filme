
import express from 'express';

import filmeController  from "./controller/filmeController.js";



export default  function AdicionaRotas(servidor){

    //arquivos estaticos
    servidor.use('/storage/perfil', express.static('./storage/perfil'));

    //arquivos controllers
    servidor.use(filmeController);
      
    
}