let lastScrollTop = 0; // Keep track of the last scroll position
const navbar = document.querySelector('.navbar');

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); // Toggle hamburger to X
});

window.addEventListener('scroll', function() {

  // Check if we are on mobile
  if (window.innerWidth <= 768) {
    const scrollPos = window.scrollY;
    const section = document.querySelector('.full-screen-section'); 
    // Move the background horizontally based on scroll position
    section.style.backgroundPosition = `center ${50 + scrollPos * 0.1}%`; // Adjust multiplier for speed
  }

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // User is scrolling down
    navbar.classList.add('scrolled');  // Add 'scrolled' class to move navbar to top
  } else {
    // User is scrolling up
    if (currentScroll <= 0) {
      navbar.classList.remove('scrolled'); // Remove 'scrolled' class to move navbar back to bottom
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll position
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesData = [
      {
        id: "lighting",
        title: "Beleuchtungstechnik",
        description: "Bei Beleuchtungen wird in der Regel nur die Farbtemperatur in Kelvin, der Lichtstrom in Lumen und die dafür benötigte Leistung in Watt diskutiert. Wie gut die Qualität ist, spielt oft nur eine untergeordnete Rolle. Dabei ist es sehr entscheidend, wie das Spektrum des Lichts zusammengesetzt ist und mit welcher Konstanz der Lichtstrom ausgesendet wird. In den eigenen vier Wänden bilden diese Parameter die Grundlage für das Wohlbefinden, im gewerblichen Umfeld, bei Fertigungsprozessen, geht es dagegen um die Qualität der Produktion. Oft können schon geringe Farbunterschiede oder kleine Fehler, die aufgrund ungeeigneter Beleuchtung nicht erkannt wurden, das produzierte Gut zum Ausschuss machen. Neben der Lichtanalyse für Wohnen und Gewerbe beraten wir sie gerne zur Nachhaltigkeit, zur Effizienz und zur Wirtschaftlichkeit und begleiten sie natürlich bis zum Abschluss der Umsetzung.",
        captionHeading: "Unser Angebot für sie:",
        captionP1:"Lichtspektrum Analyse & Synthese",
        captionP2:"Lichtflicker Messungen",
        captionP3:"Beratung zur Technik und Umsetzung",
        captionP4:"Schulung zu Lichtparametern",
        images: [
          "/images/Pilze-600.jpg",
          "/images/2-3-die Augenkurve-final.png",
          "/images/3-2-Leuchtstoff-spectrum.png",
          "/images/3-3-LED-1-warm-spectrum.png",
          "/images/3-5-LED-1-warm-neutral-spectrum.png",
          "/images/ic-p4m-02-min.gif",
          "/images/6-2-Restwelligkeit.png",
          "/images/3-4-LED-2-neutral-spectrum.png",
          "/images/3-4-LED-2-warm-spectrum.png",
          "/images/3-5-LED-1-warm-neutral-Farbsegel.png",
          "/images/3-5-LED-1-warm-neutral-histogram.png",
          "/images/3-5-LED-1-warm-neutral-spectrum.png"
        ],
        tabNames: ["Lichtspektrum & Farbtemperatur", "Lichtprobleme","Moderne Leuchtmittel","Spektrum-Synthese","Leuchtstoffröhre zu LED","Lichtflicker"], // Names for tabs
        content: [
          // First tab (landing page content)
          [
              "<h2>Die Parameter des Lichtspektrums</h2>",
              "<p id='questionanswer'>Was ist das sichtbare Lichtspektrum?</p>",
              "<p>Unter dem sichtbaren Lichtspektrum versteht man  alle Wellenlängen der elektromagnetischen Strahlung, die durch die Rezeptoren im menschlichen Auge erkannt werden können. Dazu gehören in der Regel alle Wellenlängen zwischen 420 nm und 700 nm. In der folgenden Norm-Kurve für das „Tag-Sehen“, also die Wahrnehmung bei signifikanter Beleuchtung, ist dargestellt wie intensiv die in diesem Bereich vorhandenen Wellenlängen wahrgenommen werden.</p>",
              
              "<img src='/images/2-3-die Augenkurve-final.jpg' alt='landscape' />",
              
              "<p id='questionanswer'>Welches Spektrum sollte eine gute Beleuchtung haben?</p>",
              "<p>Die ideale Beleuchtung sollte über das gesamte sichtbare Spektrum eine gleichmäßige Strahlungsstärke  haben. Dieses Ziel ist  jedoch nur schwer bis gar nicht zu erreichen. Selbst das Lichtspektrum der Sonne an einem Sommernachmittag, wie  im Bild unten dargestellt, weist Schwankungen auf. Trotzdem wird die Intensität der normierten Referenzfarben in der Graphik rechts nie kleiner als 99.</p>",
              
              "<img src='/images/2-8-spectrum-blauer-Himmel.png' alt='square' />",
              "<img src='/images/2-8-histogram-blauer-Himmel.png' alt='square' />",

              "<p>Wenn man von einer guten Beleuchtung spricht, sollten ihr Spektrum zumindest ansatzweise diese Konstanz erreichen. Das ist natürlich in erster Linie eine Frage der Kosten. Dennoch kann sich diese Investition im gewerblichen Umfeld schnell rentieren, wenn dadurch Produktionsprozesse schneller und in höherer Qualität durchgeführt werden können.</p>",
              "<p id='questionanswer'>Was ist die Lichttemperatur?</p>",
              // "<h2>Was ist die Lichttemperatur?</h2>",
              "<p>Die Lichttemperatur ist eine physikalische Vergleichsgröße. Sie bezieht sich auf einen theoretischen, tief schwarzen Körper der keinerlei Umgebungslicht reflektieren kann. Wenn man diesen Körper erhitzt bis er glüht, dann   strahlt er durch sein Glühen wieder Licht ab und die Temperatur des Lichts entspricht genau der Temperatur des erhitzten Körpers. Wird dieser Körper z.B. auf eine Temperatur von 4000 Kelvin erhitzt, dann hat das Licht, das durch das Glühen entsteht dementsprechend einer Lichttemperatur von 4000 Kelvin.</p>",
              "<p>Auf dem abgebildeten Farbsegel, in dem alle Spektralfarben enthalten sind, verläuft  eine gebogene Linie über die jenigen Farben, die durch die Erhitzung dieses schwarzen Strahlers erzeugt werden können. Die angegebenen Temperaturen zeigen, welche Farben bei welchen Temperaturen abgestrahlt werden. Auch wenn das Licht bei niedrigeren Temperaturen rötlich wird und bei höheren Temperaturen bläulich, spricht man hier allgemein von weißem Licht.</p>",
              
              "<img src='/images/3-5-LED-1-warm-neutral-Farbsegel.png' alt='square' />",

              "<p id='questionanswer'>Was ist der Farbwiedergabeindex?</p>",
              "<p>Der Farbwiedergabeindex ist ein Mittelwert, der die Qualität des Lichtspektrums beschreiben soll. Es gibt zwei verschiedene Spezifikationen. Die ältere wird mit Ra bezeichnet und stammt aus der Zeit zu Anfang des 20. Jahrhunderts. Bei  der Messung zur Ermittlung von R werden nur 8 Referenzfarben (R1 bis R8) berücksichtigt. Das war zu dieser Zeit vollkommen ausreichend, weil es noch keine Leuchtstoffe gab, welche die individuelle Formung des Spektrums zuließen. Oder anders ausgedrückt:  Die Form des Spektrums zweier Glühlampe unterscheidet sich nur wenig, daher genügen auch wenige Stützstellen um die Kurve des Spektrums nachvollziehen zu können.</p>",
              "<p>Durch die Einführung der Leuchtstoffröhren und später auch der weißen LEDs, war diese geringe Anzahl an Referenzfarben nicht mehr ausreichend, daher wurde der Farbwiedergabeindex um die Farben R9 bis R15 erweitert und erhielt die Bezeichnung Re für extended (erweitert).</p>",
              
              "<img src='/images/3-3-LED-1-neutral-histogram.png' alt='square' />",

              "<p>Die Abbildung zeigt das Balkendiagramm der Referenzfarben einer normalen neutral weißen LED. bildet man den Mittelwert aus den  Balkenlängen, die  durch die Zahlen am rechten Rand angegeben sind, dann erhält man den Farbwiedergabeindex.</p>",
              "<p>Wichtig ist hier, dass auch die schlechte Wiedergabe einiger Referenzfarben durch wenige besser wiedergegebene Farben ausgeglichen werden kann. Es handelt sich schließlich um einen Mittelwert. Der Farbwiedergabeindex stellt also nur einen Anhaltspunkt dar und kann niemals die detaillierte Betrachtung des Spektrums ersetzen.</p>",
              "<p id='questionanswer'>Was ist der Gamut Area Index GAI</p>",
              "<p>Hinter dem Gamut Area Index verbirgt sich nichts anderes als die Farbsättigung. Ein Blick auf das Farbsegel zeigt, dass die gesättigten Farben am Rand liegen, während sich die ungesättigten Pastelltöne in der Mitte befinden. Wird der Farbraum eingegrenzt, wie es die gestrichelten Linien andeuten, dann verlieren die Farben ihre Sättigung. Fehlen also Teile des Spektrums, dann  verkleinert sich der Farbraum  und die Sättigung geht zurück, Farben sind weniger gut zu unterscheiden und es kann bei komplexen Arbeitsschritten, die unter entsprechender Beleuchtung durchgeführt werden, zu Fehlern kommen.</p>",
              
              "<img src='/images/2-9-Farbsegel-Saettigung.png' alt='square' />",

              "<p>Wird der gesamte Farbraum abgestrahlt, dann hat der GAI einen Wert von 100.  Im klassischen Fall einer warm weißen Beleuchtung mit ihrem abfallenden Spektrum liegt er dagegen nur noch unterhalb 50. Hier werden die Farbanteile von rot in Richtung blau immer schwächer. Es fehlt demnach ein großer Teil des Spektrums. Das ist der Grund, warum grün und blau bei einer schwachen warm weißen Beleuchtung kaum noch zu unterscheiden sind.</p>",
          ],
          // Second tab
          [
              "<h2>Beispiele für ein schlechtes Lichtspektrum</h2>",
              "<p id='questionanswer'>Die Leuchtstoffröhre</p>",
              "<p>Leider befinden sich heute noch in vielen Fertigungsanlagen alte Beleuchtungen mit der klassischen 150 cm Leuchtstoffröhre. Oft zögern die  Betreiber diese zu ersetzen, weil die Kosten für den Austausch zu hoch angesetzt werden und der Zeitraum der Amortisierung damit steigt. Eine detaillierte Betrachtung dazu erfolgt  unter der Überschrift: Die Umrüstung von Leuchtstoffröhre  auf LED-Röhre.</p>",
              "<p>In jedem Fall ist das Lichtspektrum einer klassischen Leuchtstoffröhre und damit die Ausleuchtung der Fertigung miserabel. Wie das Spektrum zeigt, sind nur die Farben grün und orange mit einer hohen Leistung vertreten. Obwohl die Farben blau, türkis und gelb noch als Spitzen erkennbar sind, haben sie nur eine sehr begrenzten Einfluss auf das Spektrum.</p>",
              
              "<img src='/images/3-2-Leuchtstoff-spectrum.png' alt='square' />",
              "<img src='/images/3-2-Leuchtstoff-histogram.png' alt='square' />",

              "<p>Das Balkendiagramm auf der rechten Seite liefert die Erklärung, warum diese Art der Beleuchtung immer noch  so beliebt ist. Die Leuchtstoffe wurden so gewählt, dass die ersten acht Referenzfarben gute Werte haben. Dadurch steigt der Farbwiedergabe Index Ra auf 88, während der Vergleich mit dem erweiterten Farbwiedergabeindex Re mit einem Wert von 83 die Wahrheit über diese schlechte Beleuchtung enthüllt.</p>",
              "<p>Warum ist das immer noch so? Leider hat es die Leuchtmittel-Industrie geschafft, dass auf den Leuchtmittelverpackungen immer noch der alte Farbwiedergabeindex angegeben werden darf. Wie wenig Aussagekraft dieser Wert heute noch hat zeigen die Bilder ganz eindeutig.</p>",
              "<p id='questionanswer'>Die Glühlampe</p>",
              "<p>Aus gutem Grund ist der Verkauf von Glühlampen inzwischen in der EU verboten. Aber leider gibt es immer noch Anhänger dieser veralteten Technik. Vergleicht man das Spektrum unten links mit der Normkurve für das Tag-Sehen, dann fällt auf, dass der intensivste Teil des Glühlampenlichts, die Wellenlängen größer 700 nm, überhaupt nicht mehr vom menschlichen Auge erfasst werden können. Sie liegen bereits im  Nahinfrarotbereich und dienen nur noch der elektrischen Beheizung des Raumes, auch im Sommer. Dagegen fehlen die blauen Spektralanteile für eine gute Farberkennung weitestgehend.</p>",
              
              "<img src='/images/3-1-Gluehlampe-spectrum.png' alt='square' />",
              "<img src='/images/3-1-Gluehlampe-histogram.png' alt='square' />",

              "<p>Betrachtet man dagegen das Balkendiagramm auf der rechten Seite, dann wird man mit nahezu perfekten Werten konfrontiert. Wie kann das sein? Die Antwort ist sehr einfach. Die Referenz für das Balkendiagramm ist bis 5000 Kelvin der schwarze Strahler (Unterpunkt Lichttemperatur) und die Glühlampe ist mit ihrem äußerst dünnen Draht, an dem sich kein signifikanter Lichtanteil reflektieren kann, annähernd ein schwarzer Strahler. Sie ist demnach ihre eigene Referenz. Kaum jemand weiß das! Deswegen wird die Glühlampe immer noch für ihre besonderen Werte  geschätzt, obwohl die Farberkennung bei  ihrem Spektrum sehr schlecht ist.</p>",
          ],
          // Third tab
          [
              "<h2>Aktuelle Leuchtmittel</h2>",
              "<p id='questionanswer'>Wie funktioniert eine LED?</p>",
              "<p>Moderne Leuchtmittel und Leuchten werden in LED Technik ausgeführt. Bei einer weiß-leuchtenden LED handelt es sich im Kern um eine blaue LED oder eine violette LED. Eine Beschichtung über der LED, das sogenannte Phosphor-Coating, enthält verschiedene Leuchtstoffe, die durch dieses blaue oder violette Licht angeregt werden und alle anderen Farbanteile des Lichtspektrums erzeugen.</p>",
              "<p>Die meisten auf dem Markt befindlichen LEDs bestehen im Kern noch aus einer blauen LED. In diesem Fall wird das blaue Licht direkt genutzt, während  die restlichen Farbanteile durch die Leuchtmittel erzeugt werden. Aus physikalischen Gründen ergibt sich auf dieses Weise eine Lücke zwischen blau und grün, die nicht ausgeglichen werden kann. Damit das Licht trotzdem weiß ist, muss demnach in der Produktion der rote Bereich reduziert werden. Diese LEDs haben also nicht nur eine Türkis-Schwäche, sondern auch eine Rot-Schwäche.</p>",
              "<p>Bei den neuen Vollspektrum-LEDs ist das nicht mehr der Fall. Sie werden von kaum sichtbarem violettem UV-Licht angeregt. Das bedeutet: Alle sichtbaren Farbanteile entstehen nur noch durch Leuchtstoffe. Auf diese Weise gibt es keine Türkis-Schwäche mehr und die roten Spektralanteile müssen auch nicht mehr reduziert werden. Es entsteht ein nahezu perfektes Lichtspektrum.</p>",
              "<p id='questionanswer'>Warum werden nicht alle LEDs mit UV-Licht angeregt?</p>",
              "<p>Die Herstellung einer UV-LED ist heute immer noch wesentlich schwieriger als die Herstellung einer blauen LED. Das schlägt sich dementsprechend auch im Preis nieder. Alleine die LEDs, nicht die restlichen Komponenten des Leuchtmittels, sind um den Faktor 3 bis 4 teurer. Dazu kommt, dass moderne weiße LEDs, die im Kern mit blauem Licht betrieben werden, auch heute schon beachtlich gute Lichtspektren vorweisen können. Kurz gesagt haben es die Vollspektrum-LEDs schwer sich durchzusetzen. Dennoch sind sie verfügbar und in kritischen Bereichen durchaus  die bessere Wahl.</p>",
              "<p id='questionanswer'>Das warm weiße LED-Spektrum (bis 3300 K)</p>",
              "<p>In den  beiden Diagrammen unten sind links eine konventionelle warm weiße LED und rechts eine Vollspektrum-LED dargestellt. Bei der konventionellen LED ist noch der starke blaue Anteil und die Lücke zwischen blau und grün zu sehen, während die Vollspektrum-LED hier bereits einen sehr homogenen Abfall der Kurve aufweist. Trotzdem ist der Unterschied auf den ersten Blick sehr gering. Erst die Werte des Farbwiedergabeindexes zeigen  die Wahrheit:</p>",
              
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>Farbwiedergabeindex</th>
                    <th>R<sub>a</sub></th>
                    <th>R<sub>e</sub></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Konventionelle LED</td>
                    <td>84</td>
                    <td>79</td>
                  </tr>
                  <tr>
                    <td>Vollspektrum LED</td>
                    <td>97</td>
                    <td>97</td>
                  </tr>
                </tbody>
              </table>
              `,
              "<img src='/images/3-3-LED-1-warm-spectrum.png' alt='square' />",
              "<img src='/images/3-4-LED-2-warm-spectrum.png' alt='square' />",

              "<p id='questionanswer'>Das neutral weiße LED-Spektrum (3300 K bis 5300 K)</p>",
              "<p>Deutlicher wird  der Unterschied zwischen der konventionellen Technik und der Vollspektrum-Technik bei  neutral weißen LEDs. Während das Spektrum der konventionellen LED links immer noch die Lücke zwischen blau und grün aufweist und damit technisch nicht ohne Rot-Schwäche auskommt, fällt im Diagramm der Vollspektrum-LED rechts das Licht in Richtung blau wieder gleichmäßig ab. Das zeigt sich auch im Farbwiedergabeindex:</p>",
              
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>Leuchtmittel</th>
                    <th>R<sub>a</sub></th>
                    <th>R<sub>e</sub></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Konventionelle LED</td>
                    <td>89</td>
                    <td>84</td>
                  </tr>
                  <tr>
                    <td>Vollspektrum LED</td>
                    <td>97</td>
                    <td>98</td>
                  </tr>
                </tbody>
              </table>
              `,
              "<img src='/images/3-3-LED-1-neutral-spectrum.png' alt='square' />",
              "<img src='/images/3-4-LED-2-neutral-spectrum.png' alt='square' />",

              "<p id='questionanswer'>Das kaltweiße LED-Spektrum (ab 5300 K)</p>",
              "<p>Am intensivsten zeigt sich der Unterschied zwischen der konventionellen Technik und der Vollspektrum-Technik bei dem so genannten kalt weißen LED-Licht. Im linken Spektrum (konventionelle LED) überragt der blaue Anteil die restlichen Farben um annähernd das Doppelte. Das ist auch der Grund, warum kalt weißes Licht einen derart schlechten Ruf genießt. Es wird von den meisten Menschen als unangenehm, grell und damit als wirklich kalt empfunden, dabei liegt die Farbsättigung, der GAI annähernd bei 100.</p>",
              "<p>Im rechten Bild ist zum Vergleich das Lichte einer kalt weißen Vollspektrum-LED zu sehen. Warum dieses Licht als kalt bezeichnet wird, ist bei genauerer Betrachtung nicht mehr wirklich nachvollziehbar. Es hat eine Farbtemperatur von 5900 Kelvin und entspricht, wenn man die nicht sichtbaren Spektralanteile unterhalb 420 nm und oberhalb 700 nm weg lässt, ziemlich genau dem Licht eines hellen Sommernachmittags, wie es anfangs dargestellt wurde (Die Parameter des Lichtspektrums). Hier handelt es sich um eine Beleuchtung, in der wirklich jeder Farbanteil zu sehen ist. Das zeigt auch der der Farbwiedergabeindex:</p>",
              
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>Leuchtmittel</th>
                    <th>R<sub>a</sub></th>
                    <th>R<sub>e</sub></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Konventionelle LED</td>
                    <td>85</td>
                    <td>79</td>
                  </tr>
                  <tr>
                    <td>Vollspektrum LED</td>
                    <td>95</td>
                    <td>94</td>
                  </tr>
                </tbody>
              </table>
              `,
              "<img src='/images/3-3-LED-1-kalt-spectrum.png' alt='square' />",
              "<img src='/images/3-4-LED-2-kalt-spectrum.png' alt='square' />",

              "<p>Eine wichtige Anmerkung muss zum Farbwiedergaberindex noch gemacht werden. Die Werte der Vollspektrum-LED sind hier etwas schlechte als bei der neutral weißen Vollspektrum-LED. Das bedeutet aber nicht, dass das Spektrum schlechter ist. Der Grund liegt vielmehr in der zur Messung verwendeten Referenz. Bis 5000 K ist die Referenz der schwarze Strahler. Ab 5000 K aufwärts ist die Referenz das Tageslicht.</p>",
          ],
          // Fourth tab
          [
            "<h2>Spektrum-Synthese</h2>",
            "<p id='questionanswer'>Was ist Spektrum-Synthese?</p>",
            "<p>Wie die vorangegangenen Abschnitte gezeigt haben, gibt es mittlerweile bereits Leuchtmittel mit einer sehr guten Farbwiedergabe. Das Problem ist für viele Einsatzmöglichkeiten der immer noch relativ hohe Preis. Außerdem werden Vollspektrum Beleuchtungen oft nur als fertige Lampe angeboten, aber nicht als Retrofit-Leuchtmittel. Unter Retrofit versteht man alle Leuchtmittel, die in gebräuchliche Fassungen wie E27 passen und damit Glühlampen und Leuchtstoffröhren ersetzen können. Eine Umrüstung der vorhandenen Beleuchtung fällt damit aus, wenn das Spektrum der konventionellen LEDs nicht ausreicht. Es muss in jedem Fall neu installiert werden.</p>",
            "<p>Die Spektrum-Synthese bietet in diesem Fall eine kostengünstige Abhilfe. Vergleicht man zum Beispiel die Spektren der konventionellen warm weißen  und kalt weißen LED, dann fällt auf, dass die warm weiße LED ihr spektrales Maximum bei 620 nm hat, während das Spektrum der kalt weißen LED an diesem Punkt schon wieder abfällt. Kombiniert man diese beiden Leuchtmittel in einer Lampe, dann überlagern sich  ihre Spektren. Die Kunst dabei ist es die Leuchtmittel nach Farbtemperatur und Hersteller so zu kombinieren, dass ein wesentlich besseres Spektrum entsteht.</p>",
            "<p>Da die Anzahl der verwendeten Leuchtmittel bei diesem Verfahren konstant bleibt, liegt der Preisunterschied für den Kunden nur in der Alanalyse und anschließenden Kombination der benötigten Komponenten durch eine Fachkraft.</p>",
            "<p id='questionanswer'>Ein Beispiel zur Spektrum-Synthese</p>",
            "<p>In einem Projekt ging es darum die Brillianz von Ausstellungsstücken zu erhöhen. Dazu wurden LED Spots mit zwei verschiedenen Farbtemperaturen der Philips K8 Reihe verwendet. Genauer gesagt handelte es sich um einen Spot mit warm weißer LED und einen Spot mit neutral weißer LED. Misst man die Überlagerung der beiden Leuchtmittel, dann erhält man das Spektrum unten rechts im Bild.</p>",
            "<p>Der Einbruch zwischen blau und grün ist immer noch vorhanden, aber nicht mehr so tief. Dazu hat sich der rote Anteil erhöht. Denkt man sich eine Linie über die drei Spitzenwerte von rot, grün und blau, dann erinnert dieser Verlauf sehr an die neutral weiße VollspektrumLED. Aber auch wenn die beiden Einbrüche bei türkis und orange die Qualität des Spektrums schmälern, zeigt das Balkendiagramm auf der linken Seite schon sehr gute Werte. Der Farbwiedergabeindex ist für Ra und Re jeweils größer als 90, was sehr nahe an eine VollspektrumLED heran reicht.</p>",
            
            "<img src='/images/3-5-LED-1-warm-neutral-spectrum.png' alt='square' />",
            "<img src='/images/3-5-LED-1-warm-neutral-histogram.png' alt='square' />",
          ],
          // Fifth tab
          [
            "<h2>Die Umrüstung von Leuchtstoffröhre auf LED-Röhre</h2>",
            "<p id='questionanswer'>Der aktuelle Stand</p>",
            "<p>Bei der Begehung von Fertigungsbereichen fällt immer wieder auf, dass noch sehr viel Betriebe mit alten Linienbeleuchtungen arbeiten, die mit Leuchtstoffröhren bestückt sind. Nicht selten sieht man beim Einschalten auch noch das charakteristische Flackern, was auf ein konventionelles Vorschaltgerät, eine Drossel hinweist. Flackert die Lampe dagegen beim Einschalten nicht, dann wird sie bereits von einem elektronischen Steuergerät gestartet. Diese Geräte erzeugen nur die Zündspannung, halten sich aber sonst weitestgehend aus dem Betrieb heraus. Das bedeute sie verbrauchen im Betrieb keine Leistung wie die Drossel.</p>",
            "<p id='questionanswer'>Die mögliche Sanierung</p>",
            "<p>Möchten sie nun auf LED-Beleuchtung umstellen, dann können sie die ganze Streifenbeleuchtung von einem Fachbetrieb austauschen lassen, oder auch nur die Leuchtstoffröhren durch LED-Retrofit-Röhren ersetzen. In den meisten Fällen wird die gesamte Beleuchtung ausgetauscht, obwohl das überhaupt nicht nötig ist. Verfolgt man den Gedanken der CO2-Einsparung, dann wäre das auch kontraproduktiv. Schließlich muss in diesem Fall eine neue Lampe produziert werden, obwohl die alte noch vollkommen funktionstüchtig ist.</p>",
            "<p>Das häufigste Argument der  Betreiber ist, dass der Austausch der Leuchtstoffröhre gegen eine Retrofit-Röhre nicht gefördert wird. Das ist zwar richtig, aber wie sieht es unter dem Strich mit den Kosten tatsächlich aus? Führt die staatliche Förderung wirklich in die Gewinnzone? Diese Frage soll in den folgenden Abschnitten erläutert werden.</p>",
            "<p id='questionanswer'>Leuchtstoffröhre vs. LED-Röhre – der Lichtstrom</p>",
            "<p>Das häufigste Argument gegen LED-Röhren ist der geringere Lichtstrom. Während eine 150 cm lange Leuchtstoffröhre einen durchschnittlichen Lichtstrom von 5100 Lumen abstrahlt, sind es bei einer LED-Röhre meistens nur um die 3700 Lumen. Warum werden keine Lichtstärkeren LED-Röhren gebaut? Die Antwort ist einfach: Weil es nicht nötig ist!</p>",
            "<p>Die Leuchtstoffröhre strahlt in alle Richtungen. Deswegen benötigt sie einen Reflektor, der das nach oben abgestrahlte Licht wieder nach unten richtet. Aber selbst wenn dieser Reflektor neu ist und gerade erst aus der Originalverpackung genommen wurde, hat er einen nicht unerheblichen Reflexionsverlust. Kommt noch ein wenig Staub dazu, dann gehen bereits ein Drittel der Lichtleistung verloren. Aus den 5100 Lumen werden somit ganz schnell nur noch 3400 Lumen. </p>",
            "<p>Wie sieht es dagegen bei der LED-Röhre aus? Hier gehen die Reflexionsverluste gegen Null. Die Röhre strahlt nur in eine Richtung und ohne Optik ist der Öffnungswinkel der LEDs ungefähr 120<sup>o</sup> Grad. Das bedeutet, die Randbereiche des abgestrahlten Lichtstroms berühren je nach Bauart noch die Ränder des Lampengehäuses. Aber mehr passiert nicht. Die abgestrahlte Lichtleistung liegt demnach annähernd bei 3700 Lumen.</p>",
            "<p id='questionanswer'>Leuchtstoffröhre vs. LED-Röhre – die Verlustleistung</p>",
            "<p>Eine Leuchtstoffröhre von 150 cm benötigt in der Regel zum Betrieb eine Leistung von 58 W. Ist ein elektronisches Vorschaltgerät eingebaut, so wird nur im Einschaltmoment  ein Zündimpuls erzeugt. Sonst gibt es keine weitere elektrische Verlustleistung. Wird die Röhre dagegen noch klassisch mit einem konventionellen Vorschaltgerät, einer Drossel, gezündet, dann fließt der Strom während der gesamten Betriebszeit durch dieses Bauteil hindurch. Durch die in Wärme umgesetzte Verlustleistung wird die Lampe sogar so warm, dass die Kunststoffteile des Gehäuses verspröden können. Messungen zeigen eine gesamte Verlustleistung von 90 W für eine Röhre mit Drossel. Zieht man davon die 58 W für die Röhre ab, dann bleibt eine Verlustleistung von 32 W für die Drossel übrig.</p>",
            "<p>Eine neutral weiße LED-Röhre mit einem Lichtstrom von 3700 Lumen liegt dagegen heute bei einer elektrischen Verlustleistung von 23 W. Da sie direkt an die Netzspannung angeschlossen werden kann, kommt keine weitere Verlustleistung hinzu.</p>",
            "<p id='questionanswer'>Zusammenfassung der technischen Daten</p>",
            "<p>In der folgenden Tabelle sind alle Lichtstromwerte und elektrischen Verlustleistungen noch einmal zusammengefasst:</p>",

            `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>Leuchtmittel</th>
                    <th>Leuchtstoffröhre<br>(Konventionell - Drossel)</th>
                    <th>Leuchtstoffröhre<br>(Elektronisch)</th>
                    <th>LED-Röhre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Zündung</td>
                    <td>Konventionell (Drossel)</td>
                    <td>Elektronisch</td>
                    <td>---</td>
                  </tr>
                  <tr>
                    <td>Länge der Röhre</td>
                    <td>150 cm</td>
                    <td>150 cm</td>
                    <td>150 cm</td>
                  </tr>
                  <tr>
                    <td>Lichtstrom</td>
                    <td>5100 lm</td>
                    <td>5100 lm</td>
                    <td>3700 lm</td>
                  </tr>
                  <tr>
                    <td>Abstrahlung</td>
                    <td>volle Umfang</td>
                    <td>volle Umfang</td>
                    <td>120° Grad</td>
                  </tr>
                  <tr>
                    <td>Reflektor Verlust</td>
                    <td>ca. 33 %</td>
                    <td>ca. 33 %</td>
                    <td>0 %</td>
                  </tr>
                  <tr>
                    <td>Verlust der Röhre</td>
                    <td>58 W</td>
                    <td>58 W</td>
                    <td>23 W</td>
                  </tr>
                  <tr>
                    <td>Verlust der Steuerung</td>
                    <td>ca. 32 W</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                  <tr>
                    <td>Abgestrahlter Lichtstrom</td>
                    <td>3400 lm</td>
                    <td>3400 lm</td>
                    <td>3700 lm</td>
                  </tr>
                  <tr>
                    <td>Benötigte Verlustleistung</td>
                    <td>90 W</td>
                    <td>58 W</td>
                    <td>23 W</td>
                  </tr>
                  <tr>
                    <td>Effektivität</td>
                    <td>37,8 lm/W</td>
                    <td>58,6 lm/W</td>
                    <td>160 lm/W</td>
                  </tr>
                </tbody>
              </table>
            `,
            "<p id='questionanswer'>Die Kosten der Umrüstung</p>",
            "<p>Die Umrüstung sollte von einer Fachfirma durchgeführt werden, da es sich im Grunde um eine elektrische Installation handelt. Was ist dabei zu tun?</p>",
            "<p>Sind noch Lampen mit einer konventionellen Drossel eingebaut, dann müssen die beiden Anschlussdrähte der Drossel nur abgezwickt, abisoliert und verbunden werden. Danach wird der Starter gegen einen LED-Röhren Starter ausgetauscht, der im Prinzip nichts anderes beinhaltet als eine Drahtbrücke. Anschließend kann schon die neue LED-Röhre eingesetzt werden. Wenn der Elektriker sehr langsam ist, benötigt er für den Umbau 15 Minuten, also eine viertel Handwerker Stunde. Dazu kommen Kosten für die Röhre zwischen 12,- € und 14,- €.</p>",
            "<p>Werden die Röhren bereits mit einem elektronischen Vorschaltgerät gestartet, dann geht es noch schneller, weil das Gerät im Betrieb nicht eingreift. Es erzeugt nur die Spannungsspitze zum Zünden der Röhre. Da es heute mittlerweile LED-Röhren gibt, die gegen diese Spannungsspitze immun sind, muss nur die Röhre ausgetauscht werden. Das ist eine Arbeit für den Hausmeister. Das Einzige, was sie benötigen, ist eine Überprüfung durch eine Fachkraft, die ihnen zertifiziert, dass die verwendeten Röhren für das eingebaute Vorschaltgerät zugelassen sind. Der Nachteil ist allerdings, dass sie in diesem Fall  nur 60 % der zuvor benötigten elektrischen Leistung einsparen und nicht 75 % wie im  Fall einer Lampe mit Drossel. Auf die Kostenliste kommen demnach pro Röhre 5 - 10 Minuten für den Hausmeister und 12,- € bis 14,- € für das Material.</p>",
            "<p>Ersetzen sie dagegen die komplette Beleuchtung im Fertigungsbereich, dann kostet eine Pendelleuchte bereits mehr als der gerade beschriebene komplette Umbau einschließlich LED-Röhre. Dazu kommt noch die Arbeitszeit der Elektriker. Der einzige Bonus den sie dafür erhalten sind 15 % Förderung (20 % mit Sanierungsfahrplan).  Eine detaillierte Kalkulation muss an dieser Stelle entfallen, da  Strompreise und Handwerkerkosten an jedem Standort unterschiedlich sind. Aber es ist offensichtlich, dass die Förderung niemals die Differenz der Kosten zwischen einer neuen Beleuchtung und einem Retrofit Umbau abdecken wird.</p>",
            "<p id='questionanswer'>Die Essenz  des Ganzen:</p>",
            "<p>Egal wie man die Kosten für einen nötigen Umbau hin und her schiebt, Erfahrungswerte zeigen, dass die Mitarbeiter immer die Räume mit der neuen LED-Beleuchtung bevorzugen und die Räume mit der alten Leuchtstoffröhren Beleuchtung meiden. Das Licht  wirkt heller, klarer und freundlicher.</p>",
            "<p>Der eigentliche Gewinn liegt also nicht in der eingesparten Verlustleistung, sondern in der Motivation ihrer Mitarbeiter.</p>"
          ],
          // Sixth tab
          [
            "<h2>Lichtflicker</h2>",
            "<p id='questionanswer'>Was ist Lichtflicker?</p>",
            "<p>Unter dem Flickern einer Beleuchtung versteht man eine periodische Schwankung der Helligkeit. Das ist so, als ob der Licht-Dimmer einer Lampe ständig hoch und runter geregelt wird, nur viel schneller. Ab einer Flicker-Frequenz von 80 Hz (Hertz), also 80 Helligkeitswechsel pro Sekunde, ist dieses Flickern nicht mehr zu erkennen,  falls sich der Beobachter statisch vor der Beleuchtung befindet. Bewegte er sich dagegen relativ zur Beleuchtung, dann ist es teilweise möglich dieses Flickern bis 1250 Hz wahr zu nehmen.</p>",
            "<p id='questionanswer'>Wie kommt es zu Lichtflicker?</p>",
            "<p>Da das Versorgungsnetz eine Wechselspannung von 230 V und 50 Hz verteilt, benötigt jede Beleuchtung ein Vorschaltgerät (Netzteil), welches die Spannung und den Strom auf die richtigen Werte senkt. In manchen Fällen wird    statt eines geregelten Netzteils auch nur die Sparvariante eingesetzt. Das bedeutet, die Wechselspannung wird nur gleichgerichtet. Das lässt sich leicht an der Abbildung unten links erklären. Sie zeigt eine gewöhnliche Sinuswelle, wie sie die Spannung des Versorgungsnetzes beschreibt. Gleichrichten bedeutet nun, dass zwischen der Zuleitung und dem Verbraucher eine Weiche eingebaut ist. Diese sorgt dafür, dass der Strom bei einer positiven Halbwelle immer in die eine und bei einer negativen Halbwelle immer in die andere der beiden Zuleitungen geschickt wird. Durch diesen permanenten Wechsel fließt der Strom damit beim Verbraucher immer in die gleiche Richtung. Wenn nun noch ein Kondensator als Pufferung eingebaut wird, dann entsteht die Wellenform wie sie im rechten Bild zu sehen ist.</p>",
            
            "<img src='/images/6-1-Netzspannungs-Sinus.jpg' alt='square' />",
            "<img src='/images/6-2-Restwelligkeit.jpg' alt='square' />",

            "<p>Die Polarität bleibt immer gleich und die Spannung schwankt nur noch in begrenztem Rahmen. Das nennt man die Restwelligkeit. Die Höhe dieser Restwelligkeit entscheidet nun darüber ob die daraus resultierende Helligkeitsänderung der angeschlossenen Beleuchtung für  das menschliche  Auge noch sichtbar ist oder nicht.</p>",
            "<p>Aber auch wenn ein richtiges Netzteil verwendet wird, kommt es zum Lichtflicker, denn keine Regelung ist perfekt. Bei qualitativ hochwertigen Geräten gibt es gewöhnlich keine Probleme, so lange sie nicht überaltert sind. Bei billiger Ware kann der Lichtflicker aber auch die zulässigen Grenzwerte überschreiten.</p>",
            "<p id='questionanswer'>Was sind die Auswirkungen von Lichtflicker?</p>",
            "<p>Die Auswirkungen des Lichtflickers sind vielfältig. Sie können von nicht bewusst wahrnehmbaren Wirkungen bis zu epileptischen Anfällen bei empfindlichen Personen führen. In der Graphik unten ist das dargestellt. Je größer die Flicker-Frequenz ist, desto geringer ist der Einfluss auf den Menschen. Irgendwann ist  die Signalgeschwindigkeit der Nerven überschritten und sie können den Wechsel nicht mehr übermitteln.</p>",
            "<p>In der Graphik sind zwei Kurven dargestellt. Links bei den niedrigen Frequenzen befindet sich die Kurve Pst = 1. Sie beschreibt, in welchem Bereich bei statischer Betrachtung einer Lichtquelle mit einem erhöhten Risiko für einen Anfall gerechnet werden muss. Die rechte Kurve SVM = 1 zeigt den Bereich, in dem der sogenannte Stroboskop Effekt auftreten kann. Das bedeutet der Flicker ist bei einer relativen Bewegung des Beobachters zur Lichtquelle  wahrnehmbar. In diesem Bereich ist aber nicht mehr mit gesundheitlichen Folgen zu rechnen. Es kann höchstens noch zu Unwohlsein oder vorzeitiger Ermüdung kommen. In jedem Fall ist es sinnvoll immer unter den Kurven zu bleiben, das heißt im gelb oder grün hinterlegten Bereich.</p>",
            
            "<img src='/images/6-6-Bewertung.jpg' alt='square' />",

            "<p id='questionanswer'>Was ist bei der Dimmung von Lampen zu beachten?</p>",
            "<p>Beleuchtungen werden oft gedimmt, in dem man sie mit hoher Geschwindigkeit periodisch ein- und ausschaltet. So lange dabei die Frequenz von 1250 Hz nicht unterschritten wird (Ende der Kurve SVM = 1) wird das niemand bemerken und es ist auch nicht mit Schädigungen zu rechnen. Aber es gibt auch Dimmer, die wesentlich langsamer arbeiten. Teilweise sind Geräte im Umlauf, die nur eine Schaltfrequenz von 100 Hz haben. Bei statischer Betrachtung wird das nicht auffallen, aber so bald eine Bewegung relativ zur Beleuchtung stattfindet liegt der Fall anders.</p>",
            "<p>Warum sind solche Lichtdimmer im Umlauf, obwohl aus der Graphik klar hervor geht, dass ein Flicker Wert von 100 % bei 100 Hz unzulässig ist? Die Antwort ist genauso einfach wie unverständlich. Hier gibt es eine Gesetzeslücke. Die Grenzwerte des Flickers gelten nur für den Betrieb bei voller Lichtleistung, nicht aber für die gedimmte Beleuchtung.</p>"
          ]
      ]
      }
    ];
  
    // specificServices
    const heroSection = document.querySelector(".hero-section");
    servicesData.forEach((service) => {
      const heroService = document.createElement("div");
      heroService.className = "hero-services";
      heroService.dataset.id = service.id;
    
      let captions = `
        ${service.captionHeading ? `<h3>${service.captionHeading}</h3>` : ""}
        ${service.captionP1 ? `<p>${service.captionP1}</p>` : ""}
        ${service.captionP2 ? `<p>${service.captionP2}</p>` : ""}
        ${service.captionP3 ? `<p>${service.captionP3}</p>` : ""}
        ${service.captionP4 ? `<p>${service.captionP4}</p>` : ""}
      `;
    
      heroService.innerHTML = `
        <div class="serviceTitle">
          ${service.title}
          <div class="hero-image">
          <img src="${service.images[0]}" alt="${service.title}">
          <div class="hero-description-overlay">
            ${captions}
          </div>  
        </div>
        </div>
        <div class="hero-text">
          <p>${service.description}</p>
          <div class="visit-page-text">Visit Page</div>
        </div>
      `;
    
      heroSection.appendChild(heroService);
    });
    // Add event listener for clicks on hero-section
    heroSection.addEventListener("click", (event) => {
      const clickedService = event.target.closest(".hero-services");
  
      if (clickedService) {
        const serviceId = clickedService.dataset.id;
        const service = servicesData.find((s) => s.id === serviceId);
  
        if (service) {
          localStorage.setItem("serviceContent", JSON.stringify(service)); // Save service data
          window.location.href = "specificService.html"; // Redirect
        }
      }
    });

    // Handle click events for navigation links
    document.querySelectorAll("[data-page-key]").forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default link behavior

          const key = link.dataset.pageKey; // Get the key for the selected page

          // Save the selected page key to localStorage
          localStorage.setItem("selectedPage", key);

          // Redirect to `info.html` to display the selected content
          window.location.href = "info.html";
      });
  });

  document.querySelectorAll('.hero-services').forEach((tile) => {
    tile.addEventListener('mouseenter', () => tile.classList.add('hover'));
    tile.addEventListener('mouseleave', () => tile.classList.remove('hover'));
});


});
