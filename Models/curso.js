import CursoDAO from "../DB/cursoDAO.js";

export default class Curso {

    #id;
    #nomeCurso;
    #inicioCurso;
    #duracao;
    #preco;
    #vagas;
    #nivel;

    constructor(id = "", nomeCurso = "", inicioCurso = "", duracao = "", preco = "", vagas = "", nivel = "") {
        this.#id = id;
        this.#nomeCurso = nomeCurso
        this.#inicioCurso = inicioCurso
        this.#duracao = duracao
        this.#preco = preco
        this.#vagas = vagas
        this.#nivel = nivel
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get nomeCurso() {
        return this.#nomeCurso
    }

    set nomeCurso(nomeCurso) {
        this.#nomeCurso = nomeCurso
    }

    get inicioCurso() {
        return this.#inicioCurso
    }

    set inicioCurso(inicioCurso) {
        this.#inicioCurso = inicioCurso
    }

    get duracao() {
        return this.#duracao
    }

    set duracao(duracao) {
        this.#duracao = duracao
    }

    get preco() {
        return this.#preco
    }

    set preco(preco) {
        this.#preco = preco
    }

    get vagas() {
        return this.#vagas
    }

    set vagas(vagas) {
        this.#vagas = vagas
    }

    get nivel() {
        return this.#nivel
    }

    set nivel(nivel) {
        this.#nivel = nivel
    }

    toString() {
        return `
            id: ${this.#id}\n
            Nome do Curso: ${this.#nomeCurso}\n
            Início do Curso: ${this.#inicioCurso}\n
            Duração: ${this.#duracao}\n
            Preço: ${this.#preco}\n
            Vagas: ${this.#vagas}\n
            Nível: ${this.#nivel}\n
            `;
        }

    toJSON() {
        return {
            id: this.#id,
            nomeCurso: this.#nomeCurso,
            inicioCurso: this.#inicioCurso,
            duracao: this.#duracao,
            preco: this.#preco,
            vagas: this.#vagas,
            nivel: this.#nivel
        }
    }

    async gravar() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.gravar(this);
    }

    async alterar() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.alterar(this);
    }

    async excluir() {
        const cursoDAO = new CursoDAO()
        await cursoDAO.excluir(this);
    }

    async consultar() {
        const cursoDAO = new CursoDAO()
        return await cursoDAO.consultar(this);
    }
}
