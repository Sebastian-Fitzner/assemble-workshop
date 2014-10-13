### `blocks` in Seiten erweitern

Wenn man eine Seite erstellt und die Helper benutzen möchte, muss man auf folgende Struktur achten: 


You create your page with the following structure:

``` hbs
{{#extend "tpl_default"}}

	{{#content "body"}}
		{{> section-main }}
	{{/content}}

{{/extend}}
```

We just `extend` our template `tpl_default` and replace the `body` with the content of our page. That is the standard procedure to create a page.

Now let's say you want to extend the `<header>` with your search bar. Here we go:

{{embed 'resources/data/code/best-practices/templating/page--extended--header.hbs'}}

You see we add a `mode` to our `extend`. There are three modes:
* **replace:** just use the `extend` helper without any mode
* **append:** just use the `mode=append` to add the content to the bottom of the block
* **prepend:** just use the `mode=prepend` to add the content to the top of the block

You got a very handy tool, right? Because you can not only add a search bar, you can also add whatever you want without any `is-statements` in our main template.