(function ($) {
    $.fn.imageShuffle = function (options) {
        var defaults = $.extend({
            "hoverOpacity"  : .5,
            "hoverSpeed"    : "fast",
            "shuffleEasing" : "linear",
            "shuffleSpeed"  : 500,
        }, options);
        
        return this.each(function () {
            
            $("#imageContainer a").hover(function () {
                $(this).fadeTo(defaults.hoverSpeed, defaults.hoverOpacity);}, function () { $(this).fadeTo(defaults.hoverSpeed, 1);   
            });

            var category = $(this).attr("id");
            if (category === "all") {
                $(this).addClass("selected");
                $(this).on("click", function (event) {
                    event.preventDefault();
                    $("li a").removeClass("selected");
                    $(this).addClass("selected");
                    $("#imageContainer a:visible").fadeOut(defaults.shuffleSpeed, defaults.shuffleEasing, function () {
                        $("#imageContainer a").fadeIn(defaults.shuffleSpeed, defaults.shuffleEasing);
                    });
                });
            } else {
                $(this).on("click", function () {
                    event.preventDefault();
                    $("li a").removeClass("selected");
                    $(this).addClass("selected");
                    $("#imageContainer a:visible").fadeOut(defaults.shuffleSpeed, defaults.shuffleEasing, function () { 
                        $("." + category).fadeIn(defaults.shuffleSpeed, defaults.shuffleEasing);
                    });
                });  
            }
        });
    }
})(jQuery);