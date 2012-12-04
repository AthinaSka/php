
<?php
// $_PHP_SELF is used for the PHP script name and when you click "submit" button 
//then same PHP script will be called and will produce following result:
//The method = "POST" is used to post user data to the server script. 
//There are two methods of posting data to the server script which are discussed in PHP GET & POST chapter.


//---------------------------------------------------------------------

//$_POST["name"]=null;
//$_POST["age"]=null;

//while (($_POST["name"]!=null) && ($_POST["age"]!=null)){
  if( $_POST["name"] || $_POST["age"] )
  {
     echo "Welcome ". $_POST['name']. "<br />";
     echo "You are ". $_POST['age']. " years old.";
     exit();
  }
	//}
?>
<html>
<body>
  <form action="<?php $_PHP_SELF ?>" method="POST">
  Name: <input type="text" name="name" />
  Age: <input type="text" name="age" />
  <input type="submit"/>
  </form>
</body>
</html>