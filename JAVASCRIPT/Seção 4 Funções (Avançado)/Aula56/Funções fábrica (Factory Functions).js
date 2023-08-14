// Factory Function (Função Fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        get nomeCompleto(){
        `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto) {
            return `${nome} está ${assunto}` ; 
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Moura', 1.75, 70);
console.log(p1.fala('falando sobre JS.'));
p1.nomeCompleto = 'Lucas Jesus Moura';
console.log(p1.imc);
console.log(p1.nome);
console.log(p1.sobrenome);