_Generell kann man in Handlebars aus einem Datenkontext herausgehen, indem man "`../`" benutzt._

Der erweiterte Partial kann einen zweiten Parameter verarbeiten. Dieser Parameter ist ein Daten-Parameter.
``` hbs
\{{#with my-data}}
	\{{partial "partial-name" this}}
\{{/with}}
```

`this` entspricht in diesem Fall den Kontext von `my-data`.
 
Nun kann man auch eine weitere Datenebene (Page) dem Partial übergeben. 
``` hbs
---
specialPageDataForPartial: "great data"
---
\{{#with my-data}}
	\{{partial "partial-name" ../this}}
\{{/with}}
```