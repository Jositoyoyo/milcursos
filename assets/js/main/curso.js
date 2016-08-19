$(document).ready(function(){


  $('.eliminar_curso').each(function(){
    e.preventDefault();
    var href = $(this).attr('href');
        $(this).attr('href', 'javascript:void(0)');
        $(this).click(function() {
           if (confirm("¿Seguro que desea eliminar este informe?")) {
              location.href = href;
           }
         });
  });



      $("#contenedor").load("/lista");
      $(document).on("click", "#pagination-digg li a", function(e){
          e.preventDefault();
         var href = $(this).attr("href");
         $("#contenedor").load(href);
      });
   });
