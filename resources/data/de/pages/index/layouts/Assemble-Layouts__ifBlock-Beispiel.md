Der `\{{#ifBlock}}`-Helper macht vor allem im folgenden Beispiel Sinn: 

``` hbs
\{{#ifBlock "region-a"}}
	<section class="region region-a">
		\{{#block "region-a"}}
		\{{/block}}
	</section>
\{{/ifBlock}}
```

Wir haben einen `\{{#block "region-a"}}`, der einen `section`-Wrapper beinhaltet. 

Nun soll die `<section>` aber nur dann ausgegeben werden, wenn wirklich ein Block enthalten ist. 

Deshalb benutzen wir den `\{{#ifBlock}}`-Helper um genau das abzufragen.