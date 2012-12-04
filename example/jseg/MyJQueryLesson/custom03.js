 $(document).ready(function() {
 	// iteration
    $(document).find("ol").each(function() {
   		alert("ol:"+this.id);
   	}); 
 
 /*  	
   	$("#orderedlist2").find("li").each(function(i) {
   		$(this).append( " BAM! " + i );
   	}); 
*/
 });