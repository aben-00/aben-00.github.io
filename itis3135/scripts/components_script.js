// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    Promise.all([ //AI used for Promise. Used to run the fetches below in parallel, which is a resource saving process.
        fetch("components/header1.json").then((response) => response.json()),
        fetch("components/header2.json").then((response) => response.json()),
        fetch("components/footer.json").then((response) => response.json())
    ])
        .then(([header1Data, header2Data, footerData]) => {
            const header1 = document.getElementById("header-nav1");
            let header1HTML = ""; //HTML string to be added to.
            header1Data.forEach((item, index) => {
                header1HTML += `<a class="my-pages" href="${item.url}">${item.name}</a>`; //Add <a> elements.
                if (index < header1Data.length - 1) { //if statement to keep seperator from showing up after last <a> element
                    header1HTML += `<bars> || </bars>`; //Add seperators between <a> elements
                }
            });
            header1.innerHTML = header1HTML;

            const header2 = document.getElementById("header-nav2");
            let header2HTML = ""; //HTML string to be added to.
            header2Data.forEach((item, index) => {
                header2HTML += `<a class="my-pages" href="${item.url}">${item.name}</a>`; //Add <a> elements.
                if (index < header2Data.length - 1) { //if statement to keep seperator from showing up after last <a> element
                    header2HTML += `<bars> || </bars>`; //Add seperators between <a> elements
                }
            });
            header2.innerHTML = header2HTML;

            const footer = document.getElementById("footer");
            let footerHTML = ""; //HTML string to be added to.
            footerData.forEach((item, index) => {
                footerHTML += `<a class="my-pages" href="${item.url}">${item.name}</a>`; //Add <a> elements.
                if (index < footerData.length - 1) { //if statement to keep seperator from showing up after last <a> element
                    footerHTML += `<bars> || </bars>`; //Add seperators between <a> elements
                }
            });
            footer.innerHTML = footerHTML;
        })
        .catch((error) => console.error("Error fetching menu:", error));
});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}