 jQuery.fx.off = true;
 
 $(document).ready(function(){
   $("a").toggle(function(){
   	// find class staff and 
     $(".stuff").hide('slow');
   },function(){
     $(".stuff").show('fast');
   });
   
   
 });