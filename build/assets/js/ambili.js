
(function($) {
    
    $.fn.Tabs = function() {
        
        $(this).addClass("tabs");
        
        $(this).find("li").each(function(i, ctrl){
        
            // 1. Set tab header (ul) css classes
            // 2. Set tab content (div) css classes
            
            var x = $(ctrl).attr('data-tab');

            if(i == 0) {
                $("#" + x).addClass('tab-content current');
                $(ctrl).addClass("tab-link current"); 
                
            } else {
                $("#" + x).addClass('tab-content');
                $(ctrl).addClass("tab-link");  
            }
        });
        
       //  3. Attach click events for tab headers
        
        $(this).find('li').click(function(){

            var tab_id = $(this).attr('data-tab');

            $('li.tab-link').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        });   
    }
})(jQuery);
