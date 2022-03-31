//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

let arrSozin = [...arr, ...arr2];

arrSozin.shift();

console.log(arrSozin);
