<?php

 $username = empty($_GET['nombre']) ;
 $pass = empty($_GET['pass']) ;
 $or = array();
 if($username == 'jositoyoyo' && $pass == '1234') {
     $or = array('login' => true);
 } else {
    $or = array('login' => false);
 }

echo json_encode($or);
?>
