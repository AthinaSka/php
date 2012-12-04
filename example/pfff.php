<html>
<body>

<input value="go" onmousedown="twelfth_hour();" onclick="php_js();" type="submit" / >

<script>
function php_js() {
<?php
function giveDay($day){
// Do stuff
$d=d;
switch ($d)
{
case "Mon":
  echo "Today is Monday";
  break;
case "Tue":
  echo "Today is Tuesday";
  break;
case "Wed":
  echo "Today is Wednesday";
  break;
case "Thu":
  echo "Today is Thursday";
  break;
case "Fri":
  echo "Today is Friday";
  break;
case "Sat":
  echo "Today is Saturday";
  break;
case "Sun":
  echo "Today is Sunday";
  break;
default:
  echo "Wonder which day is this ?";
}
$output = $day
return $output
}
$js_return = giveDay($_GET['URL_param']);
echo "return " . $js_return . ";";
?>
}

function twelfth_hour() {
var html_doc = document.getElementsByTagName('head').item(0);
var js = document.createElement('script');
js.setAttribute('language', 'javascript');
js.setAttribute('type', 'text/javascript');
js.setAttribute('src', 'Ourscript.php?URL_param='+document.SOME_ELEMENT.parameter.value);
html_doc.appendChild(js);
return false;
}
</script>

</body>
</html>