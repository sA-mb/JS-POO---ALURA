//importar clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

const cliente = new Cliente("Sebas", "666777", "888999");
const clienteX = new Cliente("X", "999111", "222333");

const cuentaDeSebas = new CuentaCorriente(cliente, "1", "101");
const cuentaDeX = new CuentaCorriente(clienteX, "2", "202");

console.log(CuentaCorriente.cantidadCuentas);
