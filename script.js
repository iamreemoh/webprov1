// Import Firebase SDK correctly
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyArvZZLdS5VpY12J2MXoefBMdsV9AIhB4c",
    authDomain: "irreiner-978b6.firebaseapp.com",
    projectId: "irreiner-978b6",
    storageBucket: "irreiner-978b6.appspot.com",
    messagingSenderId: "418027078906",
    appId: "1:418027078906:web:3d8c70cba29a09bb53f543",
    measurementId: "G-8H5T7RT0GE"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            const provider = new GoogleAuthProvider();
            try {
                await signInWithPopup(auth, provider);
            } catch (error) {
                console.error("Login error:", error.message);
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Logout error:", error.message);
            }
        });
    }

    // ✅ Authentication state change
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
            showAdminControls();
            loadContent("servicesList", true);
            loadContent("aboutContent", true);
        } else {
            loginBtn.style.display = "block";
            logoutBtn.style.display = "none";
            hideAdminControls();
            loadContent("servicesList", false);
            loadContent("aboutContent", false);
        }
    });

    // ✅ Show Admin Controls
    function showAdminControls() {
        ["servicesList", "aboutContent"].forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (!section || section.dataset.adminLoaded) return;
            section.dataset.adminLoaded = "true";

            const addHeadingBtn = document.createElement("button");
            addHeadingBtn.textContent = "➕ Add Heading";
            addHeadingBtn.classList.add("admin-btn");
            addHeadingBtn.addEventListener("click", () => addElement(sectionId, "h2"));

            const addParagraphBtn = document.createElement("button");
            addParagraphBtn.textContent = "➕ Add Paragraph";
            addParagraphBtn.classList.add("admin-btn");
            addParagraphBtn.addEventListener("click", () => addElement(sectionId, "p"));

            section.before(addHeadingBtn, addParagraphBtn);
        });
    }

    // ✅ Hide Admin Controls
    function hideAdminControls() {
        document.querySelectorAll(".admin-btn").forEach((btn) => btn.remove());
        document.querySelectorAll("[data-admin-loaded]").forEach((section) => {
            section.removeAttribute("data-admin-loaded");
        });
    }


    // ✅ Function to Add Elements
    async function addElement(sectionId, elementType) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const text = prompt(`Enter text for the new ${elementType}:`);
      if (!text) return; // Prevent empty entries

      try {
          // ✅ Check if the text already exists in Firestore
          const querySnapshot = await getDocs(collection(db, sectionId));
          let exists = false;

          querySnapshot.forEach((doc) => {
              if (doc.data().text === text) {
                  exists = true;
              }
          });

          if (exists) {
              alert("This content already exists!"); // Prevent duplicates
              return;
          }

          // ✅ Save to Firestore with timestamp
          const docRef = await addDoc(collection(db, sectionId), { 
              text, 
              type: elementType, 
              timestamp: Date.now() // Store timestamp
          });

          console.log("Document written with ID: ", docRef.id);

          // ✅ Add to DOM
          const newElement = createDOMElement(docRef.id, text, elementType, sectionId, true);
          section.appendChild(newElement);
      } catch (error) {
          console.error("Error adding document: ", error);
      }
    }

    // ✅ Load Content from Firestore (Sorted by Timestamp)
    async function loadContent(sectionId, isAdmin) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      section.innerHTML = ""; // Clear previous content

      try {
          const querySnapshot = await getDocs(collection(db, sectionId));
          const dataList = [];

          querySnapshot.forEach((doc) => {
              dataList.push({ id: doc.id, ...doc.data() });
          });

          // ✅ Sort by timestamp (oldest first)
          dataList.sort((a, b) => a.timestamp - b.timestamp);

          // ✅ Append elements in correct order
          dataList.forEach((data) => {
              const newElement = createDOMElement(data.id, data.text, data.type, sectionId, isAdmin);
              section.appendChild(newElement);
          });
      } catch (error) {
          console.error("Error loading content: ", error);
      }
    }
 

    // ✅ Delete Element from Firestore
    async function deleteElement(sectionId, docId, element) {
        if (confirm("Are you sure you want to delete this?")) {
            try {
                await deleteDoc(doc(db, sectionId, docId));
                element.remove();
            } catch (error) {
                console.error("Error deleting document:", error);
            }
        }
    }

    // ✅ Create DOM Elements
    function createDOMElement(docId, text, elementType, sectionId, isAdmin) {
        const newElement = document.createElement(elementType);
        newElement.textContent = text;

        if (elementType === "p") {
          newElement.style.textAlign = "justify"; // Justify paragraphs
      }
        if (isAdmin) {
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌ Remove";
            removeBtn.classList.add("admin-btn");
            removeBtn.addEventListener("click", () => deleteElement(sectionId, docId, newElement));
            newElement.appendChild(removeBtn);
        }

        return newElement;
    }
});






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
      centerLeft.x = canvas.width * 0.2;  // Adjusted for the left circle (Sun area)
      centerLeft.y = canvas.height * 0.35;

      centerRight.x = canvas.width * 0.74; // Adjusted for the right circle (Bicycle area)
      centerRight.y = canvas.height * 0.55;
  }

  // Call resizeCanvas initially and on window resize
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Define keywords and rotation properties
  const keywordsLeft = ["Spektrum Analyse", "Technische Entwicklung", "Licht Parameter", "Licht Schulung","Lichtflicker Messung","Spektrum Synthese"];
  const keywordsRight = ["Sanierung--sfahrplan", "Gewerbe", "Energie--ausweise", "Lebenszyklus Analyse","QNG","LCA","Wohnen"];

  const radiusLeft = 230;
  const radiusRight = 230;
  let angle = 0;

  // Click event listener for canvas redirection
  canvas.addEventListener("click", function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if clicked inside the left rotating area
    if (Math.sqrt((mouseX - centerLeft.x) ** 2 + (mouseY - centerLeft.y) ** 2) <= radiusLeft) {
        console.log("Clicked inside LEFT rotating area. Redirecting...");
        window.location.href = "lighting.html";
    }

    // Check if clicked inside the right rotating area
    if (Math.sqrt((mouseX - centerRight.x) ** 2 + (mouseY - centerRight.y) ** 2) <= radiusRight) {
        console.log("Clicked inside RIGHT rotating area. Redirecting...");
        window.location.href = "energy.html";
    }
});


// Function to draw rotating text on the canvas
function drawRotatingText(isHoveringLeft = false, isHoveringRight = false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "20px Arial";
  ctx.textAlign = "center";

  const rectWidth = 210;  
  const rectHeight = 60;  

  // Draw central glassy rectangles
  drawGlassyRectangle(centerLeft.x - rectWidth / 2, centerLeft.y - rectHeight / 2, rectWidth, rectHeight, 10, isHoveringLeft);
  drawGlassyRectangle(centerRight.x - rectWidth / 2, centerRight.y - rectHeight / 2, rectWidth, rectHeight, 10, isHoveringRight);

  // Draw center text
  ctx.fillStyle = isHoveringLeft ? "rgba(255, 153, 0, 0.5)" : "rgb(4, 136, 156)";
  ctx.font = "bold 20px Arial"; 
  ctx.fillText("Beleuchtungstechnik", centerLeft.x, centerLeft.y + 5);

  ctx.fillStyle = isHoveringRight ? "rgba(255, 153, 0, 0.5)" : "rgb(13, 116, 64)";
  ctx.font = "bold 20px Arial";
  ctx.fillText("Energieberatung", centerRight.x, centerRight.y + 5);

  // **Left Side (Sun Area)**
  keywordsLeft.forEach((text, i) => {
      const theta = angle + (i * (Math.PI * 2)) / keywordsLeft.length;
      const x = centerLeft.x + radiusLeft * Math.cos(theta);
      const y = centerLeft.y + radiusLeft * Math.sin(theta);
      drawGlassRectWithText(x, y, text, "rgb(4, 136, 156)", isHoveringLeft);
  });

  // **Right Side (Bicycle Area)**
  keywordsRight.forEach((text, i) => {
      const theta = -angle + (i * (Math.PI * 2)) / keywordsRight.length;
      const x = centerRight.x + radiusRight * Math.cos(theta);
      const y = centerRight.y + radiusRight * Math.sin(theta);
      drawGlassRectWithText(x, y, text, "rgb(13, 116, 64)", isHoveringRight);
  });

  angle += 0.00003; // Slow down rotation speed
  requestAnimationFrame(() => drawRotatingText(isHoveringLeft, isHoveringRight));
}


// Function to draw a semi-transparent glassy rectangle with a border
function drawGlassyRectangle(x, y, width, height, cornerRadius = 10, isHovered = false) {
  ctx.save(); // Save current state

  // Change background color based on hover state
  if (isHovered) {
      ctx.fillStyle = "rgba(255, 253, 208, 0.9)"; // Warm yellowish-white
      ctx.shadowColor = "rgba(255, 204, 0, 0.4)"; // Yellow glow effect
      ctx.shadowBlur = 20; // Increase glow on hover
  } else {
      ctx.fillStyle = "rgba(241, 241, 241, 0.82)"; // Normal glassy white
      ctx.shadowBlur = 0; // No shadow
  }

  // Light gray border
  ctx.strokeStyle = "rgba(155, 155, 155, 0.4)";
  ctx.lineWidth = 2;

  // Draw rounded rectangle
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, cornerRadius);
  ctx.fill();
  ctx.stroke();

  ctx.restore(); // Restore previous state
}

// Function to draw a glassy rectangle with text (splitting long texts into two lines)
function drawGlassRectWithText(x, y, text, textColor, isHovered = false) {
    const rectWidth = 130;  
    const rectHeight = 60;  
    const cornerRadius = 10;

    // Set colors based on hover state
    ctx.fillStyle = isHovered ? "rgba(255, 253, 208, 0.9)" : "rgba(241, 241, 241, 0.82)"; 
    ctx.strokeStyle = isHovered ? "rgba(255, 204, 0, 0.4)" : "rgba(155, 155, 155, 0.4)";
    ctx.lineWidth = 2;

    // Draw glassy rectangle
    ctx.beginPath();
    ctx.roundRect(x - rectWidth / 2, y - rectHeight / 2, rectWidth, rectHeight, cornerRadius);
    ctx.fill();
    ctx.stroke();

    // Set text color
    ctx.fillStyle = textColor;
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";

    // Normalize multiple hyphens ("--" or more) to a single hyphen
    let formattedText = text.replace(/-{2,}/g, "-");
    
    // Split at spaces
    let words = formattedText.split(" ");

    // Process each word individually
    let processedWords = words.map(word => {
        let parts = word.split("-");
        if (parts.length > 2) {
            // If more than two parts, keep the first hyphen with the first part
            return [parts[0] + "-", parts.slice(1).join("-")];
        } else if (parts.length === 2) {
            // If exactly one hyphen, retain it in the first part
            return [parts[0] + "-", parts[1]];
        }
        return [word]; // No hyphen, keep as-is
    });

    // Flatten processed words into a single array
    let lines = processedWords.flat();

    // Draw text lines
    if (lines.length === 2) {
        ctx.fillText(lines[0], x, y - 5);
        ctx.fillText(lines[1], x, y + 20);
    } else {
        ctx.fillText(text, x, y + 6);
    }
}


canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the mouse is inside the left rotating area
  const isHoveringLeft = Math.sqrt((mouseX - centerLeft.x) ** 2 + (mouseY - centerLeft.y) ** 2) <= radiusLeft;

  // Check if the mouse is inside the right rotating area
  const isHoveringRight = Math.sqrt((mouseX - centerRight.x) ** 2 + (mouseY - centerRight.y) ** 2) <= radiusRight;

  // Change cursor if hovering over any clickable area
  canvas.style.cursor = isHoveringLeft || isHoveringRight ? "pointer" : "default";

  // Redraw with hover effect
  drawRotatingText(isHoveringLeft, isHoveringRight);
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
          "<h3>Speicherung personenbezogener Daten</h3>",
          "<p>Ihre Daten werden nur gespeichert, wenn Sie über das Kontaktformular mit uns in Verbindung treten und dann nur so lange wie es für die persönliche Kontaktaufnahme nötig ist. Kommt es nicht zur Beauftragung, werden Ihre Daten wieder gelöscht. Während der Speicherung sind die Daten nur den Mitarbeitern des Ingenieurbüros Retkowski zugänglich.</p>",
          "<p>Wenn Sie uns den Auftrag erteilen für Sie tätig zu werden, sind wir dazu verpflichtet Ihre Kontaktdaten entsprechend den gesetzlichen Bestimmungen zur Nachweispflicht bei uns speichern. Erst nach dem gesetzlich vorgegebenem Zeitraum können Sie die Löschung verlangen.</p>",
          "<h3>Recht auf Einschränkung der Verarbeitung</h3>",
          "<p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>",
          "<h3>Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</h3>",
          "<ul class='square-list'>",
          "<li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>",
          "<li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>",
          "<li>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</li>",
          "</ul>",
          "<h3>Rechtsgrundlage</h3>",
          "<p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>",
          "<h2>2. Weitergabe personenbezogener Daten an Dritte</h2>",
          "<p>Wir verwenden Ihre personenbezogenen Informationen nur zum Zweck der Auftragsbearbeitung und werden diese nicht ohne Ihre ausdrückliche Einwilligung an Dritte weiter geben. Soweit wir gesetzlich oder per Gerichtsbeschluss dazu verpflichtet sind, werden wir Ihre Daten an auskunftsberechtigte Stellen übermitteln.</p>",
          "<h2>3. Einsatz von Cookies</h2>",
          "<p>Bei Internet-Cookies handelt es sich um kleine Datenpakete, die von Ihrem Browser auf dem Festplattenlaufwerk Ihres Computers gespeichert werden. Wir verwenden auf unserer Website keine Cookies.</p>",
          "<h2>4. Minderjährigenschutz</h2>",
          "<p>Kinder und Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.</p>",
          "<h2>5. Links zu anderen Websites</h2>",
          "<p>Unser Online-Angebot enthält Links zu anderen Websites. Wir haben keinen Einfluss darauf, dass deren Betreiber die Datenschutzbestimmungen einhalten.</p>",
          "<h2>6. Newsletterdaten</h2>",
          "<p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse, oder Telefonnummer für SMS, sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse bzw. Telefonnummer sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>",
          "<p>Die von Ihnen zum Zwecke des Newsletterbezugs eingegeben Daten werden auf den Servern der Host Europe gespeichert.</p>",
          "<p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den 'Austragen'-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>",
          "<p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.</p>",
          "<h2>7. Plugins und Tools</h2>",
          "<p>Beim Aufruf unserer Seite lädt Ihr Browser die komplette Seiteninformation in ihren Browsercache. Das dient der Erhöhung der Geschwindigkeit. Auf diese Weise können Sie sich ohne zeitraubende Warterei schnell und unkompliziert auf der gesamten Seite bewegen.Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts von Google. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>",
          "<h2>8. Kontakt</h2>",
          "<p>Reiner Retkowski, Eltersdorferstr. 24, 91058 Erlangen, Email: info@oeko-elektronik.de</p>",
          "<h3>Ihre Betroffenenrechte</h3>",
          "<h3>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</h3>",
          "<ul class='square-list'>",
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

    // Check if the navbar is still at the bottom
    if (window.scrollY === 0) {
      navbar.classList.remove("navbar-scrolled");
    } else {
      navbar.classList.add("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll);

});

