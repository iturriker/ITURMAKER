// Establecer la fecha de inicio y finalización del contador regresivo
var startDate = new Date("2023-07-13T21:35:00");
var endDate = new Date("2023-10-06T08:25:00");

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
    }
}

function showDates(){
    var formattedstartDate = startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear();
    var formattedendDate = endDate.getDate() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getFullYear();

    // Mostrar el porcentaje en el elemento con el ID "percentaje"
    document.getElementById("data").innerHTML = "Fecha de inicio del viaje: " + formattedstartDate + "<br>Fecha de fin del viaje: " + formattedendDate;
}

function showWeekends(){
    var now = new Date();
    var weekendsCount = 0;

    while (now <= endDate) {
        var weekenddays = now.getDay(); // 0 (Domingo) a 6 (Sábado)
        if (weekenddays === 6) {
            weekendsCount++;
        }
        now.setDate(now.getDate() + 1);
    }

    // Mostrar el Nº de fines de semana"
    document.getElementById("weekends").innerHTML = weekendsCount + " fines de semana restantes";
}

// Llamar a las funciones
showDates();
showWeekends();
showCountdown();

// Actualizar la cuenta regresiva cada segundo
setInterval(showCountdown, 1000);