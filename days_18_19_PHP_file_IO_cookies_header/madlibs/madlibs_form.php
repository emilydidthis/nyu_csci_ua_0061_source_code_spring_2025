<!doctype html>
<html>
  <head>
    <title>Mad Libs</title>
  </head>
  <body>
    <h1>Mad Libs</h1>

    <form method="post" action="madlibs_save.php">
      Name: <input type="text" name="name"><br>
      Verb: <input type="text" name="verb"><br>
      Noun: <input type="text" name="noun"><br>
      Adjective: <input type="text" name="adjective"><br>
      Adverb: <input type="text" name="adverb"><br>
      <input type="submit">
    </form>
    <p><a href="madlibs_view.php">Click here to view all previously created stories</a></p>

    <p><a href="madlibs_clear.php">Click here to clear your previously created story (this will not delete it from the server)</a></p>
  </body>
</html>
