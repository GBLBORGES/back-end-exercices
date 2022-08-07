/* eslint no-underscore-dangle: 0 */
export default class Pedido {
  private _nomeDopedido: string;

  private _preço: number;

  constructor(nomeDopedido: string, preço: number) {
    this._nomeDopedido = nomeDopedido;
    this._preço = preço;
  }

  get nomeDoPedido(): string {
    return this._nomeDopedido;
  }

  set nomeDoPedido(nomeDoPedido: string) {
    if (nomeDoPedido.length < 4) {
      throw new Error('pedido deve contar ao menos 4 carateres');
    }
    this._nomeDopedido = nomeDoPedido;
  }

  get preço(): number {
    return this._preço;
  }

  set preço(preço: number) {
    if (preço <= 2) {
      throw new Error('o valor deve ser acima de 2 reais');
    }
    this._preço = preço;
  }
}
