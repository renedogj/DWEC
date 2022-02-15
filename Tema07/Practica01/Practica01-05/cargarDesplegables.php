<?php
header('Content-Type: text/xml');
$pageContents = <<< TEXTHTML
<xml>
	<marcas>
		<marca>Samsung</marca>
		<marca>LG</marca>
		<marca>Sony</marca>
		<marca>Xiamoi</marca>
		<marca>Toshiba</marca>
	</marcas>
	<dimensiones>
		<dimension>30</dimension>
		<dimension>40</dimension>
		<dimension>50</dimension>
		<dimension>60</dimension>
	</dimensiones>
</xml>
TEXTHTML;

echo $pageContents;
?>

