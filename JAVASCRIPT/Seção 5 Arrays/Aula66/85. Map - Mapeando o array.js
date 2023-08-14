// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2)
console.log(dobro);

// Para cada elemento:
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com O nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

// Adicione uma chave id em cada objeto

const id = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(id);
console.log(pessoas);