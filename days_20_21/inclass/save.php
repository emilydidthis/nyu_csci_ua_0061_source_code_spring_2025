<?php
    // get the incoming data
    $title = $_POST['title'];

    // make sure we have usable data
    if (strlen($title) == 0){
        header("Location: to_do_list.php");
        exit();
    }

    // if the data looks okay, let's connect to our db!
    $path = getcwd() . '/../databases/to_do_list.db';

    // connect to our database
    $db = new SQLite3($path);

    // prepare the SQl query
    // replace variable with placeholder :title
    $sql = "INSERT INTO items (title, status) VALUES (:title, 'in progress')";
    // prepare a SQL statement object
    $statement = $db->prepare($sql);
    $statement->bindValue(':title', $title);

    // run our query
    $result = $statement->execute();

    // close the database
    $db->close();
    unset($db);

    // send the user back to the to_do_list.php
    header("Location: to_do_list.php");
    exit();

    // CRUD: Create, read, update, delete

?>