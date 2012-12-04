 $(document).ready(function() {
 	// when over functionIn functionOut look in http://api.jquery.com/category/Events/
   $("#orderedlist li:last").hover(function() { 
     $(this).addClass("green");
   },function(){
     $(this).removeClass("green");
   });

   // $("#orderedlist2 > li").hover(function() { 
     // $(this).addClass("green");
   // },function(){
     // $(this).removeClass("green");
   // });
      
   //Select another element and define a handler
   /*$("#orderedlist li:last").click(function() {
     $(this).parent().slideUp();
   });*/
 });