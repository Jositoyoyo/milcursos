<?php

 $username = empty($_GET['nombre']) ;
 $pass = empty($_GET['email']) ;
 $or = array('login' => false);
 if($username == 'jositoyoyo' && $pass == '1234') {
     $or['login'] = true;
 }

echo json_encode($or);
?>
