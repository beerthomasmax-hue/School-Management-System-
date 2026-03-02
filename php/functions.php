<?php

// Database connection
function connectDb($host, $user, $password, $dbname) {
    $conn = new mysqli($host, $user, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// User authentication
function authenticateUser($username, $password) {
    // Implement authentication logic here
    // This is just a placeholder
    if ($username == 'admin' && $password == 'adminPassword') {
        return true;
    }
    return false;
}

// Data validation
function validateInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

?>