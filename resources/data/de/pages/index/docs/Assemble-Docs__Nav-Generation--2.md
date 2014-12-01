Noch geeigneter als `\{{#each}}` ist in diesem speziellen Fall `\{{#withSort}}`.

Mit diesem Helper könnt ihr nach einem speziellen Attribut die Reihenfolge der Liste bestimmen.

**Beispiel**

``` hbs
---
block: sitemap
---

<div class="b-sitemap">
	<ul class="sitemap__list">
		\{{#withSort pages "data.sortOrder"}}

			<li class="sitemap__list-elements">
				<a href="\{{autolink}}" class="sitemap__list-links\{{#is ../page.dest this.dest}} is-active\{{/is}}">\{{data.menuLink}}</a>
			</li>

		\{{/withSort}}
	</ul>
</div>

```