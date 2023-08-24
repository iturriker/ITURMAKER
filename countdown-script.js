// Establecer la fecha de inicio y finalización del contador regresivo
var startDate = new Date("2023-07-13T21:35:00");
var endDate = new Date("2023-10-06T08:25:00");
var formattedstartDate = startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear();
var formattedendDate = endDate.getDate() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getFullYear();

// Función para calcular y mostrar la cuenta regresiva y el progreso
function showCountdown() {
    var now = new Date();
    var timeDiff = endDate.getTime() - now.getTime();
    var totalTime = endDate.getTime() - startDate.getTime();
    var progress = (totalTime - timeDiff) / totalTime * 100;
    var roundedprogress = progress.toFixed(2);

    if (timeDiff <= 0) {
        // Si la cuenta regresiva ha terminado, muestra un mensaje o realiza una acción
        document.getElementById("countdown").innerHTML = "!!!!!!!!!";
        document.getElementById("progress-bar").style.display = "none";
    } else {
        // Calcular los días, horas, minutos y segundos restantes
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Mostrar la cuenta regresiva en el elemento con el ID "countdown"
        document.getElementById("countdown").innerHTML = days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos";

        // Actualizar el progreso de la barra
        document.getElementById("progress-bar").style.display = "block";
        document.querySelector(".progress").style.width = progress + "%";

        // Mostrar el porcentaje en el elemento con el ID "percentaje"
        document.getElementById("percentaje").innerHTML = roundedprogress + "%" + " del total";

        // Mostrar el porcentaje en el elemento con el ID "percentaje"
        document.getElementById("data").innerHTML = "Fecha de inicio del viaje: " + formattedstartDate + "<br>Fecha de fin del viaje: " + formattedendDate;

    }
}

// Llamar a la función showCountdown() para mostrar la cuenta regresiva inicialmente
showCountdown();

// Actualizar la cuenta regresiva cada segundo
setInterval(showCountdown, 1000);