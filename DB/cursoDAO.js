import Curso from "..Models/curso.js";

export default class CursoDAO {

    async gravar(curso){
        if (curso instanceof Curso){
            const conexao = await conectar();
            const sql = "INSERT INTO curso (id, nomeCurso, inícioCurso, duração, preço, vagas, nível) VALUES (?,?,?,?,?,?,?)";
            const parametros [
                curso.id,
                curso.nomeCurso,
                curso.inícioCurso,
                curso.duração,
                curso.preço,
                curso.vagas,
                curso.nível
            ];

            await conexao.execute(sql, parametros);    

        }
    }

    async alterar(curso){}

    async excluir(curso){}

    async consultar(curso){}
}