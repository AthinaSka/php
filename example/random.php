 <html>
<body>
<?php

  // A random seed (or seed state, or just seed) is a number (or vector) used to initialize a pseudorandom number generator.
  // Seed: A integer used to set the starting point for generating a series of random numbers.  The seed sets the generator to a random starting point.  A unique seed returns a unique random number sequence.  
  // The srand function sets the starting point for generating a series of pseudorandom integers. To reinitialize the generator, use 1 as the seed argument. Any other value for seed sets the generator to a random starting point. rand retrieves the pseudorandom numbers that are generated. Calling rand before any call to srand generates the same sequence as calling srand with seed passed as 1.

  //Athina: as far as I can understand it generates series of random numbers taking into consideration a "seed" numeric parameter. It is usual this parameter to be the time.
  srand( microtime() * 1000000 );
  
  //microtime :  returns the current Unix timestamp with microseconds. This function is only available on operating systems that support the gettimeofday() system call. 
  $num = rand( 1, 4 );
   
  switch( $num ) 
  {
  case 1: $image_file = "/home/images/alfa.jpg";
          break;
  case 2: $image_file = "/home/images/ferrari.jpg";
          break;
  case 3: $image_file = "/home/images/jaguar.jpg";
          break;
  case 4: $image_file = "/porsche.jpg";
          break;
  }
  echo "Random Image : <img src=$image_file />";
?>
</body>
</html>