// background Theme
const toggleColor = document.querySelector(".mode-visualization");
const themeFile = document.querySelector(".theme-color");

toggleColor.addEventListener("click", () => {
    if (themeFile.getAttribute("href") == "../styles/darkmode.css") {
        themeFile.href = "../styles/lightmode.css"
    } else {
        themeFile.href = "../styles/darkmode.css"
    };
});

// Modal Menu
const modalBox = document.querySelector('.modal-box');
const closeButton = document.querySelector('.close-button');
const browserAgent = navigator.userAgent.toLowerCase();

if (browserAgent.indexOf('chrome')) {

} else if (browserAgent.indexOf('opera')) {


} else if (browserAgent.indexOf('firefox')) {

} else {
    modalBox.style.display = "block";
};

closeButton.onclick = () => {
    modalBox.style.display = "none";
};

window.onclick = () => {
    modalBox.style.display = "none";
};
