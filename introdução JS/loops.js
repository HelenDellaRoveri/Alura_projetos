//8
console.log( `\n Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Curitiba`,
    `Gramado`,
    `Vitória`,
    `Rio de Janeiro`,
    `Salvador`,
    `São Paulo`,
);

const idadeComprador = 13;
const estaAcompanhada = true;
const destino = `São Paulo`;
let temPassagemComprada = false;


console.log("\n Destinos disponíveis: ");
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<6){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}        

console.log(destino);
console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}   

// for(let cont = 0 ; cont <3 ; cont++){
//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         }
// }