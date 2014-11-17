Für schnelles Prototyping lohnt es sich, Inhalte einfach über einen Helper zu wiederholen - eine Schleife sozusagen zu nutzen. 

Dadurch hat man nur ein Mark-Up, dass gepflegt werden muss. 

``` html
\{{#times 3}}

	<li class="carousel__items__item">
		\{{partial "_carousel__content" }}
	</li>

\{{/times}}
```

```
\{{#for 0 10 2}}

	<li class="carousel__items__item">
		\{{partial "_carousel__content" }}
	</li>

\{{/for}}
```

http://www.prototype-generator.com/templating-in-pg/template-helpers.html#repeat-elements-block-helper-