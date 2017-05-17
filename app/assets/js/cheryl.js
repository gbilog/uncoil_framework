(function ($) {
    $.fn.imageShuffle = function () {
        return this.each(function () {
            $("li:first a").addClass("active");

            $("li:first a").on("click", function (event) {
                event.preventDefault();
                $("li a").removeClass("active");
                $(this).addClass("active");
                $("img:visible").fadeOut(500, "linear", function () {
                    $("img").fadeIn(500, "linear");
                });
            });

            $("li:not(:first) a").on("click", function () {
                event.preventDefault();
                var category = $(this).attr("id");
                $("li a").removeClass("active");
                $(this).addClass("active");
                $("img:visible").fadeOut(500, "linear", function () { 
                    $("." + category).fadeIn(500, "linear");
                });
            });
        });
    }
})(jQuery);