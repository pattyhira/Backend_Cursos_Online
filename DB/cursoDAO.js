import Curso from "../Models/curso.js";

import conectar from "./conexao.js";

export default class CursoDAO {

    async gravar(curso){
        if (curso instanceof Curso){
            const conexao = await conectar();
            const sql = "INSERT INTO cursos(id, nomeCurso, inicioCurso, duracao, preco, vagas, nivel) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const parametros = [
                curso.id,
                curso.nomeCurso,
                curso.inicioCurso,
                curso.duracao,
                curso.preco,
                curso.vagas,
                curso.nivel
            ];

            await conexao.execute(sql, parametros);    
            conexao.release();
        }
    }

    async alterar(curso){
        if (curso instanceof Curso){
            const conexao = await conectar();
            const sql = "UPDATE cursos SET nomeCurso = ?, inicioCurso = ?, duracao = ?, preco = ?, vagas = ?, nivel = ? WHERE id = ?";
            const parametros = [
                curso.nomeCurso,
                curso.inicioCurso,
                curso.duracao,
                curso.preco,
                curso.vagas,
                curso.nivel,
                curso.id,
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async excluir(curso){
        if (curso instanceof Curso){
            const conexao = await conectar();
            const sql = "DELETE FROM cursos WHERE id = ?";
            const parametros = [curso.id];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async consultar(){
        const conexao = await conectar();
        const sql = "SELECT * FROM cursos INNER JOIN nomeCurso = ?, inicioCurso = ?, duracao = ?, preco = ?, vagas = ?, nivel = ? ON cursos.id = nomes.curso_id";
        const [registros] = await conexao.query(sql);
        await conexao.release();
        
        for (const registro of registros){
            const curso = new Curso(registro.id, registro.nomeCurso, registro.inicioCurso, registro.duracao, registro.preco, registro.vagas, registro.nivel);
        
            listaCursos.push(curso);
        }
    }
}