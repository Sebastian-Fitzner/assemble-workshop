Benutze den `\{{#ifBlock}}`-Helper um überflüssiges Mark-Up zu entfernen. 

Erstelle dazu im Layout (`tpl-default.hbs`) nach `.r-content` einen neuen Bereich (`<div class="region-a" />`) und darin einen Block. 

Prüfe nun auf irgendeiner Page deinen Output. Das Mark-Up sollte nun auf allen Pages erscheinen. 

Umschließe anschließend das Mark-Up mit dem `\{{#ifBlock}}`-Helper. 

Erstelle eine neue Seite `page-ifBlock.hbs` und extende den neu definierten Block. 

Verifiziere den Output. 