// Immediately Invoked Function Expression
(function(idade, peso, altura){

    const sobrenome = 'Moura';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(22, 70, 1.75);