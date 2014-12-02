Wenn man das Ganze dann in einer Factory ausgelagert hat, kann das Ergebnis so aussehen: 

```
---
title: Factory Page
---
\{{#section grid="4" isColored="white" isBg=true isBig=true}}
    \{{> _content1 }}
\{{/section}}

\{{#section grid="4" isStacked=true isColored="grey" isBg=true isBig=true}}
    \{{> _content2 }}
\{{/section}}

\{{#section grid="2" isStacked=true isColored="blue" isBig=true}}
    \{{> _content3 }}
\{{/section}}
```
