
import salvarfilmeService from "../service/filme/salvarFilmesService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarIdService from "../service/filme/consultarIdService.js";
import { Router } from "express";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmesService from "../service/filme/deletarFilmeService.js";
import multer from "multer";
import { sync } from "touch";
const endpoints = Router()

endpoints.post('/filme', async (req, resp) => {

    try {
        let filmeObj = req.body;

        let id = await salvarfilmeService(filmeObj)

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

        let registros = await consultarFilmesService(nome);

        resp.send(registros);

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let filme = await consultarIdService(id);
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

       await alterarFilmeService(filmeObj, id)
       resp.status(204).send(); 
    
    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

endpoints.delete('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarFilmesService(id);

        resp.status(204).send(); 
    

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});

let upLoadPerfil = multer({ dest: './storage/perfil'})

endpoints.put('/filme', upLoadPerfil.single('imagem'),async (req, resp) => {

    try {
        let id = req.params.id;

        await deletarFilmesService(id);

        resp.status(204).send(); 
    

    } catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err)); 
    }
});







export default endpoints