import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);
// contaCorrenteRicardo.depositar(500);
// conta2.depositar(500);
//const cliente2 = new Cliente("Alice", 88822233309); // constructor que chama essa tag;
// const conta2 = new ContaCorrente(cliente2, 102)
// console.log("\n", cliente2, conta2);]
// console.log("\n Número de contas criadas no Banco DRBank", ContaCorrente.numeroDeContas);

// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

