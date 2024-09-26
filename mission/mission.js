const themeSelect = document.querySelector(".themeSelect");
const body = document.body;
const imageSelect = document.querySelector(".logo");

function changeTheme() {
    if (themeSelect.value === "dark") {
        body.classList.add("dark");
        imageSelect.src = "byui-logo_white.png";
    } else {
        body.classList.remove("dark");
        imageSelect.src = "byui-logo_blue.webp";
    }
};

themeSelect.addEventListener('change', changeTheme);
