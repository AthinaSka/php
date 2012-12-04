 $(document).ready(function() {
   // use this to reset a single form
   $("#reset").click(function() {
   	
   	// I will select the first form in DOM
     $("form")[0].reset();
   });
 });
 

// Exercise Reset all forms
/*
 $(document).ready(function() {
   // use this to reset several forms at once
   $("#reset").click(function() {
     $("form").each(function() {
       this.reset();
     });
   });
 });*/