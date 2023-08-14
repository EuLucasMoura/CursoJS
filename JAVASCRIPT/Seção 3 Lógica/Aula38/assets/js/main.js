const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
console.log(paragrafos)
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}