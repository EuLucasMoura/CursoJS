// filter -> sempre vai retornar a mesma quantidade de elementos ou menos
//map ->  , reduce 
//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numeroFiltrados = numeros.filter(valor => valor > 10);

console.log(numeroFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];
// Retorne as pessoas que tem o nome com 5 letras ou mais

const maior5 = pessoas.filter(obj => obj.nome.length > 5);
console.log(maior5);

// Retorne as pessoas com mais de 50 anos
const velhos = pessoas.filter(obj => obj.idade > 50);
console.log(velhos);

// Retorne as pessoas cujo nome termina com a
const  termina = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(termina)