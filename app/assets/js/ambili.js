/*
$(function(){
    
    // 1. Set tab header (ul) css classes
    var tab1 = $("li[data-tab=tab-1]");
    tab1.addClass('tab-link current');
    
    var tab2 = $("li[data-tab=tab-2]");
    tab2.addClass('tab-link');
    
    var tab3 = $("li[data-tab=tab-3]");
    tab3.addClass('tab-link');
    
    var tab4 = $("li[data-tab=tab-4]");
    tab4.addClass('tab-link');
    
    alert("Document is ready");
    
    // 2. Set tab content (div) css classes
    $('#tab-1').addClass('tab-content current');
    $('#tab-2').addClass('tab-content');
    $('#tab-3').addClass('tab-content');
    $('#tab-4').addClass('tab-content');
    
   //  3. Attach click events for tab headers
    $('ul.tabs li').click(function(){
    
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

    
});


*/

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
