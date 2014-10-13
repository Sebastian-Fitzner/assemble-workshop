Das "einfachste" Standard-Template sieht so aus:

```
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=IE7"/>
    <title>{{title}} | {{site.title}}</title>
    <link rel="stylesheet" href="{{assets}}/css/styles.css"/>
</head>
<body class="">
	\{{> header }}
	\{{> body }} <!-- reservierter partial -->
	\{{> footer }}
</body>
</html>
```

Standard-Partials können einfach erstellt und integriert werden. Die Syntax für einen Partial ist simpel: 

* `\{{> my-partial-name }}` wie beispielsweise `\{{> footer }}`

Reservierte Partials sind vorgeschrieben. Es gibt eigentlich nur einen reservierten Partial:

* `\{{> body}}`
 
`body` wird ersetzt durch euren Seiteninhalt. Dieser wird im Ordner `pages` erstellt.  