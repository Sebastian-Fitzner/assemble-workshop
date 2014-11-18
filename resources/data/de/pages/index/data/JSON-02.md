Ein einfaches Anwendungsbeispiel sieht so aus:

**JSON-Datei: homepage.json**

```
{
	"article-h1": "My Custom Headline",
	"article-content": "<p>My Custom Content</p>"
}
```

**Partial: _simple-article.hbs**

``` hbs
<div class="teaser">
	<h1>\{{article-h1}}</h1>
	<div class="content">
		\{{{article-content}}}
	</div>
</div>
```

**Page: index.hbs**

``` hbs
---
title: testseite
---
\{{#homepage}}
	\{{> _simple-article}}
\{{/homepage}}
```