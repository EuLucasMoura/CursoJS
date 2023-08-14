// Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('Oi!');
};

// first-class-objects (Objetos de primeira classe)
// function expression 
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou um arrow function!');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando!');
    }
};
obj.falar();