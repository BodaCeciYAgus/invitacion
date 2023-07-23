


// Instagram parallax
$('.parallax-instagram').parallax({
  imageSrc: 'assets/img/galeria/instagram.jpg'

});

// Portada parallax
$('.parallax-portada').parallax({
  imageSrc: 'assets/img/galeria/portada.jpg'
});

// ----------------------



// Cuenta Regresiva:

 // Cuenta Regresiva:
  // Define la fecha límite para la cuenta regresiva
  var countDownDate = new Date("October 7, 2023 00:00:00").getTime();

  // Actualiza la cuenta regresiva cada segundo
  var x = setInterval(function() {
    // Obtiene la fecha y hora actual
    var now = new Date().getTime();

    // Calcula la diferencia entre la fecha límite y la fecha actual
    var distance = countDownDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("dias").innerHTML = days;
    document.getElementById("reloj").innerHTML = hours + "hs, " +
      minutes + "m, " + seconds + "s ";

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("dias").innerHTML = "0";
      document.getElementById("reloj").innerHTML = "¡Llegó el gran día!";
    }
  }, 1000);


// ----------------------
