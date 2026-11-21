# CO2 Footprint

Eine einfache statische Webseite zur Darstellung jährlicher CO2-Emissionsdaten von Ländern und Unternehmen.

## Funktionen

- Übersichtlicher, responsiver Aufbau mit Bootstrap 5
- Tabelle mit Ländern, Unternehmen, CO2-Emissionen und Jahren
- Live-Suche nach Land oder Unternehmen
- Sortierung aller Tabellenspalten per Klick auf die Tabellenüberschrift
- Numerische Sortierung für CO2-Emissionen und Jahreszahlen
- Keine Installation oder Datenbank erforderlich

> Die dargestellten Daten sind fiktional und dienen ausschließlich Lern- und Demonstrationszwecken.

## Projektstruktur

```text
.
|-- index.html          # Seitenstruktur und Tabelleninhalt
|-- app.js              # Filter- und Sortierlogik
|-- style.css           # Zusätzliche eigene Styles
|-- image/
|   `-- Logo_Co2.png    # Logo der Webseite
`-- README.md
```

## Voraussetzungen

Für die lokale Verwendung wird ein aktueller Webbrowser benötigt. Eine Internetverbindung wird für das Laden von Bootstrap über das CDN benötigt.

## Ausführen

### Variante 1: Datei direkt öffnen

1. `index.html` im Projektordner öffnen.
2. Die Seite wird direkt im Standardbrowser angezeigt.

### Variante 2: Lokaler Webserver

Mit Python:

```bash
python -m http.server 8000
```

Danach im Browser aufrufen:

```text
http://localhost:8000
```

Alternativ kann eine Erweiterung wie **Live Server** in Visual Studio Code verwendet werden.

## Verwendung

- Gib einen Begriff in das Feld **Filtern Land oder Unternehmen** ein, um die Tabelle live zu filtern.
- Klicke auf eine Tabellenüberschrift, um die entsprechende Spalte aufsteigend zu sortieren.
- Ein weiterer Klick sortiert dieselbe Spalte absteigend.

## Technologien

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3

## Hinweis

Die CO2-Werte und Unternehmensdaten sind erfundene Beispieldaten. Für eine produktive Anwendung sollten die Daten aus einer verifizierten Quelle oder einem API-Dienst bezogen werden.
