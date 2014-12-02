Collections können in Assemble-Task definiert werden.
Diese werden dort einfach als Array abgespeichert:

```
collections: [
	'sitemap'
]
```

Nun kann man global per `\{{debug collection-name}}` sehen, welche Elemente in der Collection enthalten sind.

Die Elemente können wir ganz einfach mit `\{{#each sitemap}}` ausgeben. 