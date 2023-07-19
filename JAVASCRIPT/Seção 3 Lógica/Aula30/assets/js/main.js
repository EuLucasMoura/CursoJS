const dataAtual = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabádo';
            return diaSemanaTexto;
    }
}

// function getNomeMes(nomeMes) {
//     let nomeMes
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'Janeiro';
//             return nomeMes;
        
//         case 1:
//             nomeMes = 'Feveireiro';
//             return nomeMes;
        
//         case 2:
//             nomeMes = 'Março';
//             return nomeMes;
        
//         case 3:
//             nomeMes = 'Abril';
//             return nomeMes;
        
//         case 4:
//             nomeMes = 'Maio';
//             return nomeMes;
        
//         case 5:
//             nomeMes = 'Junho';
//             return nomeMes;
        
//         case 6:
//             nomeMes = 'Julho';
//             return nomeMes;
        
//         case 7:
//             nomeMes = 'Agosto';
//             return nomeMes;
        
//         case 8:
//             nomeMes = 'Setembro';
//             return nomeMes;
        
//         case 9:
//             nomeMes = 'Outubro';
//             return nomeMes;
        
//         case 10:
//             nomeMes = 'Novembro';
//             return nomeMes;
        
//         case 11:
//             nomeMes = 'Dezembro';
//             return nomeMes;
        
//     }
// }

function getData() {
    const agora = new Date();
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const diaDaSemana = diasDaSemana[agora.getDay()];
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    const dia = agora.getDate();
    const mes = agora.getMonth() + 1; // Adiciona 1 porque os meses são indexados a partir de 0
    const ano = agora.getFullYear();
  
    return `${diaDaSemana}, ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  }
  
  console.log(getData());

dataAtual.innerHTML = getData();