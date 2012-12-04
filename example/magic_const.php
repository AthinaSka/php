<?php

echo "line number: " . __LINE__; // line number: 2
print "<br>";
echo "line number: " . __LINE__; // line number: 3
print "<br>";
echo "line number: " . __LINE__; // line number: 4
print "<br>";
echo "file name: " .__FILE__; 
print "<br>";

if __FUNCTION__!=NULL
{
echo "function:" .__FUNCTION__;
}
else
echo "NULL";
?>
