Nach jetzigen Wissensstand können wir das wie folgt realisieren:

1. Ein eigenes Tag pro Page definieren
2. `\{{#each}}` benutzen um die Pages auszugegeben
3. Mit `\{{#is}}` nach einen speziellen Tag fragen und die Page dazu ausgeben
4. 2 und 3 für jede Kategorie wiederholen

**In etwa so:**

``` hbs 
<h3>Layouts and Grids</h3>
<ul>
	\{{#withSort pages "data.sortOrder"}}
		\{{#is data.type "Layout"}}
			<li>
				<a href="\{{autolink}}">\{{data.title}}</a>
			</li>
		\{{/is}}
	\{{/withSort}}
</ul>

...
```