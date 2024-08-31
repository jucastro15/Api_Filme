import connection from './connections.js'

export async function salvarFilmes(filme) {
   let comando = ` INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                            VALUE(?, ?, ?, ?, ?)
    `
   let resposta = await connection.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

   let info = resposta[0];

   let idFilme = info.insertId;

   return idFilme;
}

export async function consultarFilmes(nome) {
   let comando = `SELECT id_filme          id,
                         nm_filme          nome, 
                         vl_avaliacao      avaliacao, 
                         dt_lancamento     lancamento, 
                         bt_disponivel     disponivel
                  FROM tb_filme
                  WHERE nm_filme LIKE ?`;

   let resposta = await connection.query(comando, [`%${nome}%`]);
   let registros = resposta[0];
   return registros;
}

export async function consultarFilmesporId(id) {
   let comando = `SELECT id_filme  id,
                          nm_filme   nome, 
                          ds_sinopse  sinopse,
                          vl_avaliacao  avaliacao, 
                          dt_lancamento  lancamento, 
                          bt_disponivel  disponivel,
                          img_filme  img
                   FROM tb_filme
                   WHERE id_filme = ?`;
   let resposta = await connection.query(comando, [id]);
   let filme = resposta[0];
   return filme;
}


export async function consultarFilmesporNome(nome) {
   let comando = `SELECT id_filme          id,
                         nm_filme          nome, 
                         vl_avaliacao      avaliacao, 
                         dt_lancamento     lancamento, 
                         bt_disponivel     disponivel
                  FROM tb_filme
                  WHERE nm_filme = ?`;

   let resposta = await connection.query(comando, [nome]);
   let registros = resposta[0];
   return registros;
}

export async function alterarFilmes(filme, id) {
   let comando = `UPDATE tb_filme
                    SET
                    ds_sinopse = ?,
                    nm_filme = ?, 
                    vl_avaliacao = ?, 
                    dt_lancamento=?, 
                    bt_disponivel=?
                   WHERE id_filme = ?`;

     let resposta = await connection.query(comando, [filme.sinopse, filme.nome, filme.avaliacao, filme.lancamento, filme.disponivel, id]);

     let info = resposta[0];
     let linhasAfetadas = info.affectedRows;

     return linhasAfetadas;
}

export async function deletarFilmes(id) {
   let comando = `DELETE FROM tb_filme WHERE id_filme = ?;`;

     let resposta = await connection.query(comando, [id]);
     let info = resposta[0];
     let linhasDeletadas = info.affectedRows;
     

     return linhasDeletadas;
}