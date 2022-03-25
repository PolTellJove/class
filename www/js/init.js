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
            console.log(arrayCursos);
            console.log(cursos);
            console.log(cursos["title"]);
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
                  let newh1 = $("<h1>"+cursos["title"]+"</h1><br><br>");
                  console.log(newh1);
                  $('#test-swipe-2').append(newh1);
                  let newh2 = $("<h3>ELEMENTS</h3><br>");
                  console.log(newh2);
                  $('#test-swipe-2').append(newh2);
                  //for (let item in arrayCursos) {
                  for (let item in info["elements"]) {
                    let newsummary = $("<p>"+item["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary);
                  }
                  let newh3 = $("<h3>VR TASKS</h3><br>");
                  $('#test-swipe-2').append(newh3);
                  for (let item in info["tasks"]) {
                    let newsummary = $("<p>"+item["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary);
                  }
                  let newh4 = $("<h3>NO-VR TASKS</h3><br>");
                  $('#test-swipe-2').append(newh4)
                  for (let item in info["vr_tasks"]) {
                    let newsummary = $("<p>"+item["title"]+"</p>");
                    $('#test-swipe-2').append(newsummary);
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