
$(document).on('ready', function(){

  $( "#main form" ).on( "submit", function( event ) {

    event.preventDefault();
    var str = $( "form" ).serialize();
    console.log(str);
    $.getJSON("index.php", str, function(resp){
      $.each(resp, function(e, v){
        console.log(e +', ' + v);
      });
    });

  });

});
