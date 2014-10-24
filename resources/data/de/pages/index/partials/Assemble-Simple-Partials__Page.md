Wir können Partials in Pages benutzen und über die Page Inhalte dem Partial mitgeben. Dazu reicht es, wenn wir Variablen (`yml`) auf der Seite definieren und dann als Platzhalter im Partial ansprechen. 

#### Beispiel: 
``` hbs
---
title: My Page
partialClass: "green"
partialHeadline: "Partials im Detail"
---

\{{> my-partial}}

```

