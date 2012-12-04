jQuery(document).ready(function() {
 	//Select the ordered list with id orderedlist
   	$("#orderedlist").addClass("red"); // getElementById approach
    //$("#orderedlist > li").addClass("blue"); //   element child of an E element 

	$("#orderedlist2 li").addClass("green"); // element descendant of an E element

	$("#rating").addClass("red"); // element descendant of an E element

	$("#orderedlist > li").addClass("blue"); // element descendant of an E element

});