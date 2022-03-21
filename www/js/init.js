(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});

    $('.download').click( function() {
      //alert("hola!");
      $('#llista_principal').empty();

      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=3",
        dataType: "json",   // necessitem això pq ens retorni un objecte JSON
      }).done(function (msg) {
        for(let item in msg) {
          console.log(msg[item]);
          // aquí caldría fer mes coses, of course...
          // ...
        };
      }).fail(function () {
        alert("ERROR");
      });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}