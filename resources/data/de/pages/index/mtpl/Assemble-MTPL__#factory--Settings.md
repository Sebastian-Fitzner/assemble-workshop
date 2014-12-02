Wichtig ist, dass der Ordner im Partials-Array deklariert ist: 

```
options: {
    partials: [
        '<%= paths.src %>/templates/partials/**/*.hbs',
        '<%= paths.src %>/templates/factories/*.hbs'
    ]
}
```

Alle weiteren Factories werden dann automatisch hinzugefügt.