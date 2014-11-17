Benutze den `\{{#is}}`-Block-Helper um die obere Suche im Layout nur auf der Startseite anzuzeigen.

Setze dabei einen neuen YAML-Wert `searchbar: true` in `index.hbs` und spreche diesen Wert im `is`-Statement an.

### Zusatz:

Erweitere die `article.json` um 5 zusätzliche Inhalte. Packe dabei alle Inhalte in ein `data`-Objekt ([Beispiellink](http://www.prototype-generator.com/templating-in-pg/template-data.html#json-structure)).

Benutze den `\{{#each}}`-helper und gebe alle Elemente von der `article.json` in der Page `page-article.hbs` aus.