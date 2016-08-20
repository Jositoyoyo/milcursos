<?php

$or = array(
  'n' => empty($_GET['nombre']) ? 'nombre default' : $_GET['nombre'],
  'e' => empty($_GET['email']) ? 'email default' : $_GET['email'],
);

echo json_encode($or);
?>
