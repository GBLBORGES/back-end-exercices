// eslint-disable-next-line max-len
/* Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho. */

// eslint-disable-next-line max-len
/* Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante. */

export default class Aluno {
  private matricula: string;

  private nome: string;

  private notasDeProva: Array<number> = [0, 0, 0, 0];

  private notasDeTrabalho: Array<number> = [0, 0];

  constructor(matricula: string, nome: string) {
    this.matricula = matricula;
    this.nome = nome;
  }
}
