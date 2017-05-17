$(function () {
    $("nav li:first a").addClass("active");
    
    $("#all").on("click", function (event) {
        event.preventDefault();
        $("nav li a").removeClass("active");
        $(this).addClass("active");
        $("img:visible").fadeOut(500, "linear", function () {
            $("img").fadeIn(500, "linear");
        });
    });
    
    $("nav li:not(:first) a").on("click", function () {
        event.preventDefault();
        var category = $(this).attr("id");
        $("nav li a").removeClass("active");
        $(this).addClass("active");
        $("img:visible").fadeOut(500, "linear", function () { 
            $("." + category).fadeIn(500, "linear");
        });
    });
}); // end of document ready