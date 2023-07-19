function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.pegaInfo();
        this.capturaEnter();
    }

    this.pegaInfo = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eql')) this.realizaConta();
        });
    }

    this.addNumDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
            this.realizaConta();
        }
        })
    }
    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('conta inválida!');
                return;
            }

            this.display.value = conta

        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    }


}

const calculadora = new Calculadora();
calculadora.inicia();