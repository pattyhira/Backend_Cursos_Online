import CursoDAO from "../DB/cursoDAO.js";

export default class Curso {

    #id;
    #nomeCurso;
    #inicioCurso;
    #duração;
    #preço;
    #vagas;
    #nível;

    constructor(id = "", nomeCurso = "", inicioCurso = "", duração = "", preço = "", vagas = "", nível = "") {
        this.#id = id;
        this.#nomeCurso = nomeCurso
        this.#inicioCurso = inicioCurso
        this.#duração = duração
        this.#preço = preço
        this.#vagas = vagas
        this.nível = nível
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get id() {
        return this.#nomeCurso
    }

    set nomeCurso(nomeCurso) {
        this.#nomeCurso = nomeCurso
    }

    get inícioCurso() {
        return this.#inicioCurso
    }

    set inícioCurso(inicioCurso) {
        this.#inicioCurso = inicioCurso
    }

    get duração() {
        return this.#duração
    }

    set duração(duração) {
        this.#duração = duração
    }

    get preço() {
        return this.#preço
    }

    set preço(preço) {
        this.#preço = preço
    }

    get vagas() {
        return this.#vagas
    }

    set vagas(vagas) {
        this.#vagas = vagas
    }

    get nível() {
        return this.#nível
    }

    set nível(nível) {
        this.#nível = nível
    }

    toString() {
        return `
            id: ${this.#id}\n
            Nome do Curso: ${this.#nomeCurso}\n
            Início do Curso: ${this.#inicioCurso}\n
            Duração: ${this.#duração}\n
            Preço: ${this.#preço}\n
            Vagas: ${this.#vagas}\n
            Nível: ${this.#nível}\n
            `;
        }

    toJSON() {
        return {
            id: this.#id,
            nomeCurso: this.#nomeCurso,
            inícioCurso: this.#inicioCurso,
            duração: this.#duração,
            preço: this.#preço,
            vagas: this.#vagas,
            nível: this.#nível
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
        await cursoDAO.exclui(this);
    }

    async consultar() {
        const cursoDAO = new CursoDAO()
        return await cursoDAO.consultar(this);
    }
}
