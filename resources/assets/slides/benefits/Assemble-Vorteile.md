

### Typische Anwendungsbeispiele sehen in etwa so aus

Wir bauen einen Prototypen, der aus 20 HTML-Seiten besteht. Nun möchten wir das ganze etwas besser wartbar machen und bestimmte Bereiche auslagern um sie nur an einer Stelle pflegen zu müssen. 

Standardmäßig sind bestimmte Bereiche auf der Seite fast immer gleich. Das sind zum Beispiel: 

* Logo
* Header
* Navigation
* Footer

Diese Bereiche möchten wir in jeweils einer Datei auslagern. Nehmen wir die Navigation als Beispiel:

**Navigation**

``` html
<div class="nav-collapse collapse bs-navbar-collapse">
	<ul class="nav navbar-nav pull-right">
			<li>
				<a href="#">Link 1</a>
			</li>
			<li>
				<a href="#">Link 2</a>
			</li>
			<li>
				<a href="#">Link 3</a>
			</li>
			<li>
				<a href="#">Link 4</a>
			</li>
	</ul>
</div>
```

Die Navigation haben wir nun in einer eigenen Datei gespeichert. Nun möchten wir diese einfach referenzieren/inkludieren. 

Das Ganze kann dann rein hypothetisch so aussehen (die Syntax ist abhängig von der Template-Sprache): 

**Template**

``` html

<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->


<body>

	@import "navigation.html";
	
	<!-- Page content
	================================================== -->
	<div class="container" id="main">
		Seiteninhalt
	</div>

</body>
</html>


```