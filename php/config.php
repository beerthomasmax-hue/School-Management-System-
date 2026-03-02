<?php

// Database configuration settings
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = 'password';
$dbName = 'school_management';

// Environment variables
putenv('DB_HOST=' . $dbHost);
putenv('DB_USERNAME=' . $dbUsername);
putenv('DB_PASSWORD=' . $dbPassword);
putenv('DB_NAME=' . $dbName);

?>