Schreibe ein Base Layout `base.hbs`, das folgende Regionen beinhaltet: 
 
* Header (ohne Fallback)
* Body (ohne Fallback)
* Footer (ohne Fallback)

Füge ein `layout-a.hbs` hinzu, das das `base` layout extended um folgende Punkte: 

**Header:** 
* Erweitere den Header um `search.hbs`
* Erstelle einen neuen Block `header-logo`, der später dann über die Page extended werden kann


**Body:** 
* Erweitere den Body um eine `<h1>`
* Füge weitere Regionen (Blocks) für die Page hinzu: `region-a`, `region-b`

**Footer:**
* Füge den Partial `footer-a.hbs` dort ein. 

Zum Schluss füge noch eine Page hinzu, die 
* `layout-a` benutzt und `header-logo` um den Partial `logo-a.hbs` erweitert
* `region-a` und `region-b` mit Fließtext befüllt.

Nutze dazu folgendes Setup-Material:
* "Layouts Extended - Layouts Extend"