/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint no-underscore-dangle: 0 */

import Cliente from './Cliente';

import ItemPedido from './ItemPedido';

export default class Pedido {
  private _cliente:Cliente;

  private _itemsPedido:ItemPedido[] = [];

  private _forma_de_pagamento:string;

  private desconto?: number;

  constructor(cliente: Cliente, itemsPedido: ItemPedido[], formaDePagamente: string) {
    this._cliente = cliente;
    this._itemsPedido = itemsPedido;
    this._forma_de_pagamento = formaDePagamente;
  }

  get formaDePagamento(): Cliente {
    return this._cliente;
  }

  set FormaDePagamento(formaDePagamento: string) {
    this._forma_de_pagamento = formaDePagamento;
  }

  get itemsPedido(): ItemPedido[] {
    return this._itemsPedido;
  }

  set itemsPedido(ItemsPedido: ItemPedido[]) {
    this._itemsPedido = ItemsPedido;
  }

  get formaDe(): Cliente {
    return this._cliente;
  }

  set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  calculaPedidos() {
    if (this._itemsPedido.length < 1) {
      throw new Error('voce deve ter ao menos 1 pedido');
    }
    const items = this.itemsPedido.map((element) => element.preço).reduce((pv, cv) => pv + cv);
    return items;
  }
}

const gabriel = new Cliente('Gabriel Borges');

const itemGabriel1 = new ItemPedido('carne de porco', 16);

const itemGabriel2 = new ItemPedido('arroz ao ponto', 5);

const pedidoGabriel = new Pedido(gabriel, [itemGabriel1, itemGabriel2], 'pix');

pedidoGabriel.calculaPedidos();
