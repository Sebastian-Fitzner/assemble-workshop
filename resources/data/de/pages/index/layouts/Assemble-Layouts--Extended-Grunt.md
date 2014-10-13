Um `\{{#block}}` und `\{{#extend}}` zu aktivieren, muss man folgende Einstellungen im Assemble Task treffen:

``` json
options: {
	assets: '<%= paths.dev %>',
	data: '<%= paths.src %>/data/**/*.{json,yml}',
	helpers: '<%= paths.src %>/templates/helpers/**/*.js',
	layoutdir: '<%= paths.src %>/templates/layouts/',
	layout: false,
	partials: [
		'<%= paths.src %>/templates/partials/**/*.hbs',
		'<%= paths.src %>/templates/layouts/tpl_default.hbs'
	]
}
```

**Hier sieht man, dass kein Layout mehr definiert ist.** Das ist richtig und wichtig, wir müssen das Layout zu unserer Partial-Sektion hinzufügen.