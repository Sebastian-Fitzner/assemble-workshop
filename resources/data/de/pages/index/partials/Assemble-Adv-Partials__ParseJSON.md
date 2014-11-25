Man kann auch mehrere JSON-Dateien (mit und ohne `\{{#parseJSON}}`) benutzen. Das ganze sieht dann mit `\{{#parseJSON}}` so aus: 

#### Beispiel: 
``` hbs
---
title: My Page
---


\{{#with teaser}}
	\{{#parseJSON '{"teaserClass": "green"}'}}
		\{{partial "my-partial" ../this}}
	\{{/parseJSON}}
\{{/with}}

```

Wichtig ist, dass die Klasse **nicht** in der JSON Datei vorkommt. Denn sonst würde `\{{#parseJSON}}` einfach überschrieben werden (siehe dazu Kontext-Rangliste).
