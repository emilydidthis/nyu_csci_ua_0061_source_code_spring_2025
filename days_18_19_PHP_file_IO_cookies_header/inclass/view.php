<!doctype html>
<html>
    <head>
    </head>
    <body>
        <h1>Story Time! View</h1>

        <div>
            <a href="form.php">Click here to create a new story</a>
        </div>

        <?php

            // let's go ahead and tell them their last submitted color
            if ($_COOKIE['color']){
                print "<p> Your last color was: ";
                print $_COOKIE['color'];
                print "</p>";
            }
            
            // define our path
            include("config.php");
            // open the file for reading
            $data = file_get_contents("$path/stories.txt");
            // isolate each line from the file

            $lines = explode("\n", $data);

            // read in the all of the data
            for ($i = 0; $i < sizeof($lines); $i++){
                //Emily,yellow
                $items = explode(",", $lines[$i]);
                print $items[1] . " from " . $items[0];
                print "<br>\n";
            }

    
            // display each story to the user

        ?>

    </body>
</html>