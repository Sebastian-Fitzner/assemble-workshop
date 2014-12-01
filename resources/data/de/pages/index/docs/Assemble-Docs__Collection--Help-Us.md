Collections können uns helfen, eine saubere Struktur automatisiert auszugeben.

Collections können in Assemble-Task definiert werden.
Diese werden dort einfach als Array abgespeichert:

```
collections: [
	'sitemap', 'type'
]
```

Nun kann man global per `\{{debug collection-name}}` sehen, welche Elemente in der Collection enthalten sind.

Diese bekommen ja erst Werte durch die Page selbst.