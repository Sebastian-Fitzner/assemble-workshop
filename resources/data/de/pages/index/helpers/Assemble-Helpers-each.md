Dieser Helper gibt euch die Möglichkeit, über ein Array zu iterieren.

``` html
\{{#with carousels}}
	\{{#each data}}
		\{{partial "_carousel" ../this}}
	\{{/each}}
\{{/with}}
```