Gleichzeitig muss jede Factory im Assemble Task hinterlegt sein: 

```
options: {
    partials: [
        '<%= paths.src %>/templates/partials/**/*.hbs',
        '<%= paths.src %>/templates/factories/*.hbs'
    ],
    factory: [
        {
            "factoryFileName": "f-section",
            "factoryHelperName": "section"
        }
    ]
}
```

Dabei entspricht `factoryFileName` dem Dateinamen. 