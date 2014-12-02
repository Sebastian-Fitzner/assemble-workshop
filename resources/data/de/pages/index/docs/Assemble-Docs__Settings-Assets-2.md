Man könnte meinen, dass der Assets-Ordner für beide Tasks im Output-Ordner des Projekts zu finden ist. 

Leider würde das für `docs` nicht zutreffen, sodass man hier keine Assets anzeigen lassen kann. Deshalb auch für Unteraufgaben die asset-Option neu definieren, sobald der `dest`-Pfad sich verändert: 

```
docs: {
	files: [
		{
			assets: '../',
			...
		}
	]
}
```