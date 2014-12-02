`\{{assets}}` ist ein netter Helper um einen relativen Pfad zu den Asset-Dateien (`img`, `css` etc.) herzustellen. 

Aber lasst uns kurz folgenden Task anschauen: 

```
options: {
	assets: '<%= paths.dev %>',
	...
},
pages: {
	files: [
		{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}
	]
},
docs: {
	files: [
		{
			cwd: '<%= paths.src %>/templates/docs/',
			dest: '<%= paths.dev %>/docs',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}
	]
}
```
