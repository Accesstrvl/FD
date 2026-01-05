// js/global.js

// Function to load HTML components
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
        } else {
            console.error(`Error loading ${file}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error loading component: ${error}`);
    }
}

// Load the Nav and Footer when the page opens
window.onload = function() {
    loadComponent("navbar-container", "/components/navbar.html");
    // You can do the same for the footer later:
    // loadComponent("footer-container", "/components/footer.html");
};