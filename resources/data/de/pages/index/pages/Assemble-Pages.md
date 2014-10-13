Pages beinhalten den Inhalt einer Seite und können wie folgt aufgesetzt werden:

``` hbs
---
title: Prototype Deluxe
---

<div class="slides">
	<h2> {{ title }} </h2>
	<div class="loader"></div>
</div>

```

Folgendes ist hier wichtig:
* Pages können YML-Inhalte besitzen
* YML-Inhalte können im Layouts oder in der Page verarbeitet werden
* Pages können Layouts direkt ansprechen

``` hbs
---
title: Prototype Deluxe
layout: tpl_seitentyp.hbs
---

<div class="slides">
	<h2> {{ title }} </h2>
	<div class="loader"></div>
</div>

```