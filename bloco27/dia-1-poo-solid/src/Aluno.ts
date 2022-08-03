/* eslint-disable no-underscore-dangle */
/* eslint class-methods-use-this: "error" */
/* eslint-env es6 */

export default class Aluno {
  private _matricula: string;

  private _nome: string;

  private _notasDeProva: Array<number> = [0, 0, 0, 0];

  private _notasDeTrabalho: Array<number> = [0, 0];

  constructor(matricula: string, nome: string, notasDeProva: number[], notasDeTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  // eslint-disable-next-line class-methods-use-this
  calculatorNotas(notasDeProva: number[], notasDeTrabalho:number[]): number {
    const sumNotasDeProva = notasDeProva.reduce((previous, current) => previous + current, 0);
    const sumNotasDeTrabalho = notasDeTrabalho.reduce((previous, current) => previous + current, 0);
    return (sumNotasDeProva + sumNotasDeTrabalho);
  }

  mediaDoAlunos() {
    const notaTotal = this.calculatorNotas(this._notasDeProva, this._notasDeTrabalho);
    return notaTotal / 6;
  }
}

const gabriel = new Aluno('2/08/2022', 'gabriel barbosa lima borges', [10, 6, 8, 5], [10, 10]);

gabriel.calculatorNotas([10, 6, 8, 5], [10, 10]);
