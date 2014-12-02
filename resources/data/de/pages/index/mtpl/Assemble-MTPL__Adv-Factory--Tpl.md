Das Template wird wie folgt aufgesetzt: 

**layout-container.hbs**
``` hbs
<section class="grid-\{{#if section.grid}}\{{section.grid}}\{{/if}}
	\{{#if section.isStacked}}--stacked\{{/if}}
	\{{#if section.isColored}} is-\{{isColored}}\{{/if}}
	\{{#if section.isBG}} is-bg\{{/if}}
	\{{#if section.isBig}} is-big\{{/if}}">

    <div class="content-wrapper is-centered">
        \{{{ yield }}}
    </div>

</section>
```

`\{{{yield}}}` ist dabei nur Platzhalter und wird mit dem richtigen Inhalt ersetzt.