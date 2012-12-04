 $(document).ready(function() {


	   $("a").hover(function(){
	     $(this).parents("p").addClass("highlight");
	   },function(){
	     $(this).parents("p").removeClass("highlight");
	   });
	 
	 // using event.preventDefault to override default behaviour
	 $("a").click(function(event) {
	  event.preventDefault();
	 });

 });