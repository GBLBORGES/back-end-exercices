/* eslint no-underscore-dangle: 0 */
export default class Cliente {
  private _nome : string;

  constructor(nome:string) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome.length < 3) {
      throw new Error('nome deve conter mais de 3 caracteres');
    }
    this._nome = nome;
  }
}

const Joao = new Cliente('joao');

console.log(typeof Joao.nome);
