Eine gewisse Setup-Zeit muss eingerechnet werden. 

Um eine Doku zu automatisieren, müssen folgende Schritte durchgeführt werden: 

1. Eigene Ordner in `resources/data`, `resources/templates` und `resources/scss` anlegen
2. Assemble-Task konfigurieren, sodass hier zum einen die `pages` und zum anderen die `docs` gebaut werden
3. Variablen definieren, die bei `true` Dokumentations-Styles und optional JS für die Seiten ausgibt
4. Ggf eine eigenes Seitenlayout schreiben 
5. Navigation automatisieren 
6. Kategorien erstellen
7. Lo-Dash in YAML nutzen
8. Konfigurationsdatei (`siteconfig.json`) nutzen

_PG hat die Option, Dokumenationen im Doku-Stil 1 zu bauen. Wer zusätzlich noch die PG Methodik auswählt, bekommt eine Standard-Dokumenation ausgebaut._