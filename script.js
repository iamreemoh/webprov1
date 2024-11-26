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
        id: "energy",
        title: "Energieberatung",
        description: "Ob sie nun ein Wohngebäude oder eine Gewerbeimmobilie energetisch sanieren oder errichten möchten, es ist immer besonders wichtig den Blick für das Ganze zu behalten. Verlieren sie sich nicht in Details und Überdifferenzierungen, sondern planen sie einfach und strukturiert, ohne dabei den Blick auf die Folgen der Art der Ausführung außer Acht zu lassen. Schließlich geht es nicht nur um die Umsetzung ihrer Sanierungsmaßnahmen und den Gebäude-Energieausweis. Der Werterhalt ihrer Immobilie ist genauso wichtig. Aus diesem Grund erstellen wir ihnen auch auf Wunsch die Lebenszyklus Analyse LCA. Dabei geht es nicht nur um die Einsparung von Treibhausgasen und den Zugang zu Fördermitteln. Durch diese Bilanzierung erhalten sie einen guten Überblick über die Kosten, die während der Betriebszeit ihres Gebäudes auf sie zu kommen. Das schafft Planungssicherheit für zukünftige Ausgaben und sie sehen gleich von Anfang an, welche Maßnahmen sich günstiger auf ihren Geldbeutel auswirken. Denn sie dürfen niemals vergessen: Wer anfangs billig baut, baut zweimal.",
        captionHeading: "Unser Angebot für sie:",
        captionP1:"Energieberatung für Wohnen & Gewerbe",
        captionP2:"Sanierungsfahrpläne",
        captionP3:"Lebenszyklus Analyse LCA (Treibhausgas Emissionen nach QNG)",
        captionP4:"Erstellung von Energieausweisen",
        images: [
          "/images/HausMuetze1.jpg",
          "/images/sustainable_house1.png",
          "/images/2-8-histogram-blauer-Himmel.png",
          "/images/2-8-spectrum-blauer-Himmel.png",
          "/images/2-9-Farbsegel-Saettigung.png"
        ],
        tabNames: ["Aktuelle Lage", "Energieberatung","DIY Rentabilität","QNG-Siegel","LCA-Bilanzierung","Mythen & Technik"], // Names for tabs
        content: [
          // First tab (landing page content)
          [
              "<h2>Die aktuelle Situation</h2>",
              "<p>Seit der Kürzung der Förderung für Sanierungsfahrpläne im August 2024 ist die Nachfrage nach Energie-Beratungen signifikant zurückgegangen. Betrachtet man jedoch das absolute Verhältnis der Fördersummen von Sanierungen im Vergleich zu den Geldern für Sanierungsfahrpläne, dann ist dieses Verhalten der Bauherren nicht wirklich nachvollziehbar. Genau genommen wurde die Förderung für Sanierungsfahrpläne von 80% auf 50% der maximalen Fördersumme gekürzt. Das entspricht bei Ein- oder Zweifamilienhäusern gerade mal einem Betrag von 390,- €. Bei Häusern ab 3 Wohneinheiten sind es 510,- €, um die der Förderbetrag gekürzt wurde.</p>",
              "<p>Setzt man dagegen eine Dachsanierung in Relation, welche sich sehr schnell in einem Bereich von 50.000,- € bis 70.000,- € bewegen kann, dann fällt die Kürzung der Förderung für den Sanierungsfahrplan im Vergleich zur möglichen Förderung für das Dach kaum noch ins Gewicht. Das ist vor allem interessant, weil das ganze Dach gefördert wird und nicht nur der Anteil, der zur Erhöhung der Wärmedämmung nötig ist. Sie bekommen demnach auch Geld für die Erhaltung ihres Hauses und  nicht nur für die Verbesserung.</p>",
              "<p>Auch der Verzicht auf den Sanierungsfahrplan ist nicht anzuraten. Zum einen halbieren sich in diesem Fall die Obergrenzen der Förderung des Daches, zum anderen haben sie keinen gesicherten Anhaltspunkt, wie sich die Sanierungen tatsächlich auswirken. Ist die Dämmung des Dachs gegenüber der Dämmung der Wand richtig gewählt? Wie gut müssen die Fenster sein? Ohne Sanierungsfahrplan bauen sie sozusagen ins Blaue hinein. Unter dem Reiter Energieberatung finden sie  genauere Ausführungen dazu.</p>",
              "<p>Noch wichtiger als die Förderungen sind die eigentlichen Kosten für die Sanierung, die sich neben der Bauplanung in erster Linie aus Material- und Handwerkerkosten zusammensetzen. Diese sind in den letzten Jahren massiv gestiegen. Alleine in 2023 gab es innerhalb der ersten 4 Monate mehrere Preiserhöhungen für das Baumaterial in Höhe von 20% bis 30%. In den Jahren davor lag diese Rate bei 4% bis 5% für das gesamte Kalenderjahr. Berücksichtigt  man  zusätzlich das aktuell zu beobachtende Sterben von Handwerksbetrieben, dann ist auch mit weiter steigenden Personalkosten zu rechnen. In jedem Fall wird die Preissteigerung für Material und Personal größer sein als die Kosten einer etwas längere Kreditlaufzeit. Es ist also nicht sinnvoll eine benötigte Sanierung zu verzögern.</p>",
              "<p>Besonders kritisch wird die Situation bei Nichtwohngebäuden. Hier gibt es nach EU-Vorgabe eine Sanierungspflicht bis 2030 für die am schlechtesten gedämmten 15% der Immobilien. Alleine für die davon betroffenen öffentlichen Gebäude wurde im Herbst 2024 ein Sanierungsvolumen von 130 Milliarden Euro geschätzt. Für die Gebäude in Gewerbe-Hand dürfte diese Summe noch um einiges höher liegen. Bei diesem enormen gesetzlich vorgeschriebenem Sanierungsbedarf ist mit einer noch höheren Auslastung der Planer und Energie-Effizienz-Experten zu rechnen, als es bisher schon der Fall war. Das bedeutet die Zeit von der Anmeldung bis zum Beratungstermin, die heute bei verschiedenen Büros schon bei 3 Monaten liegt, wird sich nach vorsichtigen Schätzungen verdoppeln.</p>",
              "<p>Aus diesen Gründen rate ich jedem Bauherrn dazu, sich rechtzeitig um den Sanierungsfahrplan zu kümmern. Sie haben nach der Erstellung immer noch 15 Jahre Zeit, bis die Umsetzung abgeschlossen sein muss. Es bleibt ihnen also reichlich Zeit, ganz entspannt ihre Investitionen zu planen und geeignete Handwerksfirmen zur Umsetzung zu finden.</p>",
              "<h2>Bitte beachten sie an dieser Stelle:</h2>",
              "<p>Die Erstellung eines Sanierungsfahrplans verpflichtet sie nicht zu dessen Umsetzung, auch wenn sie für seine Erstellung Fördermittel erhalten haben, aber der Sanierungsfahrplan gibt ihnen Planungssicherheit und ein umfassendes Wissen über den Zustand ihrer Gebäude.</p>"
          ],
          // Second tab
          [
              "<h2>Energieberatung</h2>",
              "<p id='questionanswer'>Was gehört zu einer Energieberatung?</p>",
              "<p>Wie der Name schon sagt, handelt es sich hier um eine Beratung und nicht um eine Anlaufstelle, die nur zur Beantragung von Förderungen und der Erstellung von Energieausweisen dient. Auch wenn die offizielle Bezeichnung mittlerweile Energie-Effizienz-Experte lautet, haben sie es mit jemandem zu tun, dessen Aufgabe es ist ihnen in allen Fragen, die ihr Gebäude betreffen, fachkundig zur Seite zu stehen.</p>",
              "<h2>Die Energieberatung gliedert sich in drei Schritte:</h2>",
              "<p id='questionanswer'>1. Die Betrachtung des Gebäudes in seiner Gesamtheit</p>",
              "<p>Möglicherweise haben sie schon einmal einen Anruf erhalten, bei dem ihnen neue Fenster in einer phantastischen Qualität mit Dreischichtverglasung angeboten worden sind. Wären diese für ihr Haus geeignet gewesen? Oder sie sind in eine Diskussion geraten, bei der sich zwei Hausbesitzer darüber gestritten haben, ob die Schichtdicke der Dämmung 20cm sein muss oder ob nicht auch 16cm genügen. Wer hatte Recht?</p>",
              "<p>Diese Frage kann ihnen niemand allgemeingültig beantworten. Das hängt  tatsächlich von ihrem Gebäude ab. Was tut ein Energie-Effizienz-Experte in diesem Fall? Er lässt sich von ihnen die Pläne geben oder nimmt selbst Maß und bildet ihr gesamtes Gebäude in einem virtuellen Modell nach. Anschließend wird der Wärmedurchgang der Bauteile der wärmedämmenden Hülle berechnet und in das Modell eingefügt. Bei Nichtwohngebäuden kommt  zusätzlich die Definition der unterschiedlichen Bereiche, der sogenannten Zonen dazu.</p>",
              "<p>Das Ergebnis ist eine Abbildung ihres Gebäudes in seiner Gesamtheit. Mit diesem Modell ist es überhaupt erst möglich, die Wirkung neuer Fenster zu ermitteln oder die benötigte Schichtdicke der Dämmung zu berechnen.</p>",
              "<p>Nachdem die Betrachtung der Gebäudehülle abgeschlossen ist, erfolgt die Aufnahme der Anlagentechnik. Dazu gehört alles, was sie benötigen, um den Wärmeverlust durch die Hülle des Gebäudes wieder auszugleichen, kurz gesagt die Heizung. Hier spielt es eine Rolle,  womit sie heizen, wie effektiv ihre Heizung arbeitet und wie viel Strom sie zur Steuerung benötigt. Positiv wirkt es sich dabei aus, wenn sie Sonnenkollektoren auf dem Dach haben, oder vielleicht  schon eine Solaranlage. Bei Nichtwohngebäuden wird zusätzlich der Lichteinfall von außen und bilanziert und berechnet wie viel elektrische Energie für die Beleuchtung notwendig ist um die gesetzlich vorgeschriebene Helligkeit am Arbeitsplatz zu gewährleisten.</p>",
              "<p>Aus diesem Gesamtmodell, nennen wir es die Patientenakte ihres Gebäudes, ermittelt ihr Energie-Effizienz-Experte nun den Primärenergieverbrauch ihres Hauses. Das ist die Energie, die ihrem Gebäude letztenendes zugeführt werden muss, um die Wärmeverluste durch die Hülle auszugleichen. Gleichzeitig ist das auch der Wert, der im Energieausweis ihres Hauses steht.</p>",
              "<p id='questionanswer'>2. Reduzierung und Optimierung des Energieverbrauchs</p>",
              "<p>Geht es darum den Energieverbrauch ihres Gebäudes zu reduzieren, nützt ihnen der Primärenergiewert allerdings wenig. Dafür wird die ganze Patientenakte benötigt und nicht nur das Ergebnis. Schließlich müssen die einzelnen Bauteile auf ihre Wirkung innerhalb der Gebäudehülle überprüft werden. Es macht also keinen Sinn sich im Internet einen billigen Energieausweis ausstellen zu lassen, um Geld zu sparen, und damit zum Energie-Effizienz-Experten ihre Wahl zu gehen. Er muss in diesem Fall die ganze Arbeit noch einmal machen und sie zahlen doppelt.</p>",
              "<p>Mit dem Modell ihres Gebäudes ist es  möglich, verschiedene Szenarien zu simulieren. Dazu gehört zum Beispiel der eingangs erwähnte Austausch der Fenster. Es wird geprüft, wie es sich auswirkt, wenn die neuen Fenster einen extrem geringen Wärmedurchgang haben. Oder ob es nicht doch günstiger ist die Fenster nicht in der höchsten Qualitätsstufe zu kaufen und  stattdessen die Dämmung der Außenwand um 2cm zu verstärken? Und wie weit muss gleichzeitig das Dach  gedämmt werden, damit die an den Fenstern und der Wand eingesparte Energie nicht wieder über das Dach entweicht?</p>",
              "<p>Ihr Energie-Effizienz-Experte wiegt alle diese Werte gegeneinander ab und ermittelt ein günstiges Verhältnis der Bauteile zueinander, bei dem sie eine möglichst hohe Energieeinsparung erzielen bei gleichzeitig geringsten Kosten. Technisch bedeutet das, keines der Bauteile sollte im Verhältnis zu dem Rest der Gebäudehülle für seine Bauteilgruppe zu stark, aber auch nicht zu schwach gedämmt sein.</p>",
              "<p>Wenn die Wärmeverluste der zukünftigen sanierten Gebäudehülle feststehen, wird passend dazu eine sinnvolle Anlagentechnik ermittelt, die ihnen möglichst geringe Heizkosten garantiert. Dazu muss die Heizung aber nicht zwingend ausgetauscht oder erneuert werden. Was genau geschehen soll, entscheiden sie im Beratungsgespräch mit ihrem Energie-Effizienz-Experten.</p>",
              "<p id='red-ribbon'>An dieser Stelle ist dringend anzumerken: Auch nach dem neuen Heizungsgesetz soll eine Heizung nur ausgetauscht werden, wenn sie mit fossilen Brennstoffen betrieben wird, mindestens 30 Jahre alt ist und der Austausch als wirtschaftlich sinnvoll erachtet wird!</p>",
              "<p>Zum Schluss bringt ihr Energie-Effizienz-Experten alle Maßnahmen in eine bautechnisch geeignete Reihenfolge und erstellt ihnen den sogenannten Sanierungsfahrplan. Bei Wohngebäuden wird dieser auch als individueller Sanierungsfahrplan iSFP bezeichnet, bei Gewerbeimmobilien spricht man nur von einem Sanierungsfahrplan. Dieses rechtlich wirksame Dokument erlaubt es ihnen nun für die einzelnen Maßnahmen der Sanierung oder einer Komplettsanierung zum Effizienz-Haus, die entsprechenden Förderungen und Kredite zu beantragen.</p>",
              "<p id='questionanswer'>3. Planung und Umsetzung unter wirtschaftlichen Bedingungen</p>",
              "<p>Natürlich sollte man nicht ins Blaue hinein anfangen zu sanieren. Förderungen und ermäßigte Kredite gibt es in verschiedenen Höhen, je nachdem welche Energie-Effizienz-Stufe ihr Gebäude nach der Sanierung erreicht. Wenn sie die Kosten optimieren wollen, sollten sie darauf achten, dass der berechnete Wert der Primärenergie nicht  genau zwischen  zwei Stufen liegt, sondern noch die nächstniedrigere erreicht. So erhalten sie für einen geringen Einsatz eine höhere Förderung.</p>",
              "<p>Allerdings geht es bei der Wirtschaftlichkeit nicht nur um die aktuellen Baukosten. Mindestens genauso wichtig ist eine Bilanzierung der Nachhaltigkeit. Dazu gehört die mögliche Preisentwicklung auf dem Brennstoffmarkt, die Verschleißanfälligkeit der verbauten Materialien, sowie die Möglichkeiten zukünftiger Ausbauten oder Sanierungen.</p>",
              "<p>Bei allen diesen Themen steht ihnen ihr Energie-Effizienz-Experte im Laufe einer Energieberatung zur Seite und hilft ihnen die richtigen Entscheidungen zu treffen. Er ist ihr persönlicher Berater.</p>",
          ],
          // Third tab
          [
              "<h2>Ist selbst Hand anlegen bei Wohngebäuden rentabel</h2>",
              "<p>Bauen ist immer eine teure Angelegenheit. Vor allem junge Familien brauchen Platz, haben aber oft nicht das Geld, um alle Gewerke von Handwerkern durchführen zu lassen. Das treibt an manchen Stellen ziemlich haarsträubende Stilblüten. Teilweise kommt es vor, dass Bauherren schon nach kurzer Einweisung damit beginnen Wände zu mauern, obwohl sie vorher noch nie eine Wasserwaage in der Hand gehalten haben . Dabei sollte man wissen, dass selbst ein gelernter Maurer eine Zertifizierung benötigt, um überhaupt Ecken mauern zu dürfen.</p>",
              "<p>Um die staatlichen Förderungen und Kredite der KfW zu bekommen muss  man jedoch nachweisen, dass das Gewerk nach allen Regeln der Kunst fachlich richtig ausgeführt wurde. Diese Bestätigungen werden normalerweise nach Abschluss der Arbeiten von den mitwirkenden Handwerksfirmen ausgestellt und von ihrem Energie-Effizienz-Experten gesammelt und eingereicht.</p>",
              "<p>Auch wenn sie selbst Hand anlegen, muss es für die von ihnen durchgeführten Arbeiten eine entsprechende Bescheinigung geben, dass alle Arbeiten fachgerecht ausgeführt wurden. Diese kann ihnen nach dem Gesetz auch ihr Energie-Effizienz-Experte ausstellen, aber das ist blanke Theorie. Niemand außer den speziell von den Herstellern geschulten Fachleuten kann ihnen definitiv sagen wie moderne Materialien fachgerecht verarbeitet werden, auch ihr Energie-Experte nicht. Aus diesem Grund wird er sich davor hüten, ihnen eine derartige Bescheinigung auszustellen.</p>",
              "<p>Was kann man  dann noch tun, um die Kosten etwas zu reduzieren? Im Wesentlichen gibt es zwei  praktikable Möglichkeiten:</p>",
              "<p>Entweder sie vereinbaren mit dem Handwerker ihre Wahl eine Mitarbeit auf dem Bau. Das heißt sie helfen bei den Arbeiten und bekommen von ihm dafür einen Nachlass auf die Endsumme. In diesem Fall kontrolliert der Handwerker ihre Arbeit und bestätigt die fachliche Richtigkeit.</p>",
              "<h2>Oder sie verzichten auf Förderung:</h2>",
              "<p>Wenn die Förderung für einzelne Maßnahmen geringer ist als die Kosten für die Arbeitszeit der Handwerker, kann es sich anbieten diese Arbeiten selbst zu übernehmen und dafür  keine Förderung zu beantragen. Das geht aber nur wenn es sich um eine Sanierung mit Einzelmaßnahmen handelt. Wenn sie Förderung für eine Sanierung zum Effizienzhaus beantragt haben oder neu bauen, bleiben ihnen nur Arbeiten übrig, die nicht der Förderung unterliegen, und für die dementsprechend auch kein Nachweis erforderlich ist.</p>"
          ],
          // Fourth tab
          [
            "<h2>Qualitätssiegel Nachhaltiges Bauen - QNG</h2>",
            "<p id='questionanswer'>Was ist das QNG Siegel?</p>",
            "<p>Das Qualitätssiegel Nachhaltiges Bauen ist ein Werkzeug zur Lenkung der Gebäudeerstellung und -sanierung hin zu einem zukunftsorientierten Immobilienbestand in Deutschland. Vorangetrieben wird dieses Ziel dadurch, dass bereits heute eine große Zahl an Förderprogrammen und Kreditvarianten an die Zertifizierung gebunden ist.</p>",
            "<p>Der Ausgangspunkt für das QNG Siegel ist eine Energie-Effizienz des Gebäudes, wie sie bei einem Neubau gefordert wird. Dazu kommen je nach Nutzung als Wohn- oder Nichtwohngebäude noch weitere Forderungen:</p>",
            "<p></p>",
            "<p id='questionanswer'>Wer darf das QNG Siegel vergeben?</p>",
            "<p>Während die Lebenszyklusanalyse (LCA) von einem dafür zertifizierten Energie-Effizienz-Experten durchgeführt werden kann, darf das QNG Siegel und damit die Überprüfung der nachfolgenden fünf Anforderungen nur von einer der vier in Deutschland zugelassenen Zertifizierungsstellen vergeben werden. Diese sind:</p>",
            "<p></p>",
            "<p>Wichtig  zu wissen ist, dass jede der vier Zertifizierungsstellen eigene Vorgaben für die fünf durch sie zu prüfenden Anforderungen entwickelt hat. Die Siegel der Zertifizierungsstellen sind demnach nicht gleichwertig, auch wenn sie bei der Vergabe von Förderungen und Krediten so behandelt werden.</p>",
            "<p id='questionanswer'>Welche Arten von QNG Siegeln gibt es?</p>",
            "<p>Alle vier Zertifizierungsstellen unterscheiden  zwei verschiedenen Varianten des QNG Siegels, das Siegel Plus und das Siegel Premium. Bei beiden Varianten wird zu jeder Anforderung ein Prozentsatz angegeben, zu dem sie erfüllt werden muss. Dabei liegen die Prozentpunkte beim  QNG Premium Siegel höher.</p>",
            "<p></p>",
            "<p id='questionanswer'>Welche Aufgabe hat der Energie-Effizienz-Experte?</p>",
            "<p>Der Energie-Effizienz-Experte führt die Energieberechnung und die LCA Bilanzierung durch. Daneben verwaltet er alle eingehenden Nachweise und Zertifikate der Bauausführung. Diese Sammlung, sowie die zusätzlich vorgeschriebene Baustellenbegehung bedeutet einen erheblichen Zeitaufwand, der in der Regel auf Stundenbasis in Rechnung gestellt wird.</p>",
            "<p id='questionanswer'>Wie lange ist das QNG Siegel gültig?</p>",
            "<p>Die Gültigkeit eines Siegels erlischt, sobald bauliche Änderungen durchgeführt werden. Bleibt der Bestand wie besiegelt erhalten, so ist das Siegel aber trotzdem nur fünf Jahre gültig!</p>",
         ],
          // Fifth tab
          [
              "<h2>Lebenszyklus Analyse – LCA (Life Cycle Assessment)</h2>",
              "<p>Was ist LCA?</p>",
              "<p>Unter dem Begriff Lebenszyklus-Analyse versteht man einen Paradigmenwechsel in der Gebäudeerrichtung und -sanierung. Während bei der Analyse des Energieverbrauchs nur der laufende Betrieb betrachtet wird, werden für die Berechnung der Nachhaltigkeitsklasse (NH) auch die sogenannten grauen Energien berücksichtigt. Darunter versteht man alle Energien, die für die Erstellung der Bauteile, ihren Ersatz  wegen Verschleiß und ihre Entsorgung benötigt werden.</p>",
              "<p id='questionanswer'>Warum ist die LCA Bilanzierung auch ohne QNG Siegel sinnvoll?</p>",
              "<p>Bei der Beschreibung von Förderungen und Krediten findet sich oft die Bezeichnungen Treibhausgasemissionen nach Vorgaben des QNG Siegels oder klimafreundliches Gebäude. Dahinter verbirgt sich nichts anderes als die LCA Bilanzierung. Es ist also nicht nötig ein QNG Siegel zu beantragen, um  die entsprechende Förderung oder den entsprechenden Kredit zu bekommen. Natürlich gibt es Unterschiede bei der Förderung, aber diese beziehen sich oft nur auf die maximale Höhe des Kredits. An dieser Stelle muss sehr genau abgewogen werden, ob sich der finanzielle Mehraufwand für das QNG Siegel wirklich lohnt.</p>",
              "<p id='questionanswer'>Was wird bei der LCA Bilanzierung berechnet?</p>",
              "<p>Für die Lebenszyklus-Bewertung eines Gebäudes kommen zwei neue Einheiten ins Spiel. Dabei handelt es sich um den Beitrag zum Treibhauseffekt, Global Warming Potential (GWP) und den Anteil nicht-erneuerbarer Primärenergie, Primary Energy Non Renewable Total (PENRT). Gemessen werden diese Werte in:</p>",
              "<p></p>",
              "<p>Etwas irreführend ist die Bezeichnung GWP100. Dieser Wert bezieht sich auf 100 Jahre. Für die LCA Bilanz werden bei einem Gebäude aber tatsächlich nur 50 Jahre betrachtet.</p>",
              "<p id='questionanswer'>Wie hoch dürfen GWP und PENRT werden?</p>",
              "<p>Der zulässige Wert hängt von der Nutzung des Gebäudes ab. Bei Wohngebäuden gelten feste Werte pro Nettoraumfläche und Jahr. Die Grenzwerte bei Nichtwohngebäuden werden erst an Hand der Art der Nutzung und der jeweils dafür benötigten Fläche durch ihren Energie-Effizienz-Experten berechnet.</p>",
              "<p id='questionanswer'>Was ist der Unterschied zu den Treibhausgasemissionen im Energieausweis?</p>",
              "<p>Auch im Energieausweis eines Gebäudes werden Treibhausgasemissionen in kg CO2 Äquivalent / m² und Jahr angegeben. Diese beziehen sich aber nur auf den Energieverlust durch die wärmende Hülle im Betrieb des Gebäudes, sowie den zugeführten Strom für die Erzeugung der Wärmeenergie. Die errechneten Treibhausgasemissionen der LCA Bilanzierung beziehen sich dagegen auf die komplette Erstellung, Verschleiß und Entsorgung des Gebäudes. Dazu gehören auch Innenwände, Gebäudeteile die außerhalb der wärmenden Hülle liegen und sogar Bodenbeläge in den Innenräumen.</p>",
              "<p id='questionanswer'>Wie ist der Verschleiß eines Gebäudes definiert?</p>",
              "<p>Jeder Baustoff, ob im Innen- oder Außenbereich eines Gebäudes unterliegt einer Abnutzung. Diese Lebensdauer wird für jedes Material in gesetzlich vorgegebenen Tabellen  angegeben. Beträgt die Lebensdauer eines Materials zum Beispiel 25 Jahre, so muss der entsprechende GWP Wert im veranschlagten Betrachtungszeitraum von 50 Jahren zweimal eingerechnet werden. Vor allem an dieser Stelle kommt der Aspekt der Nachhaltigkeit zum Tragen.</p>",
              "<p id='questionanswer'>Ein Beispiel für Verschleiß</p>",
              "<p>Wird zum Beispiel ein Teppichboden als Auslegeware mit einem Massivholzparkett verglichen, so ist der GWP-Wert eines Teppichbodens bei einmaliger Verlegung ungefähr doppelt so groß wie beim  Parkett. Die Lebensdauer des Teppichs ist aber 5 mal kleiner. Es werden demnach für 50 Jahre Gebäudebetrieb 5 Teppichböden benötigt. Daraus ergibt sich für den Teppichboden in der LCA Bilanzierung ein annähernd  zehnmal größerer GWP Wert.</p>",
              "<p>Zieht man nun in Betracht, dass die Verlegung von 5 m² Teppich auch nicht billiger ist, als 1 m² Parkett zu verlegen, dann zeigt sich der klare Vorteil des Parketts bei der bilanzierung der Nachhaltigkeit.</p>",
          ],
          // Sixth tab
          [
              "<h2>Mythen und Legenden über Gebäuden und Technik</h2>",
              "<p id='questionanswer'>Mit einer Wärmepumpe löse ich alle meine Heizungs-Probleme</p>",
              "<p>Wärmepumpen sind eine feine Sache. Ihr Prinzip entspricht dem eines Kühlschranks. durch Kompression und Ausdehnung des Kühlmittels wird eine Seite gekühlt, während sich die andere dabei erwärmt. Beim Kühlschrank wird die Innenseite gekühlt und die entstehende Wärme über den Kühler auf der Rückseite abgeführt. Bei einer Wärmepumpe nutzt man dieses Prinzip genau anders herum. Die entstehende Wärme wird zum Heizen ins Haus geleitet, während die Kälte an die umgebende Außenluft abgegeben wird.</p>",
              "<p>Aber genau wie es bei einem Kühlschrank ein Energie-Label gibt, das aussagt wie viel Strom investiert werden muss, um die gewünschte Kühlung zu erreichen, gibt es bei Wärmepumpen den sogenannten C-Wert. Dieser sagt aus, wie groß das Verhältnis der gewonnenen Wärmeenergie zur Energie des benötigten  Stroms ist. Haben sie zum Beispiel eine Wärmepumpe, die der Außenluft Energie entzieht, um damit Wasser zum Heizen zu erwärmen, dann können wir aktuell von einem C-Wert der Größe 3 ausgehen. Das bedeutet, um 300 kWh Wärme zu erhalten, müssen sie 100 kWh Strom investieren. Wenn sie eine Tiefbohrung machen oder Bodenkollektoren vergraben, dann lässt sich der C-Wert noch weiter steigern, aber dafür steigen auch die Baukosten.</p>",
              "<p>Das eigentliche Problem liegt darin, dass der C-Wert nicht konstant ist. Je größer die Vorlauftemperatur in der Heizungsverteilung sein muss, desto geringer wird dieser Wert. Das bedeutet, wenn sie alte Heizkörper haben, die eine hohe Vorlauftemperatur erfordern, wird die Effektivität ihrer Wärmepumpe immer geringer, bis sie zum Schluss fast ausschließlich mit Strom heizen.</p>",
              "<p>Sie benötigen zu ihrer neuen Wärmepumpe demnach in den meisten Fällen auch neue Heizkörper. Die optimale Variante wären Flächenheizkörper in den Bauteilen oder eine Fußbodenheizung. Hier wird die geringste Vorlauftemperatur benötigt und damit erreichen sie auch die höchste Effektivität ihrer Wärmepumpe. Aber diese Umstellung erhöht auch die Kosten.</p>",
              "<p id='questionanswer'>Unter der Wärmedämmung einer Hauswand bildet sich Schimmel</p>",
              "<p>Diese Geschichten gehen überall um und treffen auch genauso häufig auf empfängnisbereite Verschwörungstheoretiker, die sie gerne weiter erzählen. Was steckt also dahinter?</p>",
              "<p>Luft kann umso mehr Flüssigkeit halten, je wärmer sie ist. Kühlt die Luft ab, dann verliert sie ihre Tragfähigkeit und das Wasser fällt in Form von Tropfen aus. Das ist kurz gesagt die Entstehung von Regen.</p>",
              "<p>Der gleiche Vorgang der Kondensation kann auch innerhalb der Hauswand auftreten. Da der Innenraum in der kalten Jahreszeit wärmer ist als die Außenluft, kommt es zu einem Temperaturgefälle innerhalb der Wand. Dringt Feuchtigkeit von innen nach außen,  dann besteht die Möglichkeit, dass sie so weit abkühlt, bis Kondenswasser ausfällt. Bildlich gesprochen regnet es in der Wand. Dieser Vorgang erfolgt vorzugsweise an Übergängen zwischen stark unterschiedlichen Materialien wie zum Beispiel Stein, Putz und Polystyrol, also im besagten Fall direkt an der Wärmedämmung.  Ein deratiger Tauwassereintrag begünstigt natürlich die Schimmelbildung.</p>",
              "<p></p>",
              "<p></p>",
              "<p>Betrachtet man jedoch die Simulation einer 24 cm dicken Außenwand aus Hohllochziegeln, mit einer Dämmung aus nur 4 cm starkem Polystyrol, wie sie zu Beginn der Wärmedämmung in den 70-er Jahren verwendet wurde, dann zeigt sich selbst hier kein Kondenswasserausfall. Auf der Außenseite steigt die Feuchtigkeit an, erreicht aber niemals den Taupunkt, also 100 %.</p>",
              "<p>In der zweiten Simulation, bei der die Dämmstoffdicke auf 16 cm erhöht wurde, wie es heute üblich ist, liegt die Kurve der relativen Luftfeuchtigkeit noch einmal tiefer. Es gibt also keine Möglichkeit, dass sich Kondenswasser zwischen Mauerwerk und Dämmung bilden kann.</p>",
              "<p>Kurz gesagt, alle Geschichten über Schimmelbildung zwischen Hauswand und Wärmedämmsystem müssen andere Ursachen haben. Möglicherweise wurde der Dachüberstand nicht der neuen Wandstärke angepasst oder es lagen andere Verarbeitungsfehler vor, die zu Regenwassereintrag geführt haben. Auf diese Weise kann es dann zur Hinterfeuchtung der Dämmung und zur Schimmelbildung gekommen sein.</p>",
              "<p id='questionanswer'>Wenn neue Fenster eingebaut werden schimmelt es im Zimmer</p>",
              "<p>Diese Aussage ist nur bedingt richtig. Durch den Einbau der neuen Fester verändert sich der Luftstrom, der bisher durch überalterte oder kaputte Dichtungen eindringen konnte. Besonders massiv ist dieser Effekt zu spüren, wenn noch alte Fenster ohne Dichtungslippen aus den 60-er Jahren vorhanden sind.</p>",
              "<p>Jeder Bewohner erhöht durch seinen Atem die Luftfeuchtigkeit im Raum. Durch aktives Lüften und den Luftstrom, der durch kaputte oder nicht vorhandene Dichtungen entsteht, wird die Raumluft ausgetauscht. So reduziert sich vor allem in der kalten Jahreszeit die Luftfeuchtigkeit im Gebäude. Werden nun neue Fenster eingesetzt, dann sind alle Dichtungen wieder intakt und der passive Luftstrom wird annähernd zu null. Das bedeutet, die Luftfeuchtigkeit steigt immer weiter an, bis es zur Kondensation an kalten Oberflächen wie zum Beispiel den Zimmerecken kommt. Die Folge ist Schimmelbildung.</p>",
              "<p>Der Auslöser der Schimmelbildung ist also die Erhöhung der Luftfeuchtigkeit, weil die passive Lüftung entfällt. Ändern die Bewohner mit dem Einbau der neuen Fenster auch ihr aktives Lüftungsverhalten, dann kann die Luftfeuchtigkeit auch auf diese Weise  reduziert werden.</p>",
              "<p>Häufig begegnet man auch der Aussage, dass mit dem Einbau der neuen Fenster auch unbedingt die Wand gedämmt werden muss, damit die Schimmelbildung unterbunden wird. Was steckt dahinter?</p>",
              "<p>Durch die Außendämmung erhöht sich auch die Oberflächentemperatur an der Innenseite der Wände. Aus diesem Grund muss die Luftfeuchtigkeit im Raum viel höher werden, damit es noch zur Kondensation in den Zimmerecken kommen kann. Das eigentliche Problem, die zu hohe Luftfeuchtigkeit, wird dadurch aber nicht behoben.</p>",
              "<p>In manchen Fällen sind sogar schon negative Effekte aufgetreten, wenn Hausbesitzer sich durch die neue Wärmedämmung zu sicher gefühlt haben. Ein beliebtes Vorgehen ist es zum Beispiel eine eingebaute Loggia bei der Dämmung des Gebäudes in die wärmedämmenden Hülle zu integrieren. Man schließt den Raum zwischen der Außenplatte und der Decke einfach mit Fenstern ab und über dämmt die Außenplatte genauso wie die restliche Wand. Das Problem ist nur, dass die ehemalig Loggia als abgeschlossener Bereich an der Außenseite liegt und nicht beheizt wird. Damit entsteht eine kühlere Zone in der es nicht selten zu schimmeln beginnt.</p>",
              "<p id='questionanswer'>Eine Lüftung mit Wärmerückgewinnung ist teuer und rechnet sich nicht</p>",
              "<p>Wie groß der Aufwand ist, eine Lüftung mit Wärmerückgewinnung in ein bestehendes Gebäude einzubauen, hängt natürlich sehr von der Geometrie des Gebäudes ab. Wenn für eine zentrale Lüftung Rohrleitungen durch alle Räume gezogen werden müssen, dann ist das sicher ein gewisser Aufwand, aber durch geschickte Planung lässt sich dieser vor allem in Altbau-Wohnungen mit hohen Decken stark  reduzieren. Außerdem gibt es nicht nur zentrale Lüftungssysteme. Mittlerweile wurden die Einzelraum-Lüfter sehr vorteilhaft weiter entwickelt. Um diese einzubauen muss nur ein Loch in die Wand gebohrt und eine Stromleitung gelegt werden.</p>",
              "<p>Welchen Zugewinn erreicht nun die Wärmerückgewinnung? Moderne Systeme sind in der Lage bis zu 90 % der Wärme der Abluft an die Zuluft zu übertragen. Das bedeutet, dass 90 % der Heizenergie, die sie normalerweise durch die regelmäßige Lüftung verlieren würden erhalten bleiben. Das ist eine erhebliche Menge, vor allem wenn sie  wegen sehr gut abgedichteten Fenstern häufig lüften müssen.</p>",
              "<p>Welchen Effekt hat die automatische Lüftung auf den Wohnkomfort? Jeder kennt das angenehme Gefühl, wenn durch die Fensterlüftung frische Luft ins Zimmer strömt. Dieses Gefühl entsteht aber nicht in erster Linie, weil die frische Luft so gut ist, sondern weil die Raumluft so verbraucht war. Mit einer automatischen Lüftung kommt es erst gar nicht zu abgestandener Raumluft. Die permanente Ventilation sorgt immer für ein gutes Raumklima. Das ist besonders wichtig, wenn sie gerne bei geschlossenem Fenster schlafen, oder wegen zu großem Straßenlärm mit geschlossenem Fenster schlafen müssen. Durch die automatische Lüftung wird die Luft im Schlafzimmer am Morgen genauso gut sein wie am Abend zuvor.</p>",
              "<p id='questionanswer'>Mein Handwerker sagt: „das bringt nichts“</p>",
              "<p>Natürlich haben Handwerker oft eine große Berufserfahrung, aber in vielen Fällen kann ihnen sogar ihr Energie-Effizienz-Experte nicht genau sagen, in welche Richtung das Ergebnis der Berechnungen tendieren wird. Nicht selten gibt es große Überraschungen, weil ein weniger beachtetes Wärme-Leck wie eine schlecht gedämmte Bodenplatte oder eine Wand, die nur von innen gedämmt werden kann, ein großes Loch in die Energiebilanz reißt. Erst wenn der Energieverbrauch mit allen Parametern über den gesamten Jahresverlauf simuliert wurde, ist ein wirklich verlässliches Ergebnis zu erwarten.</p>",
              "<p>Das Heizungsgesetz zwingt mich eine neue Heizung zu kaufen!</p>",
              "<p id='questionanswer'>Diese Aussage ist in den meisten Fällen grober Unfug. Der Heizkessel muss nur ersetzt werden wenn er 30 Jahre und älter ist und dazu alle folgenden Aussagen erfüllt sind:</p>",
              "<p></p>",
              "<p>Alleine die erste Aussage schließt schon viele Immobilien aus. Wenn sie zum Beispiel ein Einfamilienhaus besitzen, das sie selbst bewohnen, und bereits vor dem 01.02.2002 der Eigentümer waren, sind sie schon aus dem Rennen. Es sei denn ihr Kaminkehrer sagt ihnen, dass die Anlage zu viele Schadstoffe ausstößt - aber das ist eine andere Geschichte.</p>",
              "<p>Gleichzeitig muss der Kessel mit fossilen Brennstoffen beheizt werden, ein veraltete Konstant-Temperatur-Kessel sein und im Bereich zwischen 4 kW und 400 kW liegen.</p>",
              "<p>Aber selbst wenn alle   vier technischen Aussagen erfüllt sind, muss der Austausch wirtschaftlich vertretbar sein. Was bedeutet das in der Praxis?</p>",
              "<p>Die Sanierungskosten, die sie für die neue Heizung aufwenden, müssen sich innerhalb einer gewissen Dauer wieder durch Einsparungen, welche die neue Technik mit sich bringt, amortisieren! In allen anderen Fällen ist der Austausch nicht wirtschaftlich.</p>",
          ]
      ]
      },
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
          "/images/3-1-Gluehlampe-histogram.png",
          "/images/3-1-Gluehlampe-spectrum.png",
          "/images/3-2-Leuchtstoff-histogram.png",
          "/images/3-2-Leuchtstoff-spectrum.png",
          "/images/3-3-LED-1-kalt-spectrum.png",
          "/images/3-4-LED-2-kalt-spectrum.png",
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
              
              "<img src='/images/2-3-die Augenkurve-final.svg' alt='landscape' />",
              
              "<p id='questionanswer'>Welches Spektrum sollte eine gute Beleuchtung haben?</p>",
              "<p>Die ideale Beleuchtung sollte über das gesamte sichtbare Spektrum eine gleichmäßige Strahlungsstärke  haben. Dieses Ziel ist  jedoch nur schwer bis gar nicht zu erreichen. Selbst das Lichtspektrum der Sonne an einem Sommernachmittag, wie  im Bild unten dargestellt , weist Schwankungen auf. Trotzdem wird die Intensität der normierten Referenzfarben in der Graphik rechts nie kleiner als 99.</p>",
              
              "<img src='/images/2-8-spectrum-blauer-Himmel.png' alt='square' />",
              "<img src='/images/2-8-histogram-blauer-Himmel.png' alt='square' />",

              "<p>Wenn man von einer guten Beleuchtung spricht, sollten ihr Spektrum zumindest ansatzweise diese Konstanz erreichen. Das ist natürlich in erster Linie eine Frage der Kosten. Dennoch kann sich diese Investition im gewerblichen Umfeld schnell rentieren, wenn dadurch Produktionsprozesse schneller und in höherer Qualität durchgeführt werden können.</p>",
              "<p id='questionanswer'>Was ist die Lichttemperatur?</p>",
              // "<h2>Was ist die Lichttemperatur?</h2>",
              "<p>Die Lichttemperatur ist eine physikalische Vergleichsgröße. Sie bezieht sich auf einen theoretischen, tief schwarzen Körper der keinerlei Umgebungslicht reflektieren kann. Wenn man diesen Körper erhitzt bis er glüht, dann   strahlt er durch sein Glühen wieder Licht ab und die Temperatur des Lichts entspricht genau der Temperatur des erhitzten Körpers. Wird dieser Körper z.B. auf eine Temperatur von 4000 Kelvin erhitzt, dann hat das Licht, das durch das Glühen entsteht dementsprechend einer Lichttemperatur von 4000 Kelvin.</p>",
              "<p>Auf dem abgebildeten Farbsegel, in dem alle Spektralfarben enthalten sind, verläuft  eine gebogene Linie über die jenigen Farben, die durch die Erhitzung dieses schwarzen Strahlers erzeugt werden können. Die angegebenen Temperaturen zeigen, welche Farben bei welchen Temperaturen abgestrahlt werden. Auch wenn das Licht bei niedrigeren Temperaturen rötlich wird und bei höheren Temperaturen bläulich, spricht man hier allgemein von weißem Licht.</p>",
              
              "<img src='/images/3-5-LED-1-warm-neutral-Farbsegel.png' alt='square' />",

              "<p id='questionanswer'>Was ist der Farbwiedergabeindex?</p>",
              "<p>Der Farbwiedergabe Index ist ein Mittelwert, der die Qualität des Lichtspektrums beschreiben soll. Es gibt zwei verschiedene Spezifikationen. Die ältere wird mit Ra bezeichnet und stammt aus der Zeit zu Anfang des 20. Jahrhunderts. Bei  der Messung zur Ermittlung von R werden nur 8 Referenzfarben (R1 bis R8) berücksichtigt. Das war zu dieser Zeit vollkommen ausreichend, weil es noch keine Leuchtstoffe gab, welche die individuelle Formung des Spektrums zuließen. Oder anders ausgedrückt:  Die Form des Spektrums zweier Glühlampe unterscheidet sich nur wenig , daher genügen auch wenige Stützstellen um die Kurve des Spektrums nachvollziehen zu können.</p>",
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

              "<p>Das Balkendiagramm auf der rechten Seite liefert die Erklärung , warum diese Art der Beleuchtung immer noch  so beliebt ist. Die Leuchtstoffe wurden so gewählt, dass die ersten acht Referenzfarben gute Werte haben. Dadurch steigt der Farbwiedergabe Index Ra auf 88, während der Vergleich mit dem erweiterten Farbwiedergabeindex Re mit einem Wert von 83 die Wahrheit über diese schlechte Beleuchtung enthüllt.</p>",
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
              "<p>Moderne Leuchtmittel und Leuchten werden in LED Technik ausgeführt. Bei einer weiß-leuchtenden LED handelt es sich im Kern um eine blaue LED oder eine violette LED. Eine Beschichtung über der LED, das sogenannte Phosphor-Coating,enthält verschiedene Leuchtstoffe, die durch dieses blaue oder violette Licht angeregt werden und alle anderen Farbanteile des Lichtspektrums erzeugen.</p>",
              "<p>Die meisten auf dem Markt befindlichen LEDs bestehen im Kern noch aus einer blauen LED. In diesem Fall wird das blaue Licht direkt genutzt, während  die restlichen Farbanteile durch die Leuchtmittel erzeugt werden. Aus physikalischen Gründen ergibt sich auf dieses Weise eine Lücke zwischen blau und grün, die nicht ausgeglichen werden kann. Damit das Licht trotzdem weiß ist, muss demnach in der Produktion der rote Bereich reduziert werden. Diese LEDs haben also nicht nur eine Türkis-Schwäche, sondern auch eine Rot-Schwäche.</p>",
              "<p>Bei den neuen Vollspektrum-LEDs ist das nicht mehr der Fall. Sie werden von kaum sichtbarem violettem UV-Licht angeregt. Das bedeutet: Alle sichtbaren Farbanteile entstehen nur noch durch Leuchtstoffe. Auf diese Weise gibt es keine Türkis-Schwäche mehr und die roten Spektralanteile müssen auch nicht mehr reduziert werden. Es entsteht ein nahezu perfektes Lichtspektrum.</p>",
              "<p id='questionanswer'>Warum werden nicht alle LEDs mit UV-Licht angeregt?</p>",
              "<p>Die Herstellung einer UV-LED ist heute immer noch wesentlich schwieriger als die Herstellung einer blauen LED. Das schlägt sich dementsprechend auch im Preis nieder. Alleine die LEDs, nicht die restlichen Komponenten des Leuchtmittels, sind um den Faktor 3 bis 4 teurer. Dazu kommt, dass moderne weiße LEDs, die im Kern mit blauem Licht betrieben werden, auch heute schon beachtlich gute Lichtspektren vorweisen können. Kurz gesagt haben es die Vollspektrum-LEDs schwer sich durchzusetzen. Dennoch sind sie verfügbar und in kritischen Bereichen durchaus  die bessere Wahl.</p>",
              "<p id='questionanswer'>Das warmweiße LED-Spektrum (bis 3300 K)</p>",
              "<p>In den  beiden Diagrammen unten sind links eine konventionelle warmweiße LED und rechts eine Vollspektrum-LED dargestellt. Bei der konventionellen LED ist noch der starke blaue Anteil und die Lücke zwischen blau und grün zu sehen, während die Vollspektrum-LED hier bereits einen sehr homogenen Abfall der Kurve aufweist. Trotzdem ist der Unterschied auf den ersten Blick sehr gering. Erst die Werte des Farbwiedergabeindexes zeigen  die Wahrheit:</p>",
              
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
              "<p>Deutlicher wird  der Unterschied zwischen der konventionellen Technik und der Vollspektrum-Technik bei  neutral weißen LEDs. Während das - Spektrum der konventionellen LED links immer noch die Lücke zwischen blau und grün aufweist und damit technisch nicht ohne Rot-Schwäche auskommt, fällt im Diagramm der Vollspektrum-LED rechts das Licht in Richtung blau wieder gleichmäßig ab. Das zeigt sich auch im Farbwiedergabeindex:</p>",
              
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>Leuchtmittel</th>
                    <th>Konventionelle LED</th>
                    <th>Vollspektrum LED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Farbwiedergabeindex R<sub>a</sub></td>
                    <td>89</td>
                    <td>97</td>
                  </tr>
                  <tr>
                    <td>Farbwiedergabeindex R<sub>e</sub></td>
                    <td>84</td>
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
                    <th>Konventionelle LED</th>
                    <th>Vollspektrum LED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Farbwiedergabeindex R<sub>a</sub></td>
                    <td>85</td>
                    <td>95</td>
                  </tr>
                  <tr>
                    <td>Farbwiedergabeindex R<sub>e</sub></td>
                    <td>79</td>
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
            "<p>Die Spektrum -Synthese bietet in diesem Fall eine kostengünstige Abhilfe. Vergleicht man zum Beispiel die Spektren der konventionellen warm weißen  und kalt weißen LED, dann fällt auf, dass die warm weiße LED ihr spektrales Maximum bei 620 nm hat, während das Spektrum der kalt weißen LED an diesem Punkt schon wieder abfällt. Kombiniert man diese beiden Leuchtmittel in einer Lampe, dann überlagern sich  ihre Spektren. Die Kunst dabei ist es die Leuchtmittel nach Farbtemperatur und Hersteller so zu kombinieren, dass ein wesentlich besseres Spektrum entsteht.</p>",
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
            "<p>Wie sieht es dagegen bei der LED-Röhre aus? Hier gehen die Reflexionsverluste gegen Null. Die Röhre strahlt nur in eine Richtung und ohne Optik ist der Öffnungswinkel der LEDs ungefähr 120o Grad. Das bedeutet, die Randbereiche des abgestrahlten Lichtstroms berühren je nach Bauart noch die Ränder des Lampengehäuses. Aber mehr passiert nicht. Die abgestrahlte Lichtleistung liegt demnach annähernd bei 3700 Lumen.</p>",
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
            
            "<img src='/images/6-1-Netzspannungs-Sinus.svg' alt='square' />",
            "<img src='/images/6-2-Restwelligkeit.svg' alt='square' />",

            "<p>Die Polarität bleibt immer gleich und die Spannung schwankt nur noch in begrenztem Rahmen. Das nennt man die Restwelligkeit. Die Höhe dieser Restwelligkeit entscheidet nun darüber ob die daraus resultierende Helligkeitsänderung der angeschlossenen Beleuchtung für  das menschliche  Auge noch sichtbar ist oder nicht.</p>",
            "<p>Aber auch wenn ein richtiges Netzteil verwendet wird, kommt es zum Lichtflicker, denn keine Regelung ist perfekt. Bei qualitativ hochwertigen Geräten gibt es gewöhnlich keine Probleme, so lange sie nicht überaltert sind. Bei billiger Ware kann der Lichtflicker aber auch die zulässigen Grenzwerte überschreiten.</p>",
            "<p id='questionanswer'>Was sind die Auswirkungen von Lichtflicker?</p>",
            "<p>Die Auswirkungen des Lichtflickers sind vielfältig. Sie können von nicht bewusst wahrnehmbaren Wirkungen bis zu epileptischen Anfällen bei empfindlichen Personen führen. In der Graphik unten ist das dargestellt. Je größer die Flicker-Frequenz ist, desto geringer ist der Einfluss auf den Menschen. Irgendwann ist  die Signalgeschwindigkeit der Nerven überschritten und sie können den Wechsel nicht mehr übermitteln.</p>",
            "<p>In der Graphik sind zwei Kurven dargestellt. Links bei den niedrigen Frequenzen befindet sich die Kurve Pst = 1. Sie beschreibt, in welchem Bereich bei statischer Betrachtung einer Lichtquelle mit einem erhöhten Risiko für einen Anfall gerechnet werden muss. Die rechte Kurve SVM = 1 zeigt den Bereich, in dem der sogenannte Stroboskop Effekt auftreten kann. Das bedeutet der Flicker ist bei einer relativen Bewegung des Beobachters zur Lichtquelle  wahrnehmbar. In diesem Bereich ist aber nicht mehr mit gesundheitlichen Folgen zu rechnen. Es kann höchstens noch zu Unwohlsein oder vorzeitiger Ermüdung kommen. In jedem Fall ist es sinnvoll immer unter den Kurven zu bleiben, das heißt im gelb oder grün hinterlegten Bereich.</p>",
            
            "<img src='/images/6-6-Bewertung.png' alt='square' />",

            "<p id='questionanswer'>Was ist bei der Dimmung von Lampen zu beachten?</p>",
            "<p>Beleuchtungen werden oft gedimmt, in dem man sie mit hoher Geschwindigkeit periodisch ein- und ausschaltet. So lange dabei die Frequenz von 1250 Hz nicht unterschritten wird (Ende der Kurve SVM = 1) wird das niemand bemerken und es ist auch nicht mit Schädigungen zu rechnen. Aber es gibt auch Dimmer, die wesentlich langsamer arbeiten. Teilweise sind Geräte im Umlauf, die nur eine Schaltfrequenz von 100 Hz haben. Bei statischer Betrachtung wird das nicht auffallen, aber so bald eine Bewegung relativ zur Beleuchtung stattfindet liegt der Fall anders.</p>",
            "<p>Warum sind solche Lichtdimmer im Umlauf, obwohl aus der Graphik klar hervor geht, dass ein Flicker Wert von 100 % bei 100 Hz unzulässig ist? Die Antwort ist genauso einfach wie unverständlich. Hier gibt es eine Gesetzeslücke. Die Grenzwerte des Flickers gelten nur für den Betrieb bei voller Lichtleistung, nicht aber für die gedimmte Beleuchtung.</p>"
          ]
      ]
      }
    ];
  
    // 2. Navigation Bar Handling
    const pageData = {
      about: {
        title: "Über mich",
        content: [
          "<p>Geboren wurde ich in den sechziger Jahren des letzten Jahrhunderts. Nach meiner Schulzeit und Ausbildung zum Feingeräteelektroniker, begab ich mich auf den steinigen zweiten Bildungsweg, um die fachgebundene Hochschulreife zu erlangen und schließlich konnte ich 1990 das ersehnte Studium der Elektrotechnik an der Friedrich-Alexander-Universität in Erlangen beginnen.</p>",
          "<p>Mein Interesse auf allen Gebieten war so groß, dass ich mich für das freie Fachstudium entschied. Im Laufe meines Hauptstudiums prägte sich bei mir eine Vorliebe für alle Bereiche der Hochfrequenztechnik heraus, deswegen belegte ich neben den zentralen Vorlesungen auch The­men wie integrierte Mikrowellenschaltungen, Lasertechnik und Elektromagnetische Umweltdia­gnostik.</p>",
          "<p>Das Betätigungsfeld während meiner beruflichen Laufbahn war sehr weitläufig. Bereits während meiner Diplomarbeit beschäftigte ich mich mit dem damals erst aufkommenden Gebiet der schnellen Analog-Digital-Umsetzung zur Zwischenfrequenz Abtastung. Dazu kam die Speicherung der Daten auf selbst entwickelten ISA Karten und die Entwicklung von Empfängerschaltungen für die Aufnahme der hochfrequenten Signale. In der logischen Folge, umfassten meine ersten Projekte als junger Ingenieur, die dazu gehörende digitale Signalverarbeitung mit Arrithmetik-Prozessoren, CPLDs und FPGAs, bis hin zur Ausgabe der Signale über Digital-Analog-Umsetzer und Sendeendstufen.</p>",
          "<p>Der räumlich nahe Betrieb der HF-Stufen und Umsetzer zur den digitalen Komponenten führte mich automatisch zu dem Gebiet der Elektromagnetischen Verträglichkeit auf Leiterplatten. Dieses Wissen kam mir später bei der Entwicklung von Miniatursen­dern für die Ortungstechnik zu gute. Hier lag das größte Problem darin, die Störeinwirkung auch auf kleinstem Raum zu unterbinden.</p>",
          "<p>Flankiert wurde meine Arbeit an den Sendern vor allem von Themen der Aufbautechnik. Ich begann mich mit Herstellungsverfahren für industrielle und kommerzielle Miniaturschaltungen zu beschäftigen und entwickelte Baugruppen mit Chip-On-Bord Technik, welche gleichzeitig eine hohe mechanischer Impulsstabilität bieten musste. Die Entwicklung von Ortungssendern war lange Zeit mein ständiger Begleiter. Zwischen diesen Projekten gab es weitreichende andere Themen. Angefangen bei der schnellen Digitaltechnik mit LVPECL und CML Schaltungen zur Impulserzeugung, über die Entwicklung von Prüfgeräten für die Fertigung von Baugruppen, bis hin zu Industriegehäusen in 19 Zoll Technik und der damals ge­rade beginnenden Beleuchtungstechnik mit LEDs, war ich überall zuhause. Licht und Lichtspektren hatten schon seit meiner Zeit an der Universität eine faszinierende Wirkung auf mich. Dies war auch der Grund für mein In­teresse an LASER Systemen gewesen.</p>",
          "<p>Heute ist die LED Beleuchtungstechnik ein fester Bestandteil meines Angebots. Dabei kann ich von einzelnen Strahlern, mit ihren komplexen, spektralen und thermischen Problemen, bis auf ganze Systeme zurück blicken.</p>",
          "<p>Als Folge meiner Kenntnis über mechanische Belastungen verließ ich zeitweise den Bereich der Schaltungstechnik und beschäftigte mich mit mechanischen Themen, wie der Entwicklung elastischer Spulen auf Gummi und Silikon Trägern. Die große Herausforderung bei diesem Projekt bestand darin, eine Technologie zu finden die es ermöglichte, diese Komponenten kostengünstig, in der geforderten mechanischen Qualität und Bautoleranz herzustellen.</p>",
          "<p>In den folgenden Jahren kam ich zurück zur Schaltungstechnik und zur Entwicklung von Miniatursendern, sowie der zugehörigen Infrastruktur mit all ihrer Vernetzung. Diese Arbeit erlaubte mir auch den Kreis zu meinem Studium zu schließen und mich wieder mit Fasertechnik und der Modulation von LASERN zu beschäftigen. Mein Interesse lag immer in der großen Vielfalt der Technologien und in der Herausforderung diszi­plinübergreifend Lösungen suchen zu müssen. Anders ausgedrückt könnte man sagen, je dünner die Luft wurde, desto mehr reizte mich die Aufgabe. So kam es, dass ich meine gesamte berufliche Laufbahn fast ausschließlich der Forschung und Entwicklung widmete.</p>",
          "<p>Neben dieser Tätigkeit unterrichtete ich 5 Jahre lang nebenberuflich als Dozent an der Technikerschule und beschäftige mich seit über 15 Jahre mit Themen der Psychologie und Gruppenbildung. Natürlich kam in der Forschung die Betreuung junger Studenten und Studentinnen nie zu kurz. Eine Arbeit, die mir immer viel Freude machte. Ich bildete sie während ihrer Zeit als Hilfswissenschaftler aus und begleitete sie während ihrer Gradierungsarbeiten, bis zu ihrem Abschluss. In der Rückschau kann ich sagen, nie habe ich die Lust verloren dem Neuen zu begegnen und mich auf eine weitere spannende Aufgabe einzulassen. Der freie Geist war mein ständiger Ratgeber, das Interesse an neuen Gebieten und die Respektlosigkeit vor der Herausforderung mein Antrieb.</p>",
          "<p>Bleiben wir doch einfach frei, dann werden wir in der Zukunft jede Herausforderung meistern.</p>",
          "<p>Reiner Retkowski</p>",
          "<p></p>",
          "<p></p>",
          "<p></p>"
        ],
        aboutSlider: { // Renamed "slider" to "aboutSlider"
            aboutSlides: [ // Renamed "slides" to "aboutSlides"
                {
                    id: "uberSlide",
                    title: "Über mich",
                    image: "/iconsThumbs/bild-preisverleihung-cut.jpg" , // Replace with actual image path
                    paragraphs: [
                        "Ich arbeite seit vielen Jahren in der Forschung und Entwicklung, besonders im Bereich der Hochfrequenztechnik und Ortungstechnik. Meine Arbeit umfasst unter anderem die Entwicklung von Ortungssystemen, die in Echtzeit die Position von Objekten und Spielern verfolgen. Besonders in der Sportindustrie, wie zum Beispiel der NHL, finden meine Lösungen Anwendung.",
                        "Mit meiner Expertise in der Miniaturisierung von Elektroniksystemen und der Entwicklung robuster, kostengünstiger Geräte habe ich maßgeblich zur Entwicklung neuer Technologien beigetragen. Ich freue mich, in Zukunft weitere innovative Projekte zu begleiten und umzusetzen."
                    ]
                },
                {
                    id: "careerSlide",
                    title: "Berufliche Laufbahn",
                    image: "/iconsThumbs/reiner-retkowski.256x256.jpg", // Replace with actual image path
                    paragraphs: [
                        "Seit 2003 leite ich mein eigenes Ingenieurbüro, das sich auf Energieeffizienz und Schaltungstechnik spezialisiert hat. Während meiner Zeit bei Fraunhofer war ich an der Entwicklung von Hochfrequenztechnologien beteiligt. Diese Erfahrungen setze ich nun erfolgreich in der Entwicklung von LED-Beleuchtungssystemen und Ortungstechnik um.",
                        "Ich freue mich, meine Expertise in neuen und innovativen Projekten einzubringen und meine Leidenschaft für Technologie und Forschung weiter auszuleben."
                    ]
                },
                {
                    id: "ledSlide",
                    title: "LED-Beleuchtung und Forschung",
                    image: "path/to/led-beleuchtung.jpg", // Replace with actual image path
                    paragraphs: [
                        "Durch meine umfassenden Kenntnisse in der Elektronik und Beleuchtungstechnik biete ich maßgeschneiderte Lösungen für die Entwicklung von LED-Systemen an. Besonders interessant finde ich die Herausforderungen, die die Miniaturisierung und thermische Problematik von LEDs mit sich bringen. Meine Lösungen bieten dabei nicht nur eine hohe Effizienz, sondern auch eine lange Lebensdauer und eine stabile Leistung."
                    ]
                }
                ]
            }
        },
  kontak: {
      title: "Kontakt",
      content: [
          "<p>Hier sind meine Kontaktdaten...</p>"
      ]
      },
      contact: {
        title: "Kontakt",
        content: [
            "<div class='form-card'><h3>Kontaktformular</h3><p>Möchten Sie mit uns Kontakt aufnehmen, senden Sie uns eine Nachricht:</p>",
            "<form id='form'>",
            "<div class='form-group'><label for='salutation'>Anrede:</label><select id='salutation' name='salutation'><option value='Herr'>Herr</option><option value='Frau'>Frau</option></select></div>",
            "<div class='form-group'><label for='firstName'>Vorname:</label><input type='text' name='firstName' id='firstName' placeholder='Ihr Vorname'></div>",
            "<div class='form-group'><label for='lastName'>Nachname:</label><input type='text' name='lastName' id='lastName' placeholder='Ihr Nachname'></div>",
            "<div class='form-group'><label for='email'>E-Mail:</label><input type='email' name='email' id='email' placeholder='Ihre E-Mail'></div>",
            "<div class='form-group'><label>Ich möchte mehr erfahren über:</label><br>" +
            "<input type='checkbox' id='schaltungsdesign' name='interest[]' value='Schaltungsdesign'><label for='schaltungsdesign'>Schaltungsdesign</label><br>" +
            "<input type='checkbox' id='systementwicklung' name='interest[]' value='Systementwicklung'><label for='systementwicklung'>Systementwicklung</label><br>" +
            "<input type='checkbox' id='beleuchtungstechnik' name='interest[]' value='Beleuchtungstechnik'><label for='beleuchtungstechnik'>Beleuchtungstechnik</label><br>" +
            "<input type='checkbox' id='coaching' name='interest[]' value='Coaching'><label for='coaching'>Coaching</label><br>" +
            "<input type='checkbox' id='schulung' name='interest[]' value='Schulung'><label for='schulung'>Schulung</label></div>",
            "<div class='form-group'><label for='dataConsent'>Datenschutz Zustimmung:</label><select id='dataConsent' name='dataConsent'><option value='Nicht einverstanden'>Nicht einverstanden</option><option value='Ich stimme zu'>Ich stimme zu</option></select></div>",
            "<div class='form-group'><label for='comments'>Sonstiges:</label><input type='text' name='comments' id='comments' placeholder='Zusätzliche Informationen'></div>",
            "<div class='form-group'><input type='submit' id='button' value='Send Email'></div>",
            "</form></div>"
        ],
    },
      imprint: {
        title: "Impressum",
        content: [
          "<div class='card'><h3>Company Information</h3><p><strong>Company name:</strong> Reiner Retkowski engineering office</p><p><strong>Managing Director:</strong> Reiner Retkowski</p><p><strong>Responsible according to TMG:</strong> Reiner Retkowski, Managing Director</p></div>",
          "<div class='card'><h3>Contact Details</h3><p><strong>Address:</strong> Eltersdorferstr. 24, 91058 Erlangen</p><p><strong>Tel:</strong> 0049 9131 20 95 78</p><p><strong>Fax:</strong> 0049 9131 20 95 77</p><p><strong>Email:</strong> <a href='mailto:info@oeko-elektronik.de'>info@oeko-elektronik.de</a></p></div>",
          "<p><strong>Source:</strong> Selected images from Adobe Stockphoto and your own images</p>",
          "<p><strong>Licenses:</strong></p>",
          "<p>Slider homepage: © John Smith #163254966</p>",
          "<p>More photos home page:</p>",
          "<ul><li>© liuzishan #203877288 System development</li><li>© shaiith #232799333 Lighting technology</li><li>© Robert Kneschke #245106771 Training</li><li>© Craig Chanowski #176490466 Coaching</li><li>© Edelweiss #51490712 Circuit design</li></ul>"
        ]
      },
      dataProtection: {
        title: "Datenschutzerklärung",
        content: [
          "<p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unserer Website ist uns ein wichtiges Anliegen.</p>",
          "<h2>1. Personenbezogene Daten</h2>",
          "<p>Personenbezogene Daten sind Informationen, die dazu genutzt werden können, Ihre Identität zu erfahren. Darunter fallen Ihr Name, die Adresse, Postanschrift und Telefonnummer. Informationen, die nicht mit Ihrer Identität in Verbindung gebracht werden (wie zum Beispiel Anzahl der Nutzer einer Internetseite), gehören nicht dazu. Sie können unser Online-Angebot grundsätzlich ohne Offenlegung Ihrer Identität nutzen.</p>",
          "<p>Wenn Sie unsere Website besuchen oder unsere Dienste nutzen übermittelt das Gerät, mit dem Sie die Seite aufrufen, automatisch Log-Daten (Verbindungsdaten) an unsere Server. Log-Daten enthalten die IP-Adresse des Gerätes, mit dem Sie auf die Website oder einen Dienst zugreifen, die Art des Browsers, mit dem Sie zugreifen, die Seite, die Sie zuvor besucht haben, Ihre Systemkonfiguration sowie Datum und Zeitangaben. Die IP-Adressen werden nur gespeichert soweit es zur Erbringung unserer Dienste erforderlich ist. Ansonsten werden die IP-Adressen gelöscht oder anonymisiert. Ihre IP-Adresse beim Besuch unserer Website speichern wir zur Erkennung und Abwehr von Angriffen maximal 7 Tage.</p>",
          "<p>Wenn Sie Informationen anfordern, E-Books bestellen oder andere Anfragen stellen, fragen wir Sie nach Ihrem Namen und anderen persönlichen Informationen. Es unterliegt Ihrer freien Entscheidung, ob Sie diese Daten eingeben. Ihre Angaben speichern wir auf besonders geschützten Servern in der Schweiz. Die EU-Kommission hat der Schweiz nach entsprechender Prüfung ein dem EU-Recht vergleichbares Datenschutzniveau attestiert. Eine Datenübermittlung von der EU in die Schweiz ist datenschutzrechtlich zulässig. Der Zugriff darauf ist nur wenigen, befugten Personen möglich. Diese sind für die technische, kaufmännische oder redaktionelle Betreuung der Inhalte und Server zuständig.</p>",
          "<p>Soweit die Nutzungs- beziehungsweise Verkehrsdaten für unsere Dienste erforderlich sind werden sie längstens bis zu sechs Monate nach Erhebung der Daten gespeichert. Werden die Daten zur Erfüllung bestehender gesetzlicher, satzungsmäßiger oder vertraglicher Aufbewahrungsfristen benötigt (z.B. Rechnungen), werden diese Daten auch darüber hinaus gespeichert. Diese Daten sind jedoch gesperrt und nur wenigen, befugten Personen über Passwörter zugänglich.</p>",
          "<h2>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h2>",
          "<p>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</p>",
          "<p>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</p>",
          "<h2>Recht auf Einschränkung der Verarbeitung</h2>",
          "<p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>",
          "<h3>Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</h3>",
          "<ul class='square-list'>",
          "<li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>",
          "<li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</li>",
          "</ul>",
          "<h2>2. Weitergabe personenbezogener Daten an Dritte</h2>",
          "<p>Wir verwenden Ihre personenbezogenen Informationen nur zum Zweck der Verwendung durch uns. Wir geben die Daten nicht ohne Ihre ausdrückliche Einwilligung an Dritte weiter. Soweit wir gesetzlich oder per Gerichtsbeschluss dazu verpflichtet sind, werden wir Ihre Daten an auskunftsberechtigte Stellen übermitteln.</p>",
          "<h2>3. Einsatz von Cookies</h2>",
          "<p>Bei Internet-Cookies handelt es sich um kleine Datenpakete, die von Ihrem Browser auf dem Festplattenlaufwerk Ihres Computers gespeichert werden. Wir verwenden auf unserer Website Cookies. Solche Cookies sind notwendig, damit Sie sich auf der Website frei bewegen und deren Features nutzen können; hierzu gehört u. a. auch der Zugriff auf gesicherte Bereiche der Website. Cookies sind auch für die Funktion des Warenkorbs bei Shop-Bestellungen aus technischen Gründen notwendig.</p>",
          "<p>Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können das Speichern von Cookies jedoch deaktivieren oder Ihren Browser so einstellen, dass er Sie benachrichtigt, sobald Cookies gesendet werden.</p>",
          "<p>Das sind Cookies die vom Worldsoft-CMS, mit dem diese Website erstellt ist, je nach den eingesetzten Modulen genutzt werden:</p>",
          `
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie-Name</th>
                <th>Ablaufzeit</th>
                <th>Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usercookie</td>
                <td>365 Tage</td>
                <td>Angemeldeter Benutzer</td>
              </tr>
              <tr>
                <td>session_name</td>
                <td>15 Min.</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>wslanguage</td>
                <td>15 Min.</td>
                <td>Gewählte Sprache</td>
              </tr>
              <tr>
                <td>install_language*</td>
                <td>15 Min.</td>
                <td>Sprache der CMS-Installation</td>
              </tr>
              <tr>
                <td>ws_delayedPopup_*</td>
                <td>1825 Tage</td>
                <td>Popup nur einmal zeigen</td>
              </tr>
              <tr>
                <td>wspollsvoterid</td>
                <td>30 Tage</td>
                <td>Umfrage/nur eine Antwort möglich</td>
              </tr>
              <tr>
                <td>reseller_nr</td>
                <td>90 Tage</td>
                <td>Bestimmung des Resellers</td>
              </tr>
              <tr>
                <td>wsshopbasketid</td>
                <td>30 Tage</td>
                <td>Shop Modul – Warenkorb</td>
              </tr>
              <tr>
                <td>wsvote_*</td>
                <td>15 Min.</td>
                <td>Voting Modul Erstanbieter</td>
              </tr>
            </tbody>
          </table>
          `,
          "<h2>4. Minderjährigenschutz</h2>",
          "<p>Kinder und Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.</p>",
          "<h2>5. Links zu anderen Websites</h2>",
          "<p>Unser Online-Angebot enthält Links zu anderen Websites. Wir haben keinen Einfluss darauf, dass deren Betreiber die Datenschutzbestimmungen einhalten.</p>",
          "<h2>6. CRM (Worldsoft Business Suite) und Newsletter</h2>",
          "<p>Diese Website nutzt die Worldsoft Business Suite (WBS). Anbieter ist die Worldsoft AG, Churerstrasse 158, 8808 Pfäffikon, Schweiz.</p>",
          "<p>Die Worldsoft Business Suite (WBS) ist ein CRM (Customer Relationship Management), mit dem Daten organisiert und analysiert werden kann.</p>",
          "<p>Wenn Sie uns Ihre personenbezogenen Daten über ein Web-Formular oder bei einer Bestellung übermitteln, werden diese Daten auf den Servern der Worldsoft AG in der Schweiz gespeichert. Die EU-Kommission hat der Schweiz nach entsprechender Prüfung ein dem EU-Recht vergleichbares Datenschutzniveau attestiert. Eine Datenübermittlung von der EU in die Schweiz ist datenschutzrechtlich zulässig.</p>",
          "<p>Wir weisen Sie vor der Übermittlung Ihrer Daten auf unsere Datenschutzbestimmungen hin. Mit der Übermittlung der Daten willigen Sie ein, dass wir Ihre personenbezogenen Daten, im Rahmen der gesetzlichen Regelungen, erheben, verarbeiten und nutzen dürfen.</p>",
          "<p>Der Zweck der Verwendung ergibt sich aus dem Zusammenhang bei der Übermittlung Ihrer Daten. Ihre Daten werden für den Zweck verwendet, für den diese ursprünglich erhoben worden sind. Beispiel: Bestellen Sie auf unserer Website ein Produkt, werden Ihre Daten zur Erstellung und den Versand der Rechnung und für evtl. Rückfragen verwendet.</p>",
          "<h3>Rechtsgrundlage</h3>",
          "<p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>",
          "<h3>Datenanalyse durch die WBS</h3>",
          "<p>Die WBS ermöglicht es uns Interessenten und Kunden anhand verschiedener Kategorien zu unterteilen (sog. Tagging). Dabei lassen sich die Adresseinträge z.B. nach Geschlecht, persönlichen Vorlieben (z.B. Vegetarier oder Nicht-Vegetarier) oder Kundenbeziehung (z.B. Kunde oder potenzieller Kunde) unterteilen.</p>",
          "<h3>Speicherdauer</h3>",
          "<p>Die von Ihnen bei uns hinterlegten Daten werden bis zum Widerruf Ihrer Einwilligung gespeichert. Nach Widerruf der Einwilligung werden Ihre Daten sowohl von unseren Servern als auch von den Servern der Worldsoft AG gelöscht. Näheres entnehmen Sie den Datenschutzbestimmungen der Worldsoft AG unter: <a href='https://www.worldsoft.info/5765' target='_blank' rel='noopener noreferrer'>www.worldsoft.info/5765</a>.</p>",
          "<h2>Newsletterdaten</h2>",
          "<p>Mit der Worldsoft Business Suite (WBS) kann u.a. der Versand von Newslettern organisiert und analysiert werden kann. Die von Ihnen zum Zwecke des Newsletterbezugs eingegebenen Daten werden auf den Servern der Worldsoft AG gespeichert.</p>",
          "<p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse, oder Telefonnummer für SMS, sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse bzw. Telefonnummer sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>",
          "<p>Die von Ihnen zum Zwecke des Newsletterbezugs eingegeben Daten werden auf den Servern der Worldsoft AG gespeichert.</p>",
          "<p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den 'Austragen'-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>",
          "<p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.</p>",
          "<h3>Datenanalyse durch die WBS</h3>",
          "<p>Wenn wir Newsletter mit Hilfe der WBS versenden, können wir feststellen, ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden.</p>",
          "<p>Die WBS ermöglicht es uns auch, die Newsletter-Empfänger anhand verschiedener Kategorien zu unterteilen (sog. Tagging). Dabei lassen sich die Newsletterempfänger z.B. nach Geschlecht, persönlichen Vorlieben (z.B. Vegetarier oder Nicht-Vegetarier) oder Kundenbeziehung (z.B. Kunde oder potenzieller Kunde) unterteilen. Auf diese Weise lassen sich die Newsletter besser an die jeweiligen Zielgruppen anpassen. Nähere Informationen erhalten Sie unter: <a href='https://www.worldsoft.info/5243/wbs' target='_blank' rel='noopener noreferrer'>www.worldsoft.info/5243/wbs</a>.</p>",
          "<p>Wenn Sie keine Analyse durch die WBS wollen, müssen Sie daher den Newsletter abbestellen. Hierfür stellen wir in jeder Newsletternachricht einen entsprechenden Link zur Verfügung.</p>",
          "<p>Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich, Adressangaben für die Rechnungserstellung) bleiben hiervon unberührt.</p>",
          "<h2>7. Plugins und Tools</h2>",
          "<h3>Google Web Fonts</h3>",
          "<p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts von Google. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>",
          "<p>Zu diesem Zweck nimmt der von Ihnen verwendete Browser jedoch nicht Verbindung zu den Servern von Google auf, sondern greift auf die Server von Worldsoft in der Schweiz zu. Dadurch erlangt Google keine Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.</p>",
          "<p>Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</p>",
          "<h3>Google Maps</h3>",
          "<p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>",
          "<p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.</p>",
          "<p>Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>",
          "<p>Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href='https://www.google.de/intl/de/policies/privacy/' target='_blank' rel='noopener noreferrer'>https://www.google.de/intl/de/policies/privacy/</a>.</p>",
          "<h2>8. Kontakt</h2>",
          "<p>Reiner Retkowski, Eltersdorferstr. 24, 91058 Erlangen, Email: <a href='mailto:info@oeko-elektronik.de'>info@oeko-elektronik.de</a></p>",
          "<h3>Ihre Betroffenenrechte</h3>",
          "<p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>",
          "<ul>",
          "<li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung</li>",
          "<li>Berichtigung unrichtiger personenbezogener Daten</li>",
          "<li>Löschung Ihrer bei uns gespeicherten Daten</li>",
          "<li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen</li>",
          "<li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns</li>",
          "<li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben</li>",
          "</ul>",
          "<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>",
          "<p>Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland oder Kantons Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden mit Anschrift für Deutschland (für den nichtöffentlichen Bereich) und Schweiz und Österreich (Europäische Datenschutzbeauftragte) finden Sie unter:</p>",
          "<p><a href='https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html' target='_blank' rel='noopener noreferrer'>www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a></p>"
        ]
      }
    };
  
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
          localStorage.setItem("pageData", JSON.stringify(pageData)); // Save entire object
          localStorage.setItem("serviceContent", JSON.stringify(service)); // Save service data
          window.location.href = "specificService.html"; // Redirect
        }
      }
    });

    // Handle click events for navigation links
    document.querySelectorAll("[data-page-key]").forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default link behavior
          const key = link.dataset.pageKey;

          // Save the selected page data and full `pageData` to localStorage
          localStorage.setItem("selectedPage", key);
          localStorage.setItem("pageData", JSON.stringify(pageData)); // Save entire object

          if (!window.location.href.includes("info.html")) {
              // Redirect to `info.html` if not already on it
              window.location.href = "info.html";
          } else {
              // Trigger dynamic content update
              const mainContent = document.querySelector(".main-content");
              let contentHTML = `<h1>${pageData[key].title}</h1>`;
              pageData[key].content.forEach((paragraph) => {
                  contentHTML += paragraph;
              });
              mainContent.innerHTML = contentHTML;

              // Update active navigation link
              document.querySelectorAll("[data-page-key]").forEach((navLink) => {
                  navLink.classList.remove("active");
                  if (navLink.dataset.pageKey === key) {
                      navLink.classList.add("active");
                  }
              });
          }
      });
    });


  // On scroll, modify navbar behavior
  const onScroll = () => {
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    const heroTop = heroSection.getBoundingClientRect().top;

    // Check if the navbar is still at the bottom
    if (window.scrollY === 0) {
      navbar.classList.remove("navbar-scrolled");
    } else {
      navbar.classList.add("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll);

  document.querySelectorAll('.hero-services').forEach((tile) => {
    tile.addEventListener('mouseenter', () => tile.classList.add('hover'));
    tile.addEventListener('mouseleave', () => tile.classList.remove('hover'));
});


});
