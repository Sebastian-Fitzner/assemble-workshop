Micro-Templates oder Factories sind nichts anderes als Code Wrapper für bestimmte Bereiche. 

Mit anderen Worten umschließt es andere Snippets oder Partials mit einem vordefinierten Markup. Dieses Markup kann mit optionalen `hashes` erweitert/modifiziert werden. 

**Anwendungsbeispiele:** 
- Modulares Templating (Module, die verschiedene Inhalte haben können - z.B. Carousel mit Text, Bild, Video, Teasern und mehr)
- Grids (Hashes: Grid-Klassen, Modifier-Klassen)
- Wrapper-Elemente für bestimmte Bereiche: 

``` 
<section class="section is-bg-white is-container-padding">
	<div class="is-inner-container">
		<header class="section__header">
			<h2 class="section__header-headline">{{headline}}</h2>
		</header>
		MY CUSTOM CONTENT ...
	</div>
</section>
```