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

$(function () {
    // Code for Affix
    var $affixLinks = $("#affixDemo").find("a");
    $affixLinks.on("click", function () {
        $affixLinks.removeClass("active");
        $(this).addClass("active");
    });
    
    var marginTop = $("#affixDemo").css("margin-top");
    var top = $("#affixDemo").offset().top;
    var bottom = top + $("#affixDemo").outerHeight();
    var left = $("#affixDemo").offset().left;
    var offset = "50px";
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= top) {
            $("#affixDemo").css("position", "fixed")
                           .css("margin-top", 0)
                           .css("left", left)
                           .animate({top: offset}, 500);            
        } else if ($(this).scrollTop() < bottom) {
            $("#affixDemo").animate(({top: -(offset)}, 500), function () {
                           $(this).css("left", 0)
                           .css("margin-top", marginTop)
                           .css("position", "static");
            })
        }
    });      
});






