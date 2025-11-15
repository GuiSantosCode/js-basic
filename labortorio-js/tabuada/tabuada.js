function tabuada() {
    let numeroinput = document.getElementById('numero');
    let numero = Number(numeroinput.value);
    let tabuada = document.getElementById('tabuada');

    tabuada.innerHTML = '' ;

    let multiplicador = 1;
    let resultado = 0;

    if (numero <= 0) {
        window.alert('Escolha um número maior que 0')
    } else {
        while (multiplicador <= 10) {
            resultado = numero * multiplicador;
            tabuada.innerHTML += `<br> ${numero} X ${multiplicador} = ${resultado} <br>`;
            multiplicador ++;
        }
    }
}