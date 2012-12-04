<html>
<head><title>Arithmetical Operators</title><head>
<body>

//<script src="/Lesson01/lesson01_sample.js"></script>

<?php
    $a = 42;
    $b = 20;
    
    $c = $a + $b;
    echo "Addtion Operation Result: $c <br/>";
    $c = $a - $b;
    echo "Substraction Operation Result: $c <br/>";
    $c = $a * $b;
    echo "Multiplication Operation Result: $c <br/>";
    $c = $a / $b;
    echo "Division Operation Result: $c <br/>";
    $c = $a % $b;
    echo "Modulus Operation Result: $c <br/>";
    $c = $a++; 
    echo "Increment Operation Result: $c <br/>";
    $c = $a--; 
    echo "Decrement Operation Result: $c <br/>";
?>
</body>
</html>