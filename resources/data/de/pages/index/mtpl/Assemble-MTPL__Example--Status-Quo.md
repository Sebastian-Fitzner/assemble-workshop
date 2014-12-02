Lasst uns anhand eines Beispiels eine Factory erklären: 

```
---
title: Factory Page
---
<section class="grid-4 is-white is-bg is-big">
    <div class="content-wrapper is-centered">
        \{{> _content1 }}
    </div>
</section>
<section class="grid-4--stacked is-grey is-bg is-big">
    <div class="content-wrapper is-centered">
        \{{> _content2 }}
    </div>
</section>
<section class="grid-2--stacked is-blue is-small">
    <div class="content-wrapper is-centered">
        \{{> _content4 }}
    </div>
</section>
```

Wenn davon mehrere `pages` bestehen und wir noch mehr Klassen verarbeiten müssen, ist es wichtig eine Übersicht aller Optionen zu haben und zusätzlich das Markup nur an einer Stelle zu pflegen. Da können uns Factories helfen. 