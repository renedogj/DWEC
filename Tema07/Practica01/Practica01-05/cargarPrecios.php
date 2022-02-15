<?php
header('Content-Type: text/xml');

$marca = $_POST['marca'];
$dimension = $_POST['dimension'];

$precios = array(
	"Samsung" => array(30=>1, 40=>2, 50=>3, 60=>4),
	"LG" => array(30=>1, 40=>2, 50=>3, 60=>4),
	"Sony" => array(30=>1, 40=>2, 50=>3, 60=>4),
	"Xiamoi" => array(30=>1, 40=>2, 50=>3, 60=>4),
	"Toshiba" => array(30=>1, 40=>2, 50=>3,60=>4)
);

echo $precios[$marca][$dimension];
?>