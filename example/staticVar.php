<?
function keep_track() {
   STATIC $count = 0;
   $count++;
   print $count;
   print "
";
}
keep_track();
print "<br>";
keep_track();
print "<br>";
keep_track();
?>