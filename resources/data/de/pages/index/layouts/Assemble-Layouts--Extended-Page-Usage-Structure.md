Wenn man eine Seite erstellt und die Helper benutzen möchte, muss man auf folgende Struktur in Pages achten:

``` hbs
\{{#extend "tpl_default"}}

	\{{#content "body"}}
		\{{> section-main }}
	\{{/content}}

\{{/extend}}
```

Wir `extenden` unser Layout `tpl_default` und ersetzen den `body` mit den Inhalt unserer Seite. Das ist die Standard-Vorgehensweise um Seiten zu erstellen.