Der einfache Partial kann maximal einen Kontext verarbeiten:

* einen JSON Kontext oder
* einen Page Kontext

Für das Verarbeiten von mehreren Kontexten hilft nur der `Advanced Partial Helper`. 

_Ein Kontext weist im JavaScript auf ein Objekt. Innerhalb eines Objektes referenziert `this` zu dem Objekt selbst und stellt sozusagen eine Schnittstelle zu den Eigenschaften und Methoden des Objektes her._

_Vereinfacht gesagt, ist das der Bezug zu den Daten der JSON-Datei oder Page, den der Partial verarbeitet._