 $(document).ready(function() {
 	
 	//.css() sets or gets an attribute value in stylesheet
 	//has() Selects elements which contain at least one element that matches the specified selector.

   $("li").not(":has(ul)").css("border", "1px solid red");
   
   // select by a given attribute. eg all link with a name attribute
   /*$("a[name]").css("background", "#e0e" );
 	*/
 	
 	//select by attribute. setting an attribute 
   $("a[href*='/content/gallery']").attr("target","_blank");
 });