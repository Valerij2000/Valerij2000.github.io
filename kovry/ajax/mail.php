<?php 



$mail = $_POST['mail'];
$message = $_POST['message'];





$header = 'From: $mail\r\nReply-to: $mail\r\nContent-type:text/html; charset=utf-8\r\n';


$success = mail('admin@mail.ru',  $mail,  $message);
echo $success;


 ?>