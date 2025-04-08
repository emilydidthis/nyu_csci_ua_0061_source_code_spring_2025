<?php

     // get the incoming data
     $id = $_GET['id'];

     // is the id missing? if so, send them back!
     if (!isset($id)){
        header("Location: to_do_list.php");
        exit();
     }

     // if the data looks okay, let's connect to our db!
     $path = getcwd() . '/../databases/to_do_list.db';
 
     // connect to our database
     $db = new SQLite3($path);
 
     // prepare the SQl query
     // replace variable with placeholder :title
     $sql = "DELETE FROM items WHERE id = $id";
     // prepare a SQL statement object
     $statement = $db->prepare($sql);
 
     // run our query
     $result = $statement->execute();
 
     // close the database
     $db->close();
     unset($db);
 
     // send the user back to the to_do_list.php
     header("Location: to_do_list.php");
     exit();
?>