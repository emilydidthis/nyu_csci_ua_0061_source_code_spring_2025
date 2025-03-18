<!doctype html>
<html>
  <head>
    <title>Mad Libs</title>
  </head>
  <body>
    <h1>Mad Libs</h1>
    <div><?php
      // The [adjective] [noun] was very  hungry so it decided to [adverb] [verb] to the nearest restaurant.

      // superglobal $_POST
      // var_dump($_POST);
      $name = $_POST["name"];
      $verb = $_POST["verb"];
      $adverb = $_POST["adverb"];
      $noun = $_POST["noun"];
      $adjective = $_POST["adjective"];

      
      print "The $adjective $noun was very  hungry so it decided to $adverb $verb to the nearest restaurant."
      
     ?></div>
    <form method="post" action="04_Madlibs.php">
      Name: <input type="text" name="name"><br>
      Verb: <input type="text" name="verb"><br>
      Noun: <input type="text" name="noun"><br>
      Adjective: <input type="text" name="adjective"><br>
      Adverb: <input type="text" name="adverb"><br>
      <input type="submit">
    </form>

  </body>
</html>
