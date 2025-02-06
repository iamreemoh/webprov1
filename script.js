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
    // Select the canvas element and its context
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Ensure the canvas exists
  if (!canvas) {
      console.error("Canvas element not found!");
  }

  // Function to resize the canvas dynamically
  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateCenters();
  }

  // Define centers for rotation and update dynamically
  const centerLeft = { x: 0, y: 0 };
  const centerRight = { x: 0, y: 0 };

  function updateCenters() {
      centerLeft.x = canvas.width * 0.18;  // Adjusted for the left circle (Sun area)
      centerLeft.y = canvas.height * 0.4;

      centerRight.x = canvas.width * 0.75; // Adjusted for the right circle (Bicycle area)
      centerRight.y = canvas.height * 0.65;
  }

  // Call resizeCanvas initially and on window resize
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Define keywords and rotation properties
  const keywordsLeft = ["Spektrum Analyse", "Technische Entwicklung", "Licht Parameter", "Licht Schulung","Lichtflicker Messung","Spektrum Synthese"];
  const keywordsRight = ["Sanierungsfahrplan", "Gewerbe", "Energieausweise", "Lebenszyklus Analyse","QNG","LCA","Wohnen"];

  const radiusLeft = 200;
  const radiusRight = 220;
  let angle = 0;

  // Click event listener for canvas redirection
  canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      console.log("Mouse Clicked at:", mouseX, mouseY);

      // Check if the click is inside the left circle
      if (Math.sqrt((mouseX - centerLeft.x) ** 2 + (mouseY - centerLeft.y) ** 2) <= radiusLeft) {
          console.log("Clicked inside LEFT circle. Redirecting to energy.html...");
          window.location.href = "energy.html";
      }

      // Check if the click is inside the right circle
      if (Math.sqrt((mouseX - centerRight.x) ** 2 + (mouseY - centerRight.y) ** 2) <= radiusRight) {
          console.log("Clicked inside RIGHT circle. Redirecting to light.html...");
          window.location.href = "lighting.html";
      }
  });

  // Function to draw rotating text on the canvas
  function drawRotatingText() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "26px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      // Draw Left Circle (Sun area)
      keywordsLeft.forEach((text, i) => {
          const theta = angle + (i * (Math.PI * 2)) / keywordsLeft.length;
          const x = centerLeft.x + radiusLeft * Math.cos(theta);
          const y = centerLeft.y + radiusLeft * Math.sin(theta);
          drawGlassRectWithText(x, y, text);
      });

      // Draw Right Circle (Bicycle area)
      keywordsRight.forEach((text, i) => {
          const theta = -angle + (i * (Math.PI * 2)) / keywordsRight.length;
          const x = centerRight.x + radiusRight * Math.cos(theta);
          const y = centerRight.y + radiusRight * Math.sin(theta);
          drawGlassRectWithText(x, y, text);
      });

      angle += 0.0005; // Speed of rotation
      requestAnimationFrame(drawRotatingText);
  }

  // Function to draw a glassy rectangle with text
  function drawGlassRectWithText(x, y, text) {
      const rectWidth = 275;
      const rectHeight = 50;
      const cornerRadius = 10;

      // Draw glassy rectangle
      ctx.beginPath();
      ctx.fillStyle = "rgba(36, 36, 36, 0.82)"; // Semi-transparent black
      ctx.strokeStyle = "rgba(49, 49, 49, 0.4)"; // Border with transparency
      ctx.lineWidth = 2;
      ctx.roundRect(x - rectWidth / 2, y - rectHeight / 2, rectWidth, rectHeight, cornerRadius);
      ctx.fill();
      ctx.stroke();

      // Draw text inside the rectangle
      ctx.fillStyle = "white";
      ctx.fillText(text, x, y + 6);
  }

    canvas.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Check if the mouse is inside the left or right circle
      const isHoveringLeft = Math.sqrt((mouseX - centerLeft.x) ** 2 + (mouseY - centerLeft.y) ** 2) <= radiusLeft;
      const isHoveringRight = Math.sqrt((mouseX - centerRight.x) ** 2 + (mouseY - centerRight.y) ** 2) <= radiusRight;

      // Change cursor to pointer if hovering over a clickable circle, otherwise default
      if (isHoveringLeft || isHoveringRight) {
          canvas.style.cursor = "pointer";
      } else {
          canvas.style.cursor = "default";
      }
  });

  // Ensure the canvas does not block clicks on other elements
  canvas.style.pointerEvents = "auto";


  // Start the rotating text animation
  drawRotatingText();



    // Navigation Bar Handling
    const pageData = {
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
            "<div class='form-group'><label for='salutation'>Anrede:</label><select id='salutation' name='salutation'><option value='Herr'>Herr</option><option value='Frau'>Frau</option><option value='Divers'>Divers</option></select></div>",
            "<div class='form-group'><label for='firstName'>Vorname:</label><input type='text' name='firstName' id='firstName' placeholder='Ihr Vorname'></div>",
            "<div class='form-group'><label for='lastName'>Nachname:</label><input type='text' name='lastName' id='lastName' placeholder='Ihr Nachname'></div>",
            "<div class='form-group'><label for='email'>E-Mail:</label><input type='email' name='email' id='email' placeholder='Ihre E-Mail'></div>",
            "<div class='form-group'><label>Ich möchte mehr erfahren über:</label><br>" +
            "<input type='checkbox' id='Energieberatung' name='interests[]' value='Energieberatung'><label for='Energieberatung'>Energieberatung</label><br>" +
            "<input type='checkbox' id='beleuchtungstechnik' name='interests[]' value='Beleuchtungstechnik'><label for='beleuchtungstechnik'>Beleuchtungstechnik</label><br>" +
            "<input type='checkbox' id='coaching' name='interests[]' value='Coaching'><label for='coaching'>Coaching</label><br></div>",
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
          "<ul><li>© Günter Albers #163254966 Startseite</li><li>© Sarah Retkowski #13-11-2024 Startseite</li><li>© shaiith #232799333 Startseite</li><li>© vegefox.com # 40063781 Aktuelle Lage 1</li><li>© sirichai #881498936 Energieberatung 1</li><li>© Coloures-Pic #39865139 Energieberatung 2</li><li>© Coloures-Pic #39865139 Energieberatung 2</li><li>© K. C. #107155877 Energieberatung 3</li><li>© Alexander Raths #80217910 Energieberatung.4</li><li>© contrastwerkstatt #283869220 DIY Rentabilität</li><li>© Igal #1015663130 QNG-Siegel</li><li>© ImagePulse #942772032 LCA-Bilanzierung</li><li>© Mikiehl Design #527962462 Mythen & Technik 1</li><li>© outdoorpixel #32400510 Mythen & Technik 2</li></ul>"
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

});
