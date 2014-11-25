In diesen Beispiel möchten wir eine JSON mit Inhalten definieren und gleichzeitig die Klasse über die Page mitgeben. 

#### Beispiel: 
``` hbs
---
title: My Page
partialClass: "green"
---
\{{#with teaser}}
	\{{partial "my-partial" ../this}}
\{{/with}}

```