<html>
<body>
<?php
   
   //a function getenv() to access the value of all the environment variables.
   //HTTP_USER_AGENT environment variable can be used to create dynamic content appropriate to the borwser
   $viewer = getenv( "HTTP_USER_AGENT" );
   
   $browser = "An unidentified browser";
   //PHP offers following functions for searching strings using Perl-compatible regular expressions 
   //The preg_match() function searches string for pattern, returning true if pattern exists, and false otherwise.
     if( preg_match( "/MSIE/i", "$viewer" ) )
   {
      $browser = "Internet Explorer";
   }
   else if(  preg_match( "/Netscape/i", "$viewer" ) )
   {
      $browser = "Netscape";
   }
   else if(  preg_match( "/Mozilla/i", "$viewer" ) )
   {
      $browser = "Mozilla";
   }
   $platform = "An unidentified OS!";
   if( preg_match( "/Windows/i", "$viewer" ) )
   {
      $platform = "Windows!";
   }
   else if ( preg_match( "/Linux/i", "$viewer" ) )
   {
      $platform = "Linux!";
   }
   echo("You are using $browser on $platform");
?>
</body>
</html>