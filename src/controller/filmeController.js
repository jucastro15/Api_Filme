import  { salvarFilmes } from "../repository/filmeRepository.js";

import { Router } from "express";
const endpoints = Router()

endpoints.post( '/filme', async (req, resp) =>{

try{
       let filmeObj = req.body;

  let id = await salvarFilmes(filmeObj);

  resp.send({
    id:id
  })  
    }
catch (err){
    logError(err)
    resp.status(400).send(criarErro(err));

    }
  
})




export default endpoints