Data, die in JSON oder YAML Dateien spezifiert sind, können für Templates verfügbar gemacht werden. Hier ein Beispiel:

**Partial: button.hbs**

``` hbs
<button type="button" class="btn {{modifier}}">{{text}}</button>
```

**Data: button.json**

```
[
	{
		"text": "Success!",
		"modifier": "btn-success"
	},
	{
		"text": "Error!",
		"modifier": "btn-error"
	},
	{
		"text": "Warning!",
		"modifier": "btn-warning"
	}
]
```

**Page: page-buttons.hbs**

``` hbs
\{{#each button}}
  \{{> button }}
\{{/each}}
```

**Ergebnis:**

``` html
<button type="button" class="btn btn-success">Success!</button>
<button type="button" class="btn btn-error">Error!</button>
<button type="button" class="btn btn-warning">Warning!</button>
```

