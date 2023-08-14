const nome = 'Lucas';

function falaNome(){
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Moura';
    falaNome();
}

usaFalaNome();