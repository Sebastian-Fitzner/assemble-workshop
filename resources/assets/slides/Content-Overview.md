Mit Assemble kann man Inhalte auslagern und entsprechend referenzieren oder direkt Markdown in die Dateien schreiben.

Die Referenzierung erfolgt durch einen einfachen Helper:

``` hbs
{{md path/to/file.md}}
```

Dabei ist zu beachten, dass der Pfad immer vom Root-Verzeichnis ausgehen muss.

Das direkte Einbetten von Markdown erfolgt durch einen Block-Helper:

``` hbs 
{{#markdown}} 
# My Headline H1 
{{/markdown}}
```
