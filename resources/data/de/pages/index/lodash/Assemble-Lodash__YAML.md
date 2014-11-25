YAML Front Matter kennen wir nur als statische Variablen, in etwa so: 

``` hbs
---
title: My Custom Title
---

<h1>\{{title}}</h1>

```

YAML Front Matter können aber auch variable sein bzw. global definiert werden. 

``` hbs
---
title: <%= pkg.name %>
---
<h1>\{{title}}</h1>
```

Dabei ist `pkg` in der `Gruntfile.js` definiert und bezieht sich auf die `package.json`. 

Wir können aber auch einfach eine eigene JSON-Datei anlegen und dort bestimmte Variablen definieren. 
