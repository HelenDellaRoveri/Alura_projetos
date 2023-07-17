// 6
console.log(`Trabalhando com listas`);

// const curitiba = `Curitiba`;
// const gramado = `Gramado`;
// const vitoria = `Vitória`;
// const rioDeJaneiro = `Rio de Janeiro`;
// const salavador = `Salvador`;
// const saoPaulo = `São Paulo`;

const listasDeDestinos = new Array(
    `Curitiba`,
    `Gramado`,
    `Vitória`,
    `Rio de Janeiro`,
    `Salvador`,
    `São Paulo`,
);

// listasDeDestinos.push(`Gramado`)//adicionando um item na lista;

console.log("Destinos disponíveis: ");
// console.log(espiritoSanto, parana, rioDeJaneiro, salavador, saoPaulo);
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);

console.log(listasDeDestinos[4]);