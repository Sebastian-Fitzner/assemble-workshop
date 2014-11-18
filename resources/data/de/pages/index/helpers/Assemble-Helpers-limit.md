Mit diesem Helper könnt ihr eure Ausgabe limitieren. 

Das ist praktisch um zum Beispiel eine News-Übersicht in einer JSON abzuspeichern, diese Übersicht komplett auf einer Seite abzubilden und dann auf einer anderen Seite nur 3 News-Elemente aus der gleichen Datei anzuzeigen. 

```
\{{#limit 0 3 data}}

	<li class="carousel__items__item">
		\{{partial "_carousel__content" }}
	</li>

\{{/limit}}
```
Mehr Infos: 

http://www.prototype-generator.com/templating-in-pg/template-helpers.html#limit-json-output-block-helper-