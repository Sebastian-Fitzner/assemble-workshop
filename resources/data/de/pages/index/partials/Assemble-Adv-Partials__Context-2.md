**YAML front matter**

YAML front matter, das im Partial definiert ist, steht an zweiter Stelle: 

__`my-partial.hbs`__

``` hbs
---
partialHeadline: "Custom Partial"
---

<h2>\{{partialHeadline}}</h2>
\{{{partialContent}}}

```
