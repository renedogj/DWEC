<?php
header("Content-Type","application/json");
$array = array(
	"marcas" => array("LG","Bosh","Marca1","Marca2"),
	"electrodomesticos" => array("Lavadora","Lavavajillas","Frigorifico","Horno","Microondas","Placa","Campana")
);


echo json_encode($array);
?>

