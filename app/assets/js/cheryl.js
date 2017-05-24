(function ($) {
    $.fn.imageShuffle = function (options) {
        var defaults = $.extend({
            "hoverOpacity"  : .75,
            "hoverSpeed"    : "fast",
            "shuffleEasing" : "swing",
            "shuffleSpeed"  : 500
        }, options);
        
        $("#imageContainer a").hover(function () {
                $(this).fadeTo(defaults.hoverSpeed, defaults.hoverOpacity);}, function () { $(this).fadeTo(defaults.hoverSpeed, 1);   
        });
        
        return this.each(function () {
            var $links = $(this).find("a");
            $links.each(function () {
                var category = $(this).attr("id");
                if (category === "all") {
                    $(this).addClass("selected");
                    $(this).on("click", function (event) {
                        event.preventDefault();
                        $links.removeClass("selected");
                        $(this).addClass("selected");
                        $("#imageContainer a:visible").fadeOut(defaults.shuffleSpeed, defaults.shuffleEasing, function () {
                            $("#imageContainer a").fadeIn(defaults.shuffleSpeed, defaults.shuffleEasing);
                        });
                    });
                } else {
                    $(this).on("click", function () {
                        event.preventDefault();
                        $links.removeClass("selected");
                        $(this).addClass("selected");
                        $("#imageContainer a:visible").fadeOut(defaults.shuffleSpeed, defaults.shuffleEasing, function () { 
                            $("." + category).fadeIn(defaults.shuffleSpeed, defaults.shuffleEasing);
                        });
                    });  
                }
            });
        });
    }
})(jQuery);


(function ($) {
    $.fn.affix = function (options) {
        var defaults = $.extend({
            "offset"  : 50
        }, options);
    
        return this.each(function () {
            var $affixLinks = $(this).find("a");
            $affixLinks.on("click", function () {
                $affixLinks.removeClass("active");
                $(".subItems").hide();
                $(this).addClass("active");
                if ($(this).next().attr("class") === "subItems") {
                    $(this).next().show();
                }
            });
            
            var $this = $(this);
            var marginTop = $this.css("margin-top");
            var top = $this.offset().top;
            var bottom = top + $this.outerHeight();
            var left = $this.offset().left;
            
            left = $(document).on("resize", function () {
                left = $this.offset().left;
                return left;
            });

            $(document).on("scroll", function () {
                if ($(this).scrollTop() >= top) {
                    $this.css("position", "fixed")
                         .css("margin-top", 0)
                         .css("left", left)
                         .animate({top: defaults.offset}, 400, function () {
                                $this.prop("top", defaults.offset);
                    });            
                } else if ($(this).scrollTop() < bottom) {
                    $this.css("margin-top", marginTop)
                         .css("position", "static");
                    }
                });
            });
    }
})(jQuery);

(function ($) {
    $.fn.scrollSpy = function (options) {
        var defaults = $.extend({
            "offset"  : 20
        }, options);
        
        // Get Ids of Elements to Spy On
        var $links = $(this).find("a");
    
        return this.each(function () {
    
        // Create event listener for scroll
        $links.each(function () {
            var currentLink = $(this);
            var elementId = $(this).attr("href");
            var top = $(elementId).offset().top - defaults.offset;
            var bottom = top + $(elementId).outerHeight(true);

            $(document).on("scroll", function () {
                if ($(this).scrollTop() >= top && $(this).scrollTop() < bottom && currentLink.next().attr("class") === "subItems") {
                    $links.removeClass("active");
                    $(".subItems").hide();
                    currentLink.addClass("active");
                    currentLink.next().show();
                } else if ($(this).scrollTop() >= top && $(this).scrollTop() < bottom && currentLink.parent().parent().attr("class") === "subItems") {
                    $links.removeClass("active");
                    //$(".subItems").hide();
                    currentLink.addClass("active");
                    currentLink.parent().parent().prev().addClass("active");
                } else if ($(this).scrollTop() >= top && $(this).scrollTop() < bottom) {
                    $links.removeClass("active");
                    $(".subItems").hide();
                    currentLink.addClass("active");
                }
            }); 
        });
        });
    }
})(jQuery);







