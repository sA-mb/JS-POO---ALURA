import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  #cliente;
  numero;
  #saldo;
  agencia;
  static cantidadCuentas = 0;

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numero, agencia) {
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = 0;
    CuentaCorriente.cantidadCuentas++;
  }

  //Definicion de Metodos
  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
    return this.#saldo;
  }

  retiroEnCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirCuenta(valor, cuentaDestino) {
    if (valor <= this.#saldo) {
      this.retiroEnCuenta(valor);
      cuentaDestino.depositoEnCuenta(valor);
    }
  }
}
