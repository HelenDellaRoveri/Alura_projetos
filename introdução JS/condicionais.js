// 7
console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Curitiba`,
    `Gramado`,
    `Vitória`,
    `Rio de Janeiro`,
    `Salvador`,
    `São Paulo`,
);

const idadeComprador = 13;
const estaAcompanhada = true;
let temPassagemComprada = false; 
const destino = "Curitiba"

console.log("Destinos disponíveis: ");
console.log(listasDeDestinos);

if( idadeComprador >= 18 || estaAcompanhada == true ){ 

    console.log("Destinos para maior de idade ou está acompanhado por um adulto")
    listasDeDestinos.splice(3,1);
    console.log(listasDeDestinos);
}else{                                        
    console.log("Consumidor é menor de idade e não pode continuar a compra"); 
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
    temPassagemComprada = true;
}else{
    console.log("Não é maior de Idade e não pode comprar");
    temPassagemComprada = false;
} 


// idadeComprador > 18 maior que 
// idadeComprador < 18 menor que 
// idadeComprador <= 18 menor que ou igual
// idadeComprador >= 18 maior que ou igual
// idadeComprador == 18 igual