document.addEventListener("DOMContentLoaded", () => {
    
    const selectedPage = localStorage.getItem("selectedPage");
    const pageData = JSON.parse(localStorage.getItem("pageData"));

    const mainContent = document.querySelector(".main-content");
    
    // Toggle navigation menu on click
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle hamburger to X
    });

    if (selectedPage && pageData && pageData[selectedPage]) {
        let contentHTML = `<h1>${pageData[selectedPage].title}</h1>`;
        pageData[selectedPage].content.forEach((paragraph) => {
            contentHTML += `<p>${paragraph}</p>`;
        });

        // Check and render the aboutSlider if it exists
        if (pageData[selectedPage].aboutSlider) {
            const aboutSlider = pageData[selectedPage].aboutSlider;

            // Render only the slider container and the first slide initially
            let sliderHTML = '<div class="about-slider">';
            sliderHTML += `
                <div class="slide active" id="dynamic-slide">
                    <img src="${aboutSlider.aboutSlides[0].image}" alt="${aboutSlider.aboutSlides[0].title}" class="slide-image">
                    <div class="slide-content">
                        <h2>${aboutSlider.aboutSlides[0].title}</h2>
                        ${aboutSlider.aboutSlides[0].paragraphs.map((p) => `<p>${p}</p>`).join("")}
                    </div>
                </div>
            `;
            sliderHTML += "</div>"; // Close slider
            contentHTML += sliderHTML;

            // Render the initial slider content in the DOM
            mainContent.innerHTML = contentHTML;

            // Initialize dynamic slider functionality
            const dynamicSlide = document.getElementById("dynamic-slide");
            let currentSlideIndex = 0;

            function updateSlide() {
                // Fade-out animation
                dynamicSlide.classList.remove("active");

                // Delay the update for smooth fade-in/out effect
                setTimeout(() => {
                    const slideData = aboutSlider.aboutSlides[currentSlideIndex];
                    dynamicSlide.querySelector(".slide-image").src = slideData.image;
                    dynamicSlide.querySelector(".slide-image").alt = slideData.title;
                    dynamicSlide.querySelector("h2").textContent = slideData.title;
                    dynamicSlide.querySelector(".slide-content").innerHTML = `
                        <h2>${slideData.title}</h2>
                        ${slideData.paragraphs.map((p) => `<p>${p}</p>`).join("")}
                    `;

                    // Increment or loop back the index
                    currentSlideIndex = (currentSlideIndex + 1) % aboutSlider.aboutSlides.length;

                    // Fade-in animation
                    dynamicSlide.classList.add("active");
                }, 500); // Match CSS transition timing
            }

            // Automatically cycle through slides every 2 seconds
            setInterval(updateSlide, 2000);
        }
               
        mainContent.innerHTML = contentHTML;

        // // Add fade-in/out logic here
        // const slides = document.querySelectorAll(".about-slider .slide");
        // let currentSlide = 0;

        // function showNextSlide() {
        //     slides[currentSlide].classList.remove("active");
        //     currentSlide = (currentSlide + 1) % slides.length;
        //     slides[currentSlide].classList.add("active");
        // }

        // if (slides.length > 0) {
        //     slides[currentSlide].classList.add("active");
        //     setInterval(showNextSlide, 2000);
        // }

        document.querySelectorAll("[data-page-key]").forEach((link) => {
            link.classList.remove("active");
            if (link.dataset.pageKey === selectedPage) {
                link.classList.add("active");
            }

            link.addEventListener("click", (event) => {
                event.preventDefault();

                const key = link.dataset.pageKey;
                if (!pageData[key]) {
                    console.error(`No data found for key: ${key}`);
                    return;
                }

                localStorage.setItem("selectedPage", key);
                let updatedHTML = `<h1>${pageData[key].title}</h1>`;
                pageData[key].content.forEach((paragraph) => {
                    updatedHTML += `<p>${paragraph}</p>`;
                });
                mainContent.innerHTML = updatedHTML;

                document.querySelectorAll("[data-page-key]").forEach((navLink) => {
                    navLink.classList.remove("active");
                    if (navLink.dataset.pageKey === key) {
                        navLink.classList.add("active");
                    }
                });
            });
        });
    } else {
        console.error("Selected page or page data is missing.");
        mainContent.innerHTML = "<h1>Page not found</h1>";
    }

    // Initialize EmailJS with your Public Key
    emailjs.init("qqQMVwdYk6Nr4Bsva");

    // Get the form and button elements
    const btn = document.getElementById("button");
    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get the value of the 'dataConsent' dropdown
            const dataConsent = document.getElementById("dataConsent").value;

            // Validate if the user has agreed to the data consent
            if (dataConsent !== "Ich stimme zu") {
                alert("Bitte stimmen Sie der Datenschutzerklärung zu, um fortzufahren.");
                return; // Exit the form submission if not agreed
            }

            // Disable button and show sending message
            btn.value = "Sending...";
            btn.disabled = true;

            // Collect form data
            const formData = new FormData(form);

            // Process checkbox values
            const interests = formData.getAll("interest[]"); // Collect all selected checkboxes
            const interestsString = interests.join(", "); // Combine into a single string

            // Append combined interests to form data
            formData.append("interests", interestsString);

            // Log to ensure correct data structure
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Send the form data using EmailJS
            emailjs
                .sendForm("default_service", "template_r46ay5c", this)
                .then(() => {
                    btn.value = "Send Email"; // Reset button text
                    btn.disabled = false; // Enable button
                    alert("Ihre Nachricht wurde erfolgreich gesendet!"); // Success message
                })
                .catch((err) => {
                    btn.value = "Send Email"; // Reset button text
                    btn.disabled = false; // Enable button
                    alert("Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut."); // Error message
                    console.error(err); // Log the error to console
                });
        });
    }
});
