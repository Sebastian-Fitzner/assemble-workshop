Mehrsprachigkeit ohne ein gutes Grunt-Setup würde mit Assemble nicht funktionieren. 

**Notwendige Schritte sind:**

1. Sprachen ermitteln
2. Ordner für die Sprachen erstellen (`resources/data/{lang}`, `resources/assets/{lang}`)
3. Gemeinsame Dateien definieren (CSS, JS, andere Assets)
4. Prüfen, ob der Prototyp für jede Sprache eine eigene Domain bekommt (Asset-Verteilung)
5. Sprachdateien für globale Texte erstellen
6. Lo-Dash benutzen
7. Assemble-Task konfigurieren