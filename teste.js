import Curso from "./Models/curso.js"


const curso = new Curso ("1", "Node.js para Iniciantes", "2025-09-01", "8 semanas", 499.9, 30, "Iniciante");
await curso.gravar();

//console.log("Curso gravado com sucesso!");
//console.log("O curso recebeu o seguinte id:" + curso.id);

//curso.nivel = "Intermediário";
//await curso.alterar();
//console.log("Curso alterado com sucesso!");

//curso.id = "1";
//await curso.excluir();
//console.log("Curso excluído com sucesso!");