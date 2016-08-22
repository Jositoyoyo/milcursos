
$(document).on('ready', function () {

    $("#main form").on("submit", function (event) {

        event.preventDefault();
        var str = $("form").serialize();
        var jqxhr = $.getJSON("login.php", str, function (resp) {
            console.log("success");
            if (resp.e == 'login') {
                window.location.href = 'main.html';
            } else {

            }

        })
                .fail(function (e) {
                    console.log(e);
                })
                .always(function () {
                    console.log("complete");
                });

        jqxhr.complete(function () {
            console.log("Complete");
        });

    });

});
