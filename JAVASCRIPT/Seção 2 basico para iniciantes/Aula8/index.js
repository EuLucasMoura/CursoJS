const nome = "Lucas";
const sobreNome = "Moura";
const idade = 22;
const peso = 70;
const alturaEmM = 1.75;
let imc = peso / (alturaEmM * alturaEmM)
const anoDeNascimento = 2001

console.log(nome, sobreNome, "tem ", idade, "anos, pesa", peso, "KG,\n tem", alturaEmM, "de altura e seu IMC é de ", imc)
console.log(`${nome} nasceu em ${anoDeNascimento}`)
