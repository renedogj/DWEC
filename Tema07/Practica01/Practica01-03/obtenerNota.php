<?php
$nota = $_POST["nota"];
switch($nota){
	case 10:
	case 9:
		echo "SOBRESALIENTE";
		break;
	case 8:
	case 7:
		echo "NOTABLE";
		break;
	case 6:
		echo "BIEN";
		break;
	case 5:
		echo "SUFICIENTE";
		break;
	default:
		echo "SUSPENSO";
}
?>