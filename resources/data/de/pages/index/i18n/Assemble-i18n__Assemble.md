Im Assemble-Task muss jede Sprache definiert sein: 

```
pagesDE: {
	options: {
		data: '<%= paths.src %>/data/de/**/*.{json,yml}'
	},
	files: [{
		cwd: '<%= paths.src %>/templates/pages/',
		dest: '<%= paths.dev %>/',
		expand: true,
		flatten: false,
		src: ['**/*.hbs']
	}]
},
pagesEN: {
	options: {
		data: '<%= paths.src %>/data/en/**/*.{json,yml}'
	},
	files: [{
		cwd: '<%= paths.src %>/templates/pages/',
		dest: '<%= paths.dev %>/',
		expand: true,
		flatten: false,
		src: ['**/*.hbs']
	}]
}
```

Hier kann man natürlich auch mit einem Custom Task durch ein definiertes Array gehen oder das Modul [assemble-middleware-i18n](https://github.com/assemble/assemble-middleware-i18n) benutzen. 