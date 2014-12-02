Oder auch so: 

```
---
title: Factory Page
---
\{{#factory "section"}}
	\{{#fContent grid="4" isColored="white" isBg=true isBig=true}}
        \{{> _content1 }}
    \{{/fContent}}
\{{/factory}}

\{{#factory "section"}}
	\{{#fContent grid="4" isStacked=true isColored="grey" isBg=true isBig=true}}
        \{{> _content1 }}
    \{{/fContent}}
\{{/factory}}

\{{#factory "section"}}
	\{{#fContent grid="2" isStacked=true isColored="blue" isBig=true}}
        \{{> _content1 }}
    \{{/fContent}}
\{{/factory}}
```
