Dieser Helper ist sehr mächtig, da er uns die Möglichkeit gibt, variable Daten direkt dem Partial zu übergeben.

``` html
\{{#parseJSON
'{
	"carousel-id": "gallery-02",
	"carousel-autoscroll": "true",
	"carousel-pagination": true,
	"carousel-type": "figure",
	"carousel-class": "custom-figure-class",
	"limit-start": "0",
	"limit-end": "5"
}'
}}

	\{{partial "_carousel" ../this}}

\{{/parseJSON}}
```