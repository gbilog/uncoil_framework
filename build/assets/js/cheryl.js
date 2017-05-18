(function ($) {
    $.fn.imageShuffle = function (options) {
        var defaults = $.extend({
            "hoverSpeed"    : "fast",
            "hoverOpacity"  : .5,
            "shuffleEasing" : "linear",
            "shuffleSpeed"  : 500,
        }, options);
        
        return this.each(function () {
            
            $("#imageContainer a").hover(function () {
                $(this).fadeTo("fast", .5);}, function () { $(this).fadeTo("fast", 1);   
            });

            var category = $(this).attr("id");
            if (category === "all") {
                $(this).addClass("selected");
                $(this).on("click", function (event) {
                    event.preventDefault();
                    $("li a").removeClass("selected");
                    $(this).addClass("selected");
                    $("#imageContainer a:visible").fadeOut(500, "linear", function () {
                        $("#imageContainer a").fadeIn(500, "linear");
                    });
                });
            } else {
                $(this).on("click", function () {
                    event.preventDefault();
                    $("li a").removeClass("selected");
                    $(this).addClass("selected");
                    $("#imageContainer a:visible").fadeOut(500, "linear", function () { 
                        $("." + category).fadeIn(500, "linear");
                    });
                });  
            }
        });
    }
})(jQuery);