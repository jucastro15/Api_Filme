
import * as db from "../service/filme/salvarFilmesService.js";


import { Router } from "express";

import multer from "multer";
import { sync } from "touch";
import alterarListaFilme from "../service/filme/alterarImgfilme.js";
const endpoints = Router()

endpoints.post('/filme', async (req, resp) => {

    try {
        let filmeObj = req.body;

        let id = await db.salvarfilmeService(filmeObj)

        resp.send({
            id: id
        })
    }
    catch (err) {
        logError(err)
        resp.status(400).send(criarErro(err));

    }

});

endpoints.get('/filme', async (req, resp) => {
    
    try {
        let nome = req.query.nome; 

        let registros = await db.consultarFilmesService(nome);

        resp.send(registros);

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let filme = await db.consultarIdService(id);
        resp.send(filme);

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});


endpoints.put('/filme/:id', async (req, resp) => {
    try {
        let filmeObj = req.body;
        let id = req.params.id

       await db.alterarFilmeService(filmeObj, id)
       resp.status(204).send(); 
    
    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

endpoints.delete('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await db.deletarFilmesService(id);

        resp.status(204).send(); 
    

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

let upLoadPerfil = multer({ dest: './storage/perfil'})

endpoints.put('/filme/:id/image', upLoadPerfil.single('imagem'), async (req, resp) => {

    try {
        let id = req.params.id;
        let caminho = req.file.path;
        await alterarListaFilme(id, caminho)
        resp.send();

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err));
    }
});





export default endpoints