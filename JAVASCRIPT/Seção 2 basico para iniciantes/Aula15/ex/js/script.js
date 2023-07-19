/* Aparecer caixa  de dialogo */
const n = parseFloat(prompt("Digite um número: "));
/* raiz */
const raiz = Math.sqrt(n)
/* Criar as variáveis */
const numeroTitulo = document.getElementById('numero-titulo');
const raizq = document.getElementById('raizq');
const inteiro = document.getElementById('inteiro');
const notnumb = document.getElementById('notnumb');
const arredbx = document.getElementById('arredbx');
const arredcm = document.getElementById('arredcm')
const dcm = document.getElementById('dcm')
/* Jogar a variável no html */
numeroTitulo.innerHTML = n;
raizq.innerHTML = `<p>Raiz Quadrada: ${raiz}</p>`;
inteiro.innerHTML  = `<p>${n} é inteiro: ${Number.isInteger(n)}</p>`;
notnumb.innerHTML = `<p>É NaN: ${isNaN(n)}</p>`;
arredbx.innerHTML = `<p>Arrendondando pra baixo. ${Math.floor(n)}</p>`;
arredcm.innerHTML = `<p>Arrendondando pra cima. ${Math.ceil(n)}</p>`;
dcm.innerHTML = `<p>Com duas casas decimais: ${n.toFixed(2)}</p>`;


