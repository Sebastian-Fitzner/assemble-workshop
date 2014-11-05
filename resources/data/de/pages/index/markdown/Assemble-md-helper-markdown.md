Der `\{{#markdown}}`Block Helper kann genutzt werden um direkt Markdown in die Datei zu schreiben. 

_Beispiel:_
``` hbs
---
title: Custom Markdown Page
---

<article class="article">
	\{{#markdown}}
	
# My Headline

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 

* list
* list 2

	\{{/markdown}}
	
</article>

```

Hierbei ist wichtig, dass die IDE keine Einrückung innerhalb des Blocks vornimmt, da sonst das Parsen nicht funktioniert. 