<html>
<body>
<?php
$array = array( 1, 2, 3, 4, 5);
foreach( $array as $value )
{
  if( $value == 3 )continue;
//For the pass encountering continue statement, rest of the loop code is skipped and next pass starts. 
 echo "Value is $value <br />";
}
?>
</body>
</html>