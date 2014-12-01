Nun können wir ganz einfach eine Schleife mit `pages` und `collections` bauen. Diese gibt uns dann unsere Sitemap aus.

``` hbs
\{{#each type}}
	<h3>\{{type}}</h3>
	<ul>
		\{{#withSort ../pages "data.sortOrder"}}
			\{{#is data.type ../type}}
				<li>
					<a href="\{{autolink}}">\{{data.title}}</a>
				</li>
			\{{/is}}
		\{{/withSort}}
	</ul>
\{{/each}}
```