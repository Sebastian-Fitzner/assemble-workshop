Um bestimmte Elemente ein- bzw. auszublenden, kann man `if`- oder `is`-statements definieren.

*\{{#if}}* - Dieser Block-Helper prüft nur, ob ein Element definiert ist.
``` html
\{{#if title}}
	<h1>\{{title}}</h1>
\{{/if}}
```

*\{{#is}}* - Dieser Block-Helper prüft, ob ein Element einen bestimmten Wert hat.
``` html
\{{#is title "Home"}}
	<h1>\{{title}}</h1>
\{{/is}}
```

Leider gibt es keine Möglichkeiten `else if` direkt zu benutzen.