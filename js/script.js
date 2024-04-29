let cronometro;
let tiempo = { minutos: 0, segundos: 0, milisegundos: 0 };

function actualizarTiempo() {
    tiempo.milisegundos += 10;
    if (tiempo.milisegundos >= 1000) {
        tiempo.milisegundos = 0;
        tiempo.segundos++;
    }
    if (tiempo.segundos >= 60) {
        tiempo.segundos = 0;
        tiempo.minutos++;
    }
    document.getElementById('minutos').textContent = formato(tiempo.minutos);
    document.getElementById('segundos').textContent = formato(tiempo.segundos);
    document.getElementById('milisegundos').textContent = formato(Math.floor(tiempo.milisegundos / 10));
}

function formato(numero) {
    return numero < 10 ? '0' + numero : numero;
}

function iniciar() {
    if (!cronometro) {
        cronometro = setInterval(actualizarTiempo, 10);
    }
}

function parar() {
    clearInterval(cronometro);
    cronometro = null;
}

function reiniciar() {
    parar();
    tiempo = { minutos: 0, segundos: 0, milisegundos: 0 };
    document.getElementById('minutos').textContent = '00';
    document.getElementById('segundos').textContent = '00';
    document.getElementById('milisegundos').textContent = '00';
}