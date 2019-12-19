<?php
$name = $_POST['fname'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = "AMatte.com";

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
"User Email: $visitor_email.\n".
"User Message: $message.\n";


$to = "kevinminh.ng@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $visitor_email \r\n";

mail($to,email_subject,$email_body,$headers);

header("Location: Website Name");



?>