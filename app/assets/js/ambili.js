$(function(){
    
    // 1. Set tab header (ul) css classes
    var tab1 = $("li[data-tab=tab-1]");
    tab1.addClass('tab-link current');
    
    $('tab-2').addClass('tab-link');
    $('tab-3').addClass('tab-link');
    $('tab-4').addClass('tab-link');
    console.log("Document is ready");
    
    // 2. Set tab content (div) css classes
    
    
    
    // 3. Attach click events for tab headers
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

    
});