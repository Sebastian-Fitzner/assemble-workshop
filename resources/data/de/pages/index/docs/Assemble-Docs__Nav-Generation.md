Eine Navigation kann man sehr einfach und schnell generieren lassen: 

``` hbs

<ul>
\{{#each pages}}
	<li>
		<a href="\{{autolink}}">\{{data.title}}</a>
	</li>
\{{#each}}
</ul>
```

Dabei nimmt man sich das `pages`-Objekt und gibt für jede Seite aus dem Data-Konstrukt den `title` aus. 

Der `\{{autolink}}`-Helper hilft bei der automatischen Generierung der Links. Solltet ihr diesen nicht benutzen wollen, so könnt ihr auch `relative` aus dem Objekt verwenden.

`\{{autolink}}` ist ein zusätzlicher Helper, der aber im PG und Kickstarter integriert ist.