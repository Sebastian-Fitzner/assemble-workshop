Das Ganze kann dann rein hypothetisch so aussehen (die Syntax ist abhängig von der Template-Sprache):

``` html

<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->


<body>

	@import "navigation.html"; <!-- CSS Syntax just because everyone knows it -->
	
	<!-- Page content
	================================================== -->
	<div class="container" id="main">
		Seiteninhalt
	</div>

</body>
</html>


```