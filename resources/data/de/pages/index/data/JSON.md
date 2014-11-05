Die JSON-Datei heißt `homepage.json` und sieht so aus:

``` json
{
	"data": [{
	}]
}
``` 

Wenn man diese Daten nun benutzen möchte, geht das sehr einfach:

``` hbs
\{{#homepage.data}}
		\{{partial "_article" }}
\{{/homepage.data}}
```