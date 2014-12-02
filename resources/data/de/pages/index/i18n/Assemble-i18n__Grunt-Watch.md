Auch der `watch` task ist wichtig und sollte nur auf eine Sprache definiert werden: 

```
templates: {
	files: ['<%= paths.src %>/{data/de,templates/layouts,templates/partials}/**/{,*/}*.{md,hbs,yml,json}'],
	tasks: ['newer:assemble:pagesDE'],
	options: {
		spawn: false
	}
},
pages: {
	files: ['<%= paths.src %>/templates/pages/**/{,*/}*.hbs'],
	tasks: ['newer:assemble:pagesDE'],
	options: {
		spawn: false
	}
}
```

Performance ist hier ein Stichpunkt. Generell kann man im `serve` task alle Sprachen bauen lassen und dann im `watch` nur die aktuelle Sprache neu generieren lassen.