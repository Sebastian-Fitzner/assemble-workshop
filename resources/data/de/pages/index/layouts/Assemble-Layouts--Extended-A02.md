Schreibe das bereitgestellte Template um damit darin `\{{#blocks}}` verwendet werden können.

Erstelle eine neue Seite `page-extend.hbs` und benutze `\{{#extend}}` um die Blöcke im Layout mit neuen Inhalt zu befüllen: 

* Ersetze den Logo-Block mit den Partial `b-logo--inverted.hbs`
* Hänge an den Header den Partial `b-search.hbs`
* Ersetze den Body mit dem Partial `c-article.hbs`
* Stelle an den Footer den Partial `b-footer-prepend.hbs` voran

Nutze dazu folgendes Setup-Material:
* Aufgabe "Layouts Extended - Page Extend"