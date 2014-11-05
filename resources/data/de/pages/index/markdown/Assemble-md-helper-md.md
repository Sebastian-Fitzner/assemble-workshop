Der `\{{md}}` Helper referenziert immer zu einer Datei und gibt den Inhalt der Datei aus. 

_Beispiel:_
``` hbs
---
title: Custom Markdown Page
---

<article class="article">
	\{{md "resources/data/pages/custom-markdown-page.md"}}
</article>
```