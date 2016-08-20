
$(document).on('ready', function () {

    $("#main form").on("submit", function (event) {

        event.preventDefault();
        var str = $("form").serialize();
        var jqxhr = $.getJSON("index.php", str, function (resp) {
            console.log("success");
            $.each(resp, function (e, v) {
                console.log(e + ', ' + v);
            });
        })
                .done(function () {
                    console.log("second success");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });

        jqxhr.complete(function () {
            console.log("second complete");
        });

    });

});
