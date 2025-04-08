<!doctype html>
<html>
  <head>
    <title>To Do List</title>
  </head>

  <body>
    <h1>To Do List</h1>

    <form method="POST" action="save.php">
      <p>Create New Item:</p>
      <input type="text" name="title">
      <input type="submit">
    </form>


    <h3>Your Items</h3>
    <ul>
      <?php 
        //print getcwd();
        $path = getcwd() . '/../databases/to_do_list.db';
        //$path = '/Applications/MAMP/htdocs/nyu_csci_ua_0061_source_code_spring_2024/days_20_21/databases/to_do_list.db';

        // connect to our database
        $db = new SQLite3($path);

        // prepare a query to obtain data from the database
        $sql = 'SELECT id, title, status FROM items';

        // prepare a SQL statement object
        $statement = $db->prepare($sql);

        // run the query
        $result = $statement->execute();

        // iterate over the results
        while ($row = $result->fetchArray()){
          // extract the relevant info from the query
          // put it into some variables
          $id = $row[0];
          $title = $row[1];
          $status = $row[2];

          print "<li>$title - $status <a href='delete.php?id=$id'>delete</a></li>";

        }

        // close the database
        $db->close();
        unset($db);
      ?>
    </ul>


  </body>
</html>
