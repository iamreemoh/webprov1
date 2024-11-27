document.addEventListener("DOMContentLoaded", () => {
    
    // Retrieve the service data from localStorage
    const serviceData = JSON.parse(localStorage.getItem("serviceContent"));

    // Toggle navigation menu on click
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle hamburger to X
    });
    
    // Check if the service data exists
    if (serviceData) {
        // Set the service title
        document.getElementById("service-title").innerHTML = `<h1>${serviceData.title}</h1>`;

        // Generate Tabs and Content
        const tabsDiv = document.querySelector(".tabs");
        const tabContentDiv = document.querySelector(".tab-content");
        const serviceImagesDiv = document.getElementById("service-images");

        if (serviceData.content && serviceData.content.length > 0) {
            serviceData.content.forEach((tabContents, index) => {
                // Generate a name for the tab
                const tabName = (serviceData.tabNames && serviceData.tabNames[index]) 
                    ? serviceData.tabNames[index] 
                    : `Tab ${index + 1}`; // Fallback to default name if not available

                // Create tabs dynamically
                const tab = document.createElement("button");
                tab.className = "tab";
                tab.textContent = tabName; // Set tab name dynamically
                tab.dataset.index = index; 
                tabsDiv.appendChild(tab);

                // Create corresponding content dynamically
                const contentDiv = document.createElement("div");
                contentDiv.className = "tab-pane";
                contentDiv.dataset.index = index; // Match tab index

                // Combine multiple pieces of content into one block
                if (Array.isArray(tabContents)) {
                    contentDiv.innerHTML = tabContents.join("");
                } else {
                    contentDiv.innerHTML = tabContents;
                }

                if (index !== 0) contentDiv.style.display = "none"; // Hide all but the first tab's content
                tabContentDiv.appendChild(contentDiv);
            });

            // Highlight the first tab as active
            tabsDiv.querySelector(".tab").classList.add("active");

            // Display the first image (second image in the array) for the first tab
            const displayImage = (imageIndex) => {
                serviceImagesDiv.innerHTML = ""; // Clear existing images
                if (serviceData.images.length > imageIndex) {
                    const tabImage = document.createElement("img");
                    tabImage.src = serviceData.images[imageIndex];
                    tabImage.alt = serviceData.title;

                    // Adjust image size based on its aspect ratio
                    tabImage.onload = () => {
                        const isLandscape = tabImage.naturalWidth > tabImage.naturalHeight;
                        tabImage.style.width = isLandscape ? "60%" : "30%";
                    };
                    serviceImagesDiv.appendChild(tabImage);

                    // Add scroll-based parallax effect
                    const onScroll = () => {
                        const rect = serviceImagesDiv.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        if (rect.top < windowHeight && rect.bottom > 0) {
                            // Calculate the scroll offset as a fraction
                            const scrollOffset = 1 - rect.top / windowHeight;

                            // Apply rotation and depth based on scroll offset
                            tabImage.style.transform = `
                                rotateX(${scrollOffset * 15}deg) 
                                rotateY(${scrollOffset * 15}deg) 
                                translateZ(${scrollOffset * 50}px)
                            `;
                        } else {
                            // Reset to original state when out of view
                            tabImage.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
                            tabImage.style.opacity = 1; // Restore full opacity
                        }
                    };

                    // Attach scroll listener
                    window.addEventListener("scroll", onScroll);
                }
            };

            // Display the image for the first tab initially
            displayImage(1); // Second image in the array

            // Add event listener for tab switching
            tabsDiv.addEventListener("click", (e) => {
                if (e.target.classList.contains("tab")) {
                    const selectedIndex = parseInt(e.target.dataset.index);

                    // Remove active state from all tabs and hide all content
                    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
                    document.querySelectorAll(".tab-pane").forEach(pane => pane.style.display = "none");

                    // Set active state to the clicked tab and show corresponding content
                    e.target.classList.add("active");
                    document.querySelector(`.tab-pane[data-index='${selectedIndex}']`).style.display = "block";

                    // Display the corresponding image for the selected tab
                    displayImage(selectedIndex + 1); // Match the tab index to image index
                }
            });
        }
    } else {
        // Handle case where no service data is found
        document.getElementById("service-title").innerHTML = "<h1>Service not found</h1>";
    } 

    // Add the navigation functionality
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

    // For mobile
    const tabsDiv = document.querySelector(".tabs"); // Tabs container
    const dropdown = document.querySelector(".dropdown-menu"); // Dropdown menu
    const tabContentDiv = document.querySelector(".tab-content"); // Tab content area
    const serviceImagesDiv = document.getElementById("service-images"); // Image container
    if (serviceData) {
        // Populate dropdown options dynamically
        if (tabsDiv) {
        const tabButtons = tabsDiv.querySelectorAll(".tab");
        tabButtons.forEach((tab, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = tab.textContent;
            dropdown.appendChild(option);
        });
        }

        // Function to update the displayed image
        const displayImage = (imageIndex) => {
        serviceImagesDiv.innerHTML = ""; // Clear the current image
        if (serviceData.images.length > imageIndex) {
            const tabImage = document.createElement("img");
            tabImage.src = serviceData.images[imageIndex];
            tabImage.alt = `Tab ${imageIndex + 1} Image`;

            // Adjust image size based on aspect ratio
            tabImage.onload = () => {
            const isLandscape = tabImage.naturalWidth > tabImage.naturalHeight;
            tabImage.style.width = isLandscape ? "60%" : "40%";
            };

            serviceImagesDiv.appendChild(tabImage);
        }
        };

        // Add event listener for dropdown selection
        dropdown.addEventListener("change", (e) => {
        const selectedIndex = parseInt(e.target.value);

        // Hide all tab content
        document.querySelectorAll(".tab-pane").forEach((pane) => {
            pane.style.display = "none";
        });

        // Show the selected tab content
        const selectedContent = document.querySelector(`.tab-pane[data-index='${selectedIndex}']`);
        if (selectedContent) {
            selectedContent.style.display = "block";
        }

        // Update the image for the selected tab
        displayImage(selectedIndex + 1); // Match image index to tab index
        });

        // Add event listeners for tab clicks (desktop mode)
        tabsDiv?.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
            const selectedIndex = parseInt(e.target.dataset.index);

            // Update active tab
            document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
            e.target.classList.add("active");

            // Hide all tab content
            document.querySelectorAll(".tab-pane").forEach((pane) => {
            pane.style.display = "none";
            });

            // Show the selected tab content
            const selectedContent = document.querySelector(`.tab-pane[data-index='${selectedIndex}']`);
            if (selectedContent) {
            selectedContent.style.display = "block";
            }

            // Update the image for the selected tab
            displayImage(selectedIndex + 1); // Match image index to tab index
        }
        });

        // Trigger the first option's content and image on page load
        dropdown.dispatchEvent(new Event("change"));
    }
});
