(function($){
  $(function(){

    $('.sidenav').sidenav();
    //$('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});

    $.ajax({
        method: "GET",
        url: localStorage.getItem("URL")+"/api/get_courses",
        data : {"token":localStorage.getItem("session_token")},
        dataType: "json",
    }).done(function (info) {
        arrayCursos=[]
        for (let item in info["course_list"]) {
            let cursos = info["course_list"][item]
            arrayCursos.push(cursos["_id"])
            let newRow=$('<a href="#!" class="collection-item">'+cursos["title"]+'</a>')

            newRow.click( function() {
                $.ajax({
                  method: "GET",
                  url: localStorage.getItem("URL")+"/api/get_course_details",
                  data : {"token":localStorage.getItem("session_token"), "courseID":arrayCursos[0]},
                  dataType: "json",
                }).done(function (info) {
                  //Vaciando el div de la pagina 2
                  $('#test-swipe-2').empty();
                  //Creacion de objetos graficos
                  let newh1 = $("<h3>"+cursos["title"]+"</h3>");
                  $('#test-swipe-2').append(newh1);
                  let newh2 = $("<h5>Elements</h5>");
                  $('#test-swipe-2').append(newh2);
                  //for (let item in arrayCursos) {
                  for (let item in info["course"]["elements"]) {
                    let newsummary = $("<p>"+info["course"]["elements"][item]["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary);
                  }
                  let newh3 = $("<h5>VR Tasks</h5>");
                  $('#test-swipe-2').append(newh3);
                  for (let item in info["course"]["vr_tasks"]) {
                    let newsummary2 = $("<p>"+info["course"]["vr_tasks"][item]["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary2);
                  }
                  let newh4 = $("<h5>No-VR Tasks</h5>");
                  $('#test-swipe-2').append(newh4)
                  for (let item in info["course"]["tasks"]) {
                    let newsummary3 = $("<p>"+info["course"]["tasks"][item]["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary3);
                  }  
                  //}
                  //Saltamos a la pagina 2
                  $('.tabs').tabs("select", "test-swipe-2");
                });

            });
            $("#llista_principal").append(newRow);
        }
    }).fail(function () {
        alert("ERROR");
    });

  }); // end of document ready

})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}