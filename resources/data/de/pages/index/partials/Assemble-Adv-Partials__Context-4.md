**`this`**  

Dieser Kontext ist meist YAML front matter der geerbten Seite oder einer Block Expression (z.B. `\{{#if}}`)

__`\{{#each}}` Block Expression__

``` hbs
\{{#each teaser}}
	\{{partial "my-partial"}}
\{{/each}}
```