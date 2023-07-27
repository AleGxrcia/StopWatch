let timerRef = document.getElementById("timer");
let hr = 0, min = 0, sec = 0;
let interval;

// Evento para iniciar el Cronometro al hacer click en el boton "Start"
document.getElementById("startTimer").addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(timerDisplay, 1000);
})

// Evento para detener el Cronometro al hacer click en el boton "Stop" 
document.getElementById("stopTimer").addEventListener('click', () => {
    clearInterval(interval);
})

// Evento para reiniciar el Cronometro al hacer click en el boton "Reset"
document.getElementById("resetTimer").addEventListener('click', () => {
    clearInterval(interval);
    timerRef.innerHTML = "00 : 00 : 00";
    hr = 0, min = 0, sec = 0;
})




// Funcion para actualizar la visualizacion del cronometro
const timerDisplay = () => {
    hr = parseInt(hr); min = parseInt(min); sec = parseInt(sec)
    
    // Incrementa los segundos
    sec++;

    //Si se alcanzan los 60 segundos, este se reinicia e incrementa los minutos
    if (sec == 60) {
        sec = 0;
        min++;
    }

    //Si se alcanzan los 60 minutos, este se reinicia e incrementa las horas
    if (min == 60) { 
        min = 0;
        hr++;
    }

    /* Si los segundos, minutos y horas son menores que 10
     se le agrega delante un 0 para que mantegan el formato "00:00:00" */
     if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }

    //Actualiza la vista del cronometro tras el incremento
    timerRef.innerHTML = ` ${hr} : ${min} : ${sec}`;
}