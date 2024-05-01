<?php
// Check if the email parameter is set
if (isset($_POST['email'])) {
    // Get the email from the POST request
    $email = $_POST['email'];

    // Validate the email (you might want to improve this)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address';
        exit;
    }

    // Open the file for appending
    $file = fopen('subscribers.txt', 'a');

    // Write the email to the file
    fwrite($file, $email . "\n");

    // Close the file
    fclose($file);

    echo 'Subscription successful';
} else {
    echo 'Email parameter not set';
}
?>
