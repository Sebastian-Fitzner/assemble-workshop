Ein einfaches Anwendungsbeispiel sieht so aus:

*JSON-Datei: homepage.json*

``` json
{
	"data": [
		{
			"article-h1": "Build your website with PG",
			"article-content": "<p>testcontent</p>"
		}
	]
}
```

*Partial: _simple-article.hbs*

``` hbs
<div class="teaser">
	<h1>{{article-h1}}</h1>
	<div class="content">
		{{{article-content}}}
	</div>
</div>
```

*Page: index.hbs*

``` hbs
---
title: testseite
---
{{#homepage.data}}
	{{partial "_simple-article" }}
{{/homepage.data}}
```