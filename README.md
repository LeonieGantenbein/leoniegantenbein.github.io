# Website von Leonie Gantenbein

Eine schlichte, schnelle Website für GitHub Pages: Zur Person, Publikationen, Lebenslauf, Kontakt und ein Impressum. Keine Programmierkenntnisse nötig, keine Cookies, keine Tracker, die Schrift ist lokal eingebunden.

## Was im Ordner liegt

| Datei | Wofür |
|---|---|
| `index.html` | Die Startseite auf Deutsch |
| `en/` | Die englische Fassung: `en/index.html` und `en/imprint.html` |
| `impressum.html` | Impressum und Datenschutz (Vorlage) |
| `style.css` | Gestaltung: Farben, Schrift, Abstände |
| `leonie-gantenbein.jpg`, `leonie-gantenbein-800.jpg` | Dein Foto, in zwei Grössen (die kleine lädt auf dem Handy schneller) |
| `cover-….jpg` | Die Buchcover |
| `mail.js` | Setzt deine E-Mail-Adresse erst beim Klick zusammen, damit sie nicht offen auf der Seite steht |
| `clear.html`, `en/clear.html` | Eigene Seite zu CLEAR, damit man es bei Google findet |
| `sitemap.xml`, `robots.txt` | Zeigen Google, welche Seiten es gibt |
| `fonts/` | Die Schrift Literata (frei nutzbar, SIL Open Font License) |

## In 5 Schritten online

Deine Adresse wird **https://leoniegantenbein.github.io**

1. **Bei GitHub anmelden** als `LeonieGantenbein`.
2. **Neues Repository erstellen:** oben rechts auf **+** und dann **New repository**.
   - Name: genau `leoniegantenbein.github.io`
   - Sichtbarkeit: **Public** (mit einem kostenlosen Konto funktioniert GitHub Pages nur mit öffentlichen Repositories)
   - auf **Create repository** klicken
3. **Dateien hochladen:** im neuen Repository auf **uploading an existing file** (oder **Add file**, dann **Upload files**). Den *Inhalt* dieses Ordners hineinziehen, also `index.html`, `impressum.html`, `style.css`, `mail.js`, alle Bilder (`.jpg`), `clear.html`, `sitemap.xml`, `robots.txt` und die Ordner `en` und `fonts`. Unten auf **Commit changes** klicken.
4. **Pages prüfen:** im Repository auf **Settings**, links auf **Pages**. Unter *Build and deployment* sollte stehen: Source **Deploy from a branch**, Branch **main** und Ordner **/ (root)**. Falls nicht, so einstellen und **Save** klicken.
5. **Fertig:** Nach ein bis zwei Minuten ist die Seite unter `https://leoniegantenbein.github.io` erreichbar.

> Tipp: Wenn beim Hochladen ein Ordner nicht mitkommt, lade ihn einfach noch einmal separat hoch. Fehlt `fonts`, sieht die Seite trotzdem gut aus, nur mit einer Ersatzschrift; fehlt `en`, führt der Link «English» ins Leere.

## Inhalte ändern

**Zweisprachig:** Die Seite gibt es auf Deutsch (`index.html`) und Englisch (`en/index.html`), oben rechts lässt sich umschalten. Ändere Inhalte immer in beiden Dateien. Die englische CLEAR-Angabe trägt bei L den Zusatz (t), also L(t)3, weil die Übersetzung von einer KI stammt.

Direkt auf GitHub: Datei `index.html` anklicken, auf das Stift-Symbol (**Edit**) klicken, Text ändern, **Commit changes**. Nach einer Minute ist die Änderung online.

Deine E-Mail-Adresse steht nicht als Text auf der Seite. Wer auf „Nachricht schreiben“ klickt, bekommt sie in seinem Mailprogramm; Spam-Roboter, die Seiten nach Adressen durchsuchen, finden sie so nicht.

- **Neuer Titel:** unter «Publikationen» einen ganzen Block von `<article class="eintrag raster" …>` bis `</article>` kopieren und darüber einfügen, dann die Angaben ändern. Gib dem Eintrag eine eigene Kennung, z. B. `id="neuer-titel"` (klein, ohne Leerzeichen und Umlaute), damit man direkt auf ihn verlinken kann.
- **Neues PDF:** einen Ordner `dokumente` mit der Datei ins Repository ziehen und mit `href="dokumente/dateiname.pdf"` verlinken. Dateinamen am besten klein und ohne Leerzeichen.
- **Eintrag entfernen:** den ganzen `<article>`-Block löschen.
- **Lebenslauf:** In der passenden Rubrik (Stellen, Ausbildung …) einen ganzen Block von `<li>` bis `</li>` kopieren, oben einfügen und Zeitraum, Bezeichnung und Ort ändern. Auf der englischen Seite ebenso.
- **Buchcover:** Cover stehen im Rand neben dem Buch, als Datei `cover-titel.jpg` (Hochformat, etwa 480 Pixel breit). Austauschen: neue Datei unter demselben Namen hochladen.
- **Foto austauschen:** ein neues Bild unter demselben Namen hochladen (`leonie-gantenbein.jpg`, am besten 1600 × 900 Pixel). Ist es kein KI-Bild, in `index.html` die Bildnotiz „KI-generiertes Bild“ anpassen oder löschen.
- **CLEAR-Angabe im Fuss:** Sie steht auf R1, weil die Seite erst online geht, wenn du alles geprüft hast. Überarbeitest du später Texte mit einer KI, ergänze bei A das Modell und den Zeitraum und setze R erst wieder auf R1, wenn du die Änderungen geprüft hast.
- **Farben:** ganz oben in `style.css` unter *Farben*. `--nacht` ist das Schwarz von Rahmen, Kopf und Fuss, `--papier` das helle Blatt mit dem Lesetext. Das Blatt bleibt auch im Dunkelmodus hell, damit der schwarze Rahmen sichtbar bleibt.

## Das CLEAR-Repository

CLEAR liegt in einem eigenen Repository: **https://github.com/LeonieGantenbein/clear-kennzeichnung**. Die Website verlinkt darauf, und Rückmeldungen kommen dort über **Issues** an.

1. Auf github.com **+**, dann **New repository**. Name genau `clear-kennzeichnung`, **Public**, **Create repository**.
2. Auf **uploading an existing file** klicken und den Inhalt des Ordners `clear-kennzeichnung` hineinziehen: auf Deutsch `README.md`, `KULTUR.md`, `SPEZIFIKATION.md`, `FACTSHEET.md`, auf Englisch `README.en.md`, `CULTURE.md`, `SPECIFICATION.md`, `FACTSHEET.en.md`, dazu `LICENSE.md` und `CITATION.cff`. **Commit changes**.
3. Fertig. GitHub zeigt die `README.md` als Startseite, und über **Cite this repository** lässt sich CLEAR direkt zitieren.

## Eigene Domain (optional)

Wenn du eine Adresse wie `leoniegantenbein.ch` besitzt: in **Settings**, **Pages**, **Custom domain** eintragen und bei deinem Domain-Anbieter die DNS-Einträge setzen, die GitHub dort anzeigt. Danach **Enforce HTTPS** aktivieren.

## Impressum

`impressum.html` ist eine Vorlage. Welche Angaben Pflicht sind, hängt vom Land ab, in dem du lebst, und davon, ob du über die Seite etwas verkaufst. Bitte die Angaben ergänzen und im Zweifel kurz prüfen lassen.
