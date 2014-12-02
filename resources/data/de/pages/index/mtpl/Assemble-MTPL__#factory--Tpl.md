Das Template wird wie folgt aufgesetzt: 

**layout-container.hbs**
``` hbs
<section class="grid-\{{#if blocks.content.hash.grid}}\{{blocks.content.hash.grid}}\{{/if}}
	\{{#if blocks.content.hash.isStacked}}--stacked\{{/if}}
	\{{#if blocks.content.hash.isColored}} is-\{{blocks.content.hash.isColored}}\{{/if}}
	\{{#if blocks.content.hash.isBG}} is-bg\{{/if}}
	\{{#if blocks.content.hash.isBig}} is-big\{{/if}}">

    <div class="content-wrapper is-centered">
        \{{#fBlock "content"}}
        \{{/fBlock}}
    </div>

</section>
```