import Curso from "../Models/curso.js";

export default class CursoController {

    gravar(requisicao, resposta) {
        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            if (dados.nomeCurso && dados.inicioCurso && dados.duracao && dados.preco && dados.vagas && dados.nivel) {
                const curso = new Curso(dados.nomeCurso, dados.inicioCurso, dados.duracao, dados.preco, dados.vagas, dados.nivel);
                curso.gravar()
                    .then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Curso cadastrado com sucesso"
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao cadastrar curso:" + erro.message
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do curso (nomeCurso, inicioCurso, duracao, preco, vagas, nivel)"
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida"
            });
        }
    }

    alterar(requisicao, resposta) {
        if ((requisicao.method === "PUT" || requisicao.method === "PATCH") && requisicao.is("application/json")) {
            const dados = requisicao.body;
            if (dados.nomeCurso && dados.inicioCurso && dados.duracao && dados.preco && dados.vagas && dados.nivel) {
                const nomeCurso = requisicao.params.nomeCurso;
                const curso = new Curso(nomeCurso, dados.inicioCurso, dados.duracao, dados.preco, dados.vagas, dados.nivel);
                curso.alterar()
                    .then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Curso atualizado com sucesso"
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao atualizar o curso:" + erro.message
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do curso (inicioCurso, duracao, preco, vagas, nivel). O nome do curso deve ser informado na URL"
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida"
            });
        }
    }

    excluir(requisicao, resposta) {
        if (requisicao.method === "DELETE") {
            const nomeCurso = requisicao.params.nomeCurso;
            if (nomeCurso) {
                const curso = new Curso();
                curso.consultar()
                    .then((listaCursos) => {
                        const curso = listaCursos[0];
                        if (curso) {
                            curso.excluir()
                                .then(() => {
                                    resposta.status(200).json({
                                        status: true,
                                        mensagem: "Curso excluído com sucesso"
                                    });
                                })
                                .catch((erro) => {
                                    resposta.status(500).json({
                                        status: false,
                                        mensagem: "Erro ao excluir o curso." + erro.message
                                    });
                                });
                        } else {
                            resposta.status(404).json({
                                status: false,
                                mensagem: "Curso não encontrado"
                            });
                        }
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao consultar o curso para exclusão." + erro.message
                        });
                    });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida"
            });
        }
    }

    consultar(requisicao, resposta) {
        if (requisicao.method === "GET") {
            const nomeCurso = requisicao.params.nomeCurso;
            const curso = new Curso();
            if (nomeCurso) {
                curso.consultar()
                    .then((listaCursos) => {
                        if (listaCursos.length > 0) {
                            resposta.status(200).json({
                                status: true,
                                mensagem: "Consulta realizada com sucesso",
                                cursos: listaCursos[0]
                            });
                        } else {
                            resposta.status(404).json({
                                status: false,
                                mensagem: "Curso não encontrado"
                            });
                        }
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao consultar o curso." + erro.message
                        });
                    });
            } else {
                curso.consultar()
                    .then((listaCursos) => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Consulta realizada com sucesso",
                            cursos: listaCursos
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao consultar os cursos." + erro.message
                        });
                    });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida"
            });
        }
    }
}