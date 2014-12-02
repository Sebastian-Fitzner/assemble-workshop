Nun können wir auch einen eigenen Partial erstellen, der die Sitemap generiert. 

``` hbs
---
block: sitemap
---

\{{#each sitemap}}
	<h3>\{{sitemap}}</h3>
	<ul>
		\{{#withSort ../pages "data.title"}}
			\{{#is data.sitemap ../sitemap}}
				<li>
					<a href="\{{autolink}}">\{{data.title}}</a>
				</li>
			\{{/is}}
		\{{/withSort}}
	</ul>
\{{/each}}

```