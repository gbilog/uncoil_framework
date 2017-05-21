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
    
    $.fn.tabs = function() {
        return this.each(function() {
          $("li[data-tab=tab-1]").addClass('tab-link current');
          $("li[data-tab=tab-2]").addClass('tab-link');
          $("li[data-tab=tab-3]").addClass('tab-link');
          $("li[data-tab=tab-4]").addClass('tab-link');
          console.log("Document is ready");    
    });
    
})(jQuery);
