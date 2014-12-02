**Vorteile:**

- der globale Kontext wird nicht mitgeschleift
- das Registrieren einer Factory ist genau so einfach wie das Erstellen eines Partials
- `\{{#block}}` und `\{{#extend}}` Syntax => kein eigener Helper pro Factory

**Nachteile:**
- der globale Kontext wird nicht mitgeschleift
- `\{{#block}}` und `\{{#extend}}` Syntax == längere Syntax
- die Factory-Schreibweise ist etwas komplizierter bzgl. der Hash-Verarbeitung

