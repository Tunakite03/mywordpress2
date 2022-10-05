	
	

	jQuery(document).ready(function($){


		
		if($('.wpcf7-form-control.wpcf7-repeater-add').length>0){
			$('.wpcf7-form-control.wpcf7-repeater-add').on('click', function(){
				wpdp_refresh_420(jQuery, true);
			});
		}
		
	
});
var wpdp_refresh_first_420 = 'yes';
var wpdp_intv_420;
var wpdp_counter_420 = 0;
var wpdp_month_array_420 = [];
var wpdp_dateFormat = "mm/dd/yy";
var wpdp_defaultDate = "";
function wpdp_refresh_420($, force){
				if(typeof $.datepicker!='undefined' && typeof $.datepicker.regional["en-GB"]!='undefined'){
					
				wpdp_month_array_420 = $.datepicker.regional["en-GB"].monthNames;
									
				}
				
		
		
				


				if($("#date-field").length>0){
					
				$("#date-field").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_420 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$("#date-field").datepicker( "destroy" );
					
					
					$("#date-field").removeClass("hasDatepicker");
					wpdp_refresh_first_420 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($("#date-field").length>0) {
					$.each($("#date-field"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_420 > 2)
				clearInterval(wpdp_intv_420);
								
				
					
				if($("#date-field.hasDatepicker").length!=$("#date-field").length){

				
					
				$("#date-field").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ "en-GB" ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$("#date-field").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($("#date-field"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($("#date-field"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}


				if($(".calendar-field").length>0){
					
				$(".calendar-field").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_420 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$(".calendar-field").datepicker( "destroy" );
					
					
					$(".calendar-field").removeClass("hasDatepicker");
					wpdp_refresh_first_420 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($(".calendar-field").length>0) {
					$.each($(".calendar-field"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_420 > 2)
				clearInterval(wpdp_intv_420);
								
				
					
				if($(".calendar-field.hasDatepicker").length!=$(".calendar-field").length){

				
					
				$(".calendar-field").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ "en-GB" ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$(".calendar-field").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($(".calendar-field"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($(".calendar-field"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}
		


		
		$('.ui-datepicker').addClass('notranslate');
}
	wpdp_intv_420 = setInterval(function(){
		wpdp_counter_420++;
		wpdp_refresh_420(jQuery, false);
		
	}, 500);

	                jQuery(document).ready(function($){

                        $("#date-field").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $("#date-field").click();
                                //$("//").focusout();
                        }, 1000);



                });

                            jQuery(document).ready(function($){

                        $(".calendar-field").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $(".calendar-field").click();
                                //$("//").focusout();
                        }, 1000);



                });

            
    //wpdp_refresh_//(jQuery, false);
	
	    
