Der `\{{md}}` Helper referenziert immer zu einer Datei und gibt den Inhalt der Datei aus. 

Dabei muss immer der komplette Projekt-Pfad zur Datei angegegeben werden, z.B.:
* `resources/data/pages/homepage.md`

**Beispiel:**
``` hbs
---
title: Custom Markdown Page
---

<article class="article">
	\{{md "resources/data/pages/custom-markdown-page.md"}}
</article>
```