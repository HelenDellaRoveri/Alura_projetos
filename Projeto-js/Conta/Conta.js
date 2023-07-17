//classse abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){  
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objetodo tipo conta diretamente, pois essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){ // permite apenas a visualização, e nçao a maniopulação dos valores;
        return this._cliente;
    }

    _saldo = 0; // antes do # era utilizado _ para indicar que um dado era privado e não era para ser mexido;
    
    get saldo(){
        return this.saldo;
    }

    //sacar é abstratato e em todas as vezes que for utilizar, tem que atribuir sua expecificações no documento;
    sacar(valor){
    throw new Error("O método sacar da conta é abstrato, precisa ser chamado no documento");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor);{
            this._saldo -= valor;
            return valorSacado;
        }

        return 0;
        
    }

    depositar(valor){ 
        if(valor <= 100){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }

}