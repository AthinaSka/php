 $(document).ready(function() {
 	// end() marks the end of th current find selection nad starts another. Resulting in chainining selection
   $('#faq').find('dd').hide().end().find('dt').click(function() {
     $(this).next().slideToggle();
   });


	// multiple eventHandlers  supported
	/*
	 $('#faq').find('dd').hide().end().find('dt').click(function() {
    	 alert ("You clicked on me my html was"+ $(this).html());
    	 var myNewHtml = $(this).html() + " A NEW HTML";
    	  $(this).html(myNewHtml)
   });*/
/*
   $("a").hover(function(){
     $(this).parents("p").addClass("highlight");
   },function(){
     $(this).parents("p").removeClass("highlight");
   });
 */


 });