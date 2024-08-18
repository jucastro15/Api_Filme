import con from './connections.js'

export async function usuarioLogin(user)
{
    let comando = ` INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
                            VALUE(?, ?, ?)
    `
   let resposta = await con.query(comando, [user.nome, user.sinopse, user.avaliacao, user.lancamento, user.disponivel]);

   let info = resposta[0];

   let idUsuario = info.insertId;

   return idUsuario;
}