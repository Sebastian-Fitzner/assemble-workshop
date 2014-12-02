Um eine bessere URL-Struktur zur ermöglichen, müssen wir uns erst einmal den Assemble-Task anschauen: 

```
options: {
	...
},
pages: {
	files: [{
		cwd: '<%= paths.src %>/templates/pages/',
		dest: '<%= paths.dev %>/',
		expand: true,
		flatten: false,
		src: ['**/*.hbs']
	}]
}
```

Die Option `flatten` gibt an, ob `pages` mit entsprechenden Unterordnern (`flatten="false"`) oder ohne (`flatten="true"`) ausgegeben werden sollen.