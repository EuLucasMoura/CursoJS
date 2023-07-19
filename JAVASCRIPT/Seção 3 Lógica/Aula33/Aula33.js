const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Moura',
    idade: 22,
    endereco: {
      rua: 'Rua sergipe',
      numero: 327,
    }
  };
  
  // atribuiçao via desestruturação
  const { nome , sobrenome } = pessoa;
  console.log(nome, sobrenome);