document.addEventListener("DOMContentLoaded", function () {
  
    //   Archivo de audio
    var audio = document.getElementById("audio");
    if (audio) {
        audio.volume = 0.3;
    } else {
        console.error("No se encontró el elemento de audio.");
    }

    
    //  Creacion de cronometro
    function crearCountdown(){
        var targetDate = new Date("2024-10-26T17:30:00");
        var currentDate = new Date();
        var diferencia = targetDate - currentDate;

        var days = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var hour = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minu = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var seco = Math.floor((diferencia % (1000 * 60)) / 1000);


        document.getElementById("dia").innerText = days;
        document.getElementById("hor").innerText = hour;
        document.getElementById("min").innerText = minu;
        document.getElementById("seg").innerText = seco;
        
    }

    setInterval(crearCountdown, 1000);
    crearCountdown();

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function muestraLi(){
        var items = document.querySelectorAll(".timeline li");
        items.forEach(function (item) {
            if(isElementInViewport(item)){
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', function(){
        muestraLi();
    });

    muestraLi();

    var hoy = new Date();
    var anio = hoy.getFullYear();
    document.getElementById("anio").innerText = anio;



    const urlParams = new URLSearchParams(window.location.search);

    const header = urlParams.get('header');
    const body = urlParams.get('body');
    const cantidad = urlParams.get('cantidad');
    const footer = urlParams.get('footer');

    document.getElementById('body-head').textContent = header;
    document.getElementById('body-body').textContent = `"${body}"`;
    document.getElementById('body-cant').textContent = cantidad;
    document.getElementById('body-foot').textContent = footer;

    const currentDateWa = new Date();
    const disableDate = new Date('2024-10-13T23:59:59');

    let urlWa;
    if (currentDateWa < disableDate) {
        urlWa = `https://wa.me/5554301237?text=${body}%20confirmo%20mi%20asistencia%20!!!%20`;
    } else {
        // Si la fecha actual es posterior a la fecha límite, desactivar el enlace
        urlWa = "#"; // O simplemente no asignar un valor
    }

    document.getElementById("confirm-link").setAttribute('href', urlWa);
});
